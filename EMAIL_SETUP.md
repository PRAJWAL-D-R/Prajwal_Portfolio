# Email Setup Guide

## 📧 Direct Email Sending Setup

To enable direct email sending to `prajwaldr125@gmail.com`, follow these steps:

### 1. Get Resend API Key
1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Set Environment Variable
Create a `.env.local` file in your project root with:

```env
RESEND_API_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with your Resend API key.

### 3. Verify Your Domain (Optional but Recommended)
1. In Resend dashboard, go to Domains
2. Add your domain (e.g., `yourdomain.com`)
3. Follow DNS verification steps
4. Update the `from` field in `pages/api/send-email.ts` to use your verified domain

### 4. Test the Contact Form
1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out the form and submit
4. Check your email at `prajwaldr125@gmail.com`

## 🎯 How It Works

- **User fills form** → **Clicks "Send Message"** → **Email sent directly to your inbox**
- **No email client required** for users
- **Professional HTML email** with sender details
- **Reply-to set** to sender's email for easy responses

## 📧 Email Format You'll Receive

```
Subject: Portfolio Contact: [Sender's Name]

HTML formatted email with:
- Sender's name and email
- Timestamp
- Message content
- Reply-to set to sender's email
```

## 🔧 Troubleshooting

- **API Key Issues**: Make sure the key is correct in `.env.local`
- **Domain Issues**: Use `onboarding@resend.dev` for testing
- **Rate Limits**: Resend free tier allows 100 emails/day
- **Spam**: Check spam folder if emails don't arrive

## 🚀 Alternative: EmailJS Setup

If you prefer EmailJS over Resend:

1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create account and service
3. Update `lib/email-service.ts` with your credentials
4. Switch the contact form to use EmailJS instead
