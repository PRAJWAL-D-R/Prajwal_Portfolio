# Formspree Setup - Direct Email to prajwaldr125@gmail.com

## 🚀 Quick Setup (1 minute)

### Step 1: Create Formspree Account
1. Go to [Formspree.io](https://formspree.io)
2. Click "Get Started"
3. Sign up with your email: `prajwaldr125@gmail.com`
4. Verify your email address

### Step 2: Create New Form
1. Click "New Form"
2. Form name: "Portfolio Contact"
3. Copy the form endpoint URL (looks like `https://formspree.io/f/xpwgkqpn`)

### Step 3: Update the Code
1. Open `pages/contact.tsx`
2. Find line 20: `const response = await fetch('https://formspree.io/f/xpwgkqpn', {`
3. Replace `xpwgkqpn` with your actual form ID
4. Save the file

### Step 4: Test
1. Go to `/contact` page
2. Fill out the form
3. Submit - you'll receive emails at `prajwaldr125@gmail.com`

## 📧 What You'll Receive

**Email Subject:** Portfolio Contact: [Sender's Name]

**Email Content:**
```
Name: John Doe
Email: john@example.com
Message: Hi, I'm interested in working with you...

Reply-To: john@example.com
```

## ✨ Features

- **Direct delivery** to your inbox
- **No API keys** required
- **Free tier**: 50 submissions/month
- **Spam protection** built-in
- **Reply-to** functionality
- **Fallback** to mailto if service fails

## 🔧 Current Status

The form is already configured with a temporary Formspree endpoint. To make it work with your email:

1. **Sign up at Formspree.io**
2. **Create a form**
3. **Replace the URL** in the code with your form URL
4. **Test the form**

## 🎯 Alternative: Use Current Setup

The current setup will:
1. **Try Formspree** first (may work with temporary endpoint)
2. **Fallback to mailto** if Formspree fails
3. **Always work** - users can always send emails

This ensures your contact form always works, even without setup!
