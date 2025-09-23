export interface EmailData {
  email: string;
  subject: string;
  message: string;
  name: string;
  contact: string;
  address: string;
  files?: File[];
}

export interface EmailResponse {
  status: 'success' | 'error';
  message: string;
}

export class EmailService {
  private static readonly API_BASE_URL = (import.meta.env.VITE_API_BASE_URL);

  /**
   * Send contact form email
   * @param data - Contact form data
   * @returns Promise<EmailResponse>
   */
  static async sendContactEmail(data: EmailData): Promise<EmailResponse> {
    try {
      const formData = new FormData();
      
      // Add all required fields
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('name', data.name);
      formData.append('contact', data.contact);
      formData.append('address', data.address);
      
      // Add files if provided
      if (data.files && data.files.length > 0) {
        data.files.forEach((file) => {
          formData.append('files', file);
        });
      }

      const response = await fetch(`${this.API_BASE_URL}/send/email`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
        },
        body: formData,
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
    files?: File[];
  }): Promise<EmailResponse> {
    const emailData: EmailData = {
      email: formData.email,
      subject: formData.subject || 'Contact us',
      message: formData.message,
      name: formData.name,
      contact: formData.phone || 'Not provided',
      address: formData.address || 'Not provided',
      files: formData.files
    };

    return this.sendContactEmail(emailData);
  }
}

export default EmailService;
