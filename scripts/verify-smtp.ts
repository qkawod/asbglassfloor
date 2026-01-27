import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function verifySmtp() {
    console.log('Testing SMTP Connection...');
    console.log(`Host: ${process.env.SMTP_HOST}`);
    console.log(`Port: ${process.env.SMTP_PORT}`);
    console.log(`User: ${process.env.SMTP_USER}`);

    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '').replace(/"/g, '') || '';
    console.log(`Password Length: ${smtpPass.length}`);

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !smtpPass) {
        console.error('❌ Missing SMTP configuration. Please check .env.local');
        return;
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 465,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: smtpPass,
        },
    });

    try {
        await transporter.verify();
        console.log('✅ SMTP Connection Successful! Your settings are correct.');
    } catch (error) {
        console.error('❌ SMTP Connection Failed:', error);
    }
}

verifySmtp();
