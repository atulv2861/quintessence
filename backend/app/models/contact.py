from sqlalchemy import Column, String, Text, Enum, DateTime, Integer
from .base import BaseModel
import enum

class ContactStatus(enum.Enum):
    NEW = "new"
    IN_PROGRESS = "in_progress"
    RESOLVED = "resolved"
    CLOSED = "closed"

class ContactInquiry(BaseModel):
    __tablename__ = "contact_inquiries"
    
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone = Column(String)
    subject = Column(String, nullable=False)
    message = Column(Text, nullable=False)
    company = Column(String)
    service_interest = Column(String)
    status = Column(Enum(ContactStatus), default=ContactStatus.NEW)
    response = Column(Text)  # Admin response
    responded_at = Column(DateTime)
    responded_by = Column(Integer)  # User ID who responded

