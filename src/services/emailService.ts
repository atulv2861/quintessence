// Email service for sending contact form submissions
export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export class EmailService {
  private static readonly EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
  private static readonly EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
  private static readonly EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

  // Method 1: Using EmailJS (Recommended for quick setup)
  static async sendEmailWithEmailJS(data: EmailData): Promise<boolean> {
    try {
      // Load EmailJS script if not already loaded
      if (!window.emailjs) {
        await this.loadEmailJSScript();
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        company: data.company || 'Not provided',
        subject: data.subject,
        message: data.message,
        to_email: 'info@sevenhealerconsultants.in', // Your business email
      };

      await window.emailjs.send(
        this.EMAILJS_SERVICE_ID,
        this.EMAILJS_TEMPLATE_ID,
        templateParams,
        this.EMAILJS_PUBLIC_KEY
      );

      return true;
    } catch (error) {
      console.error('EmailJS error:', error);
      return false;
    }
  }

  // Method 2: Using backend API (if backend is running)
  static async sendEmailWithBackend(data: EmailData): Promise<boolean> {
    try {
      const response = await fetch('/api/v1/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          subject: data.subject,
          message: data.message,
          service_interest: data.subject,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Backend email error:', error);
      return false;
    }
  }

  // Method 3: Fallback - Open default email client
  static openEmailClient(data: EmailData): void {
    const subject = encodeURIComponent(`Contact Form: ${data.subject}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Company: ${data.company || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
    `);
    
    const mailtoLink = `mailto:info@sevenhealerconsultants.in?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
  }

  // Load EmailJS script dynamically
  private static async loadEmailJSScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.emailjs) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        window.emailjs.init(this.EMAILJS_PUBLIC_KEY);
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Main method that tries different approaches
  static async sendEmail(data: EmailData): Promise<boolean> {
    // Try backend first
    try {
      const backendSuccess = await this.sendEmailWithBackend(data);
      if (backendSuccess) return true;
    } catch (error) {
      console.log('Backend not available, trying alternative methods...');
    }

    // Try EmailJS as fallback
    try {
      const emailjsSuccess = await this.sendEmailWithEmailJS(data);
      if (emailjsSuccess) return true;
    } catch (error) {
      console.log('EmailJS not configured, using fallback...');
    }

    // Fallback to opening email client
    this.openEmailClient(data);
    return true; // Return true since we opened the email client
  }
}

// Extend Window interface for EmailJS
declare global {
  interface Window {
    emailjs: any;
  }
}

