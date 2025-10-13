import emailjs from '@emailjs/browser'

// EmailJS configuration - you'll need to replace these with your actual values
const EMAILJS_SERVICE_ID = 'service_portfolio_contact' // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_portfolio_contact' // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key_here' // Replace with your EmailJS public key

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(formData: ContactFormData): Promise<boolean> {
  try {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_PUBLIC_KEY)
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'prajwaldr125@gmail.com',
      reply_to: formData.email,
      subject: `Portfolio Contact: ${formData.name}`
    }
    
    // Send email
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    )
    
    console.log('Email sent successfully:', response)
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

// Alternative: Use a simple fetch to a free email service
export async function sendEmailViaWeb3Forms(formData: ContactFormData): Promise<boolean> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'your_web3forms_access_key', // Replace with your Web3Forms access key
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `Portfolio Contact: ${formData.name}`,
        to: 'prajwaldr125@gmail.com',
        reply_to: formData.email,
      }),
    })

    const result = await response.json()
    return result.success
  } catch (error) {
    console.error('Failed to send email via Web3Forms:', error)
    return false
  }
}