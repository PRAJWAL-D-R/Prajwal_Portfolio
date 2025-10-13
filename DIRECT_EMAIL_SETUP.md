# Direct Email Setup - Send to prajwaldr125@gmail.com

## 🚀 Quick Setup (2 minutes)

### Option 1: Web3Forms (Recommended - Easiest)

1. **Go to [Web3Forms.com](https://web3forms.com)**
2. **Sign up** with your email: `prajwaldr125@gmail.com`
3. **Get your access key** (free, unlimited emails)
4. **Update the code**:
   - Open `lib/email-service.ts`
   - Replace `your_web3forms_access_key` with your actual access key
   - Save the file

### Option 2: EmailJS (Alternative)

1. **Go to [EmailJS.com](https://www.emailjs.com)**
2. **Sign up** with your email: `prajwaldr125@gmail.com`
3. **Create a service** (Gmail recommended)
4. **Create an email template**:
   ```
   Subject: Portfolio Contact: {{subject}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
5. **Update the code**:
   - Open `lib/email-service.ts`
   - Replace the placeholder values with your actual IDs
   - Switch to use `sendContactEmail` instead of `sendEmailViaWeb3Forms`

## 📧 How It Works

1. **User fills form** → **Clicks "Send Message"**
2. **Email sent directly** to `prajwaldr125@gmail.com`
3. **No email client** required for users
4. **Form resets** and shows success message

## ✨ Features

- **Direct delivery** to your inbox
- **Professional email** formatting
- **Reply-to** set to sender's email
- **Spam protection**
- **Free service** (Web3Forms: unlimited, EmailJS: 200/month)
- **No server setup** required

## 🔧 Current Status

The form is ready to work with Web3Forms. Just add your access key and it will send emails directly to `prajwaldr125@gmail.com`!

## 📱 Test the Form

1. **Add your Web3Forms access key**
2. **Go to `/contact` page**
3. **Fill out the form**
4. **Click "Send Message"**
5. **Check your email** at `prajwaldr125@gmail.com`

## 🎯 Email Format You'll Receive

```
Subject: Portfolio Contact: [Sender's Name]

Name: John Doe
Email: john@example.com

Message:
Hi Prajwal, I'm interested in working with you...

Reply-To: john@example.com
```

The form will now send emails directly to your inbox! 🎉
