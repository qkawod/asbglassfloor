# Deploy & Setup Guide

## 1. Contact Form Setup (Vercel Environment Variables)

The contact form uses **SMTP** (email server) to send emails. You need to configure the following Environment Variables in your Vercel Project Settings.

### Required Variables

Go to **Vercel Dashboard > Project > Settings > Environment Variables** and add:

| Key | Description | Example (Gmail) |
|-----|-------------|-----------------|
| `SMTP_HOST` | The SMTP server address | `smtp.gmail.com` |
| `SMTP_PORT` | The SMTP port | `587` |
| `SMTP_USER` | Your email address used to send mails | `your-email@gmail.com` |
| `SMTP_PASS` | Your email password or App Password* | `xxxx xxxx xxxx xxxx` |
| `CONTACT_RECEIVER_EMAIL` | (Optional) Who receives the inquiries | `contact@yourdomain.com` |

> [!IMPORTANT]
> **Using Gmail?** You typically cannot use your login password. You must enable **2-Factor Authentication** and generate an **App Password**.
>
> 1. Go to Google Account > Security.
> 2. Enable 2-Step Verification.
> 3. Search for "App passwords" and create one.
> 4. Use that 16-digit code as your `SMTP_PASS`.

---

## 2. Connecting a Custom Domain

To connect a domain you purchased (e.g., from GoDaddy, Namecheap, Gabia, etc.):

1. Go to **Vercel Dashboard > Project > Settings > Domains**.
2. Enter your domain name (e.g., `example.com`) and click **Add**.
3. Vercel will provide **DNS Records** (A Record and CNAME) that you need to configure at your domain registrar.

### DNS Configuration Types

**Option A: Nameservers (Recommended for beginners)**

- Change your domain's Nameservers to Vercel's:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
- This moves full DNS management to Vercel.

**Option B: A Record & CNAME (If you want to keep using your registrar's DNS)**

- Log in to your domain registrar (where you bought the domain).
- Find **DNS Settings** or **Zone Editor**.
- Add the records shown in Vercel Settings:
  - **A Record**: Host `@` -> Value `76.76.21.21`
  - **CNAME Record**: Host `www` -> Value `cname.vercel-dns.com`
- Wait for propagation (can take up to 24 hours, usually faster).
