# EmailJS Setup Guide

Your contact form is ready to use EmailJS for sending emails directly from your website without a backend server!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```
Subject: {{subject}}

New message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy your Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. **Copy your Public Key** (you'll need this)

### Step 5: Update Your Code
1. Open `src/components/Contact.tsx`
2. Find these lines (around line 31-33):
```typescript
const SERVICE_ID = 'YOUR_SERVICE_ID'        // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'      // Replace with your Template ID  
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'        // Replace with your Public Key
```
3. Replace the placeholder values with your actual IDs

### Example:
```typescript
const SERVICE_ID = 'service_abc123'
const TEMPLATE_ID = 'template_xyz789'  
const PUBLIC_KEY = 'user_def456'
```

## ✅ That's it!

Once configured, your contact form will:
- ✨ Send emails directly to your inbox
- 🚀 Work without any backend server
- 📱 Show success/error messages
- 🔄 Reset the form after sending

## 🆓 Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites!

## 🔧 Current Status
- ✅ EmailJS is installed and ready
- ✅ Contact form is configured
- ⏳ Waiting for your EmailJS credentials
- 🔄 Currently using mailto fallback

---

**Need help?** Check the EmailJS documentation: https://www.emailjs.com/docs/
