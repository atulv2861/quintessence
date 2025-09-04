import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Optional
from app.core.config import settings
from app.models.contact import ContactInquiry

class EmailService:
    def __init__(self):
        self.smtp_server = settings.EMAIL_HOST
        self.smtp_port = settings.EMAIL_PORT
        self.email_user = settings.EMAIL_USER
        self.email_password = settings.EMAIL_PASSWORD
        self.from_email = settings.EMAIL_FROM
    
    async def send_contact_notification(self, inquiry: ContactInquiry) -> bool:
        """Send email notification for new contact inquiry"""
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.from_email
            msg['To'] = settings.EMAIL_USER
            msg['Subject'] = f"New Contact Inquiry: {inquiry.subject}"
            
            # Create email body
            body = f"""
            New contact inquiry received:
            
            Name: {inquiry.name}
            Email: {inquiry.email}
            Phone: {inquiry.phone or 'Not provided'}
            Company: {inquiry.company or 'Not provided'}
            Subject: {inquiry.subject}
            Service Interest: {inquiry.service_interest or 'Not specified'}
            
            Message:
            {inquiry.message}
            
            ---
            This inquiry was submitted through the Quintessence Medical Consultants website.
            """
            
            msg.attach(MIMEText(body, 'plain'))
            
            # Send email
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.email_user, self.email_password)
            text = msg.as_string()
            server.sendmail(self.from_email, settings.EMAIL_USER, text)
            server.quit()
            
            return True
            
        except Exception as e:
            print(f"Error sending email: {e}")
            return False
    
    async def send_auto_reply(self, inquiry: ContactInquiry) -> bool:
        """Send auto-reply to the person who submitted the inquiry"""
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.from_email
            msg['To'] = inquiry.email
            msg['Subject'] = "Thank you for contacting Quintessence Medical Consultants"
            
            # Create email body
            body = f"""
            Dear {inquiry.name},
            
            Thank you for contacting Quintessence Medical Consultants. We have received your inquiry regarding "{inquiry.subject}".
            
            Our team will review your message and get back to you within 24 hours.
            
            If you have any urgent queries, please feel free to call us at:
            - {settings.CONTACT_PHONE}
            - {settings.CONTACT_PHONE_2}
            
            Best regards,
            Quintessence Medical Consultants Team
            
            ---
            This is an automated response. Please do not reply to this email.
            """
            
            msg.attach(MIMEText(body, 'plain'))
            
            # Send email
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()
            server.login(self.email_user, self.email_password)
            text = msg.as_string()
            server.sendmail(self.from_email, inquiry.email, text)
            server.quit()
            
            return True
            
        except Exception as e:
            print(f"Error sending auto-reply: {e}")
            return False
