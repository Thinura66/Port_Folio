# EmailJS Setup Instructions

## ✅ Step 1: Create EmailJS Account - COMPLETED
Your account is already set up with:
- **Service ID**: senitha_tk
- **Public Key**: btDkJsyhjqEEgEdQE

## ✅ Step 2: Create Email Template - COMPLETED
Your template has been created with:
- **Template ID**: template_i6t91ii
- **Template Content**: Simplified format with name, time, and message

## ✅ Step 3: Update Your Code - COMPLETED
Template ID has been configured in your `Contact.jsx` file.

## ✅ Step 4: Test - READY TO TEST
1. Save your changes
2. Fill out and submit the contact form on your website  
3. Check your email to see if the message was received

Your EmailJS setup is now complete! The contact form will send emails with:
- Name: {{name}}
- Email: {{email}}
- Phone: {{phone}}
- Time: {{time}} (automatically generated)
- Message: {{message}}

## ⚠️ IMPORTANT: Update Your EmailJS Template
You need to update your EmailJS template to include the new fields. Go to your EmailJS dashboard and update your template content to:

```
Hello,

You have received a new message from your portfolio website:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Time: {{time}}
Message: {{message}}

---
Sent from your portfolio contact form
```

## Important Notes
- Make sure your form field names match the template variables
- Current form fields: name, email, phone, message
- EmailJS free plan allows 200 emails per month
- Your credentials are safe to use in frontend code (they're designed for client-side use)

## Troubleshooting
If you see "Failed to send message" error, check these steps:

### 1. Check Browser Console
- Open Developer Tools (F12)
- Look for detailed error messages in the Console tab
- Common errors and solutions:

**Error: "Invalid user ID"**
- Solution: Verify your Public Key is correct

**Error: "Template not found"** 
- Solution: Verify your Template ID is correct

**Error: "Service not found"**
- Solution: Verify your Service ID is correct

### 2. Verify EmailJS Dashboard Settings
- Make sure your email service (Gmail, etc.) is connected and verified
- Check that your template variables match: `{{name}}`, `{{time}}`, `{{message}}`
- Ensure your template is saved and active

### 3. Test with Simple Data
Try sending a test message with:
- Name: "Test User"
- Message: "This is a test message"

### 4. Check Network Connection
- Ensure you have internet connection
- Try refreshing the page and testing again

If the problem persists, check the browser console for specific error messages.
