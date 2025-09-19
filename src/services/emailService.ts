export interface EmailData {
  email: string;
  subject: string;
  message: string;
  name: string;
  contact: string;
  address: string;
  company_name: string;
}

export interface EmailResponse {
  status: 'success' | 'error';
  message: string;
}

export class EmailService {
  private static readonly API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000') + '/api/v1';

  /**
   * Send contact form email
   * @param data - Contact form data
   * @returns Promise<EmailResponse>
   */
  static async sendContactEmail(data: EmailData): Promise<EmailResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/send/email`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: EmailResponse = await response.json();
      return result;
    } catch (error) {
      console.error('Email service error:', error);
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to send email'
      };
    }
  }

  /**
   * Send contact form email with form data mapping
   * @param formData - Form data from contact form
   * @returns Promise<EmailResponse>
   */
  static async sendContactForm(formData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    subject: string;
    message: string;
    company?: string;
  }): Promise<EmailResponse> {
    const emailData: EmailData = {
      email: formData.email,
      subject: formData.subject || 'Contact us',
      message: formData.message,
      name: formData.name,
      contact: formData.phone,
      address: formData.address,
      company_name: formData.company || ''
    };

    return this.sendContactEmail(emailData);
  }
}

export default EmailService;
