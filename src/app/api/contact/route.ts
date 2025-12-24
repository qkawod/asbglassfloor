import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { salutation, firstName, lastName, email, company, phone, country, inquiryType, message } = body;

        // Check if nodemailer options are set
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP environment variables");
            return NextResponse.json(
                { error: "Server configuration error. Please contact support." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`, // Sender address (often needs to be the authenticated user)
            replyTo: email, // Reply to the user who filled the form
            to: process.env.CONTACT_RECEIVER_EMAIL || "globe@globecorp.co.kr", // Receiver address
            subject: `New Inquiry from Website: ${inquiryType} - ${company}`,
            text: `
                Name: ${salutation} ${firstName} ${lastName}
                Company: ${company}
                Email: ${email}
                Phone: ${phone}
                Country: ${country}
                Type: ${inquiryType}

                Message:
                ${message}
            `,
            html: `
                <h3>New Inquiry Received</h3>
                <p><strong>Name:</strong> ${salutation} ${firstName} ${lastName}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Type:</strong> ${inquiryType}</p>
                <br/>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px;">
                    ${message.replace(/\n/g, '<br>')}
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email." },
            { status: 500 }
        );
    }
}
