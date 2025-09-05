from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from app.core.database import get_db
from app.schemas.contact import ContactInquiryCreate, ContactInquiry
from app.services.contact_service import ContactService
from app.services.email_service import EmailService

router = APIRouter()

@router.post("/", response_model=ContactInquiry)
async def create_contact_inquiry(
    inquiry: ContactInquiryCreate,
    db: Session = Depends(get_db)
):
    """Submit contact inquiry"""
    contact_service = ContactService(db)
    email_service = EmailService()
    
    # Create inquiry in database
    created_inquiry = await contact_service.create_inquiry(inquiry)
    
    # Send email notification
    await email_service.send_contact_notification(created_inquiry)
    
    return created_inquiry

@router.get("/", response_model=List[ContactInquiry])
async def get_contact_inquiries(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """Get all contact inquiries (admin only)"""
    contact_service = ContactService(db)
    return await contact_service.get_inquiries(skip=skip, limit=limit)

