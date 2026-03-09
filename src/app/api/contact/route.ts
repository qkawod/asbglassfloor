import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, jobTitle, phone, inquiryType, productInterest, message } = body;

        // Check if nodemailer options are set
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.error("Missing SMTP environment variables");
            return NextResponse.json(
                { error: "Server configuration error. Please contact support." },
                { status: 500 }
            );
        }

        const port = Number(process.env.SMTP_PORT) || 587;

        // Clean up password (remove spaces and quotes if present)
        const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '').replace(/"/g, '') || '';

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: port,
            secure: port === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: smtpPass,
            },
        });

        // Verify connection configuration
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.error("Transporter verification failed:", error);
                    reject(error);
                } else {
                    console.log("Server is ready to take our messages");
                    resolve(success);
                }
            });
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address
            replyTo: email, // Reply to the user who filled the form
            to: process.env.CONTACT_RECEIVER_EMAIL || "globe@globecorp.co.kr", // Receiver address
            cc: process.env.SMTP_USER, // debug: send a copy to the sender to verify delivery
            subject: `New Inquiry: ${inquiryType} - ${company}`,
            text: `
                Name: ${name}
                Company: ${company}
                Job Title: ${jobTitle}
                Email: ${email}
                Phone: ${phone}
                Type: ${inquiryType}
                Product Interest: ${productInterest}

                Message:
                ${message}
            `,
            html: `
                <h3>New Inquiry Received</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Type:</strong> ${inquiryType}</p>
                <p><strong>Product Interest:</strong> ${productInterest}</p>
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
        const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);

        // Debug info: Check what credentials the server is actually using
        const usedUser = process.env.SMTP_USER || "undefined";
        const passLen = process.env.SMTP_PASS?.length || 0;
        const passStart = process.env.SMTP_PASS ? process.env.SMTP_PASS.substring(0, 2) : "none";

        return NextResponse.json(
            { error: `전송 실패 원인: ${errorMessage} (DEBUG: User=${usedUser}, PassLen=${passLen}, PassStart=${passStart})` },
            { status: 500 }
        );
    }
}
