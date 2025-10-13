# Email Troubleshooting Guide

## 🔍 Why You're Not Receiving Emails

### Common Issues & Solutions:

## 1. **Formspree Email Verification**
- **Check your email** for a verification link from Formspree
- **Click the verification link** to activate your form
- **Check spam folder** for Formspree emails

## 2. **Gmail Spam Filter**
- **Check Spam folder** in Gmail
- **Check Promotions tab** in Gmail
- **Add Formspree to safe senders**:
  - Go to Gmail Settings → Filters and Blocked Addresses
  - Create filter for emails from Formspree

## 3. **Formspree Settings**
- **Login to Formspree dashboard**
- **Check form settings**:
  - Email notifications enabled
  - Correct email address set
  - Form is active (not paused)

## 4. **Test the Form**
1. **Open browser console** (F12)
2. **Submit the form**
3. **Check console logs** for error messages
4. **Look for response status** (should be 200)

## 🚀 **Alternative Solutions**

### Option 1: Use Mailto (Works Immediately)
The form already has a fallback that opens the user's email client.

### Option 2: Set Up EmailJS (More Reliable)
1. Go to [EmailJS.com](https://www.emailjs.com)
2. Create account with `prajwaldr125@gmail.com`
3. Create Gmail service
4. Create email template
5. Update the code to use EmailJS

### Option 3: Use Web3Forms
1. Go to [Web3Forms.com](https://web3forms.com)
2. Sign up with `prajwaldr125@gmail.com`
3. Get access key
4. Update the code

## 🔧 **Quick Fix - Test Now**

1. **Submit the form again**
2. **Check browser console** (F12 → Console tab)
3. **Look for any error messages**
4. **Check your spam folder**
5. **Verify Formspree account** is activated

## 📧 **Expected Email Format**

When working, you should receive:
```
From: Formspree <noreply@formspree.io>
To: prajwaldr125@gmail.com
Subject: Portfolio Contact: [Sender's Name]

Name: [Sender's Name]
Email: [Sender's Email]
Message: [Sender's Message]

Reply-To: [Sender's Email]
```

## 🆘 **Still Not Working?**

If emails still don't arrive:
1. **Use the mailto fallback** (form will open email client)
2. **Set up EmailJS** for more reliable delivery
3. **Check Formspree dashboard** for submission logs
4. **Contact Formspree support** if needed
