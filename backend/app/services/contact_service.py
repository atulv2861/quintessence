from sqlalchemy.orm import Session
from typing import List, Optional
from app.models.contact import ContactInquiry
from app.schemas.contact import ContactInquiryCreate

class ContactService:
    def __init__(self, db: Session):
        self.db = db
    
    async def create_inquiry(self, inquiry: ContactInquiryCreate) -> ContactInquiry:
        """Create a new contact inquiry"""
        db_inquiry = ContactInquiry(**inquiry.dict())
        self.db.add(db_inquiry)
        self.db.commit()
        self.db.refresh(db_inquiry)
        return db_inquiry
    
    async def get_inquiries(
        self, 
        skip: int = 0, 
        limit: int = 100
    ) -> List[ContactInquiry]:
        """Get all contact inquiries"""
        return self.db.query(ContactInquiry).offset(skip).limit(limit).all()
    
    async def get_inquiry_by_id(self, inquiry_id: int) -> Optional[ContactInquiry]:
        """Get contact inquiry by ID"""
        return self.db.query(ContactInquiry).filter(ContactInquiry.id == inquiry_id).first()
    
    async def update_inquiry_status(
        self, 
        inquiry_id: int, 
        status: str,
        response: Optional[str] = None
    ) -> Optional[ContactInquiry]:
        """Update inquiry status and response"""
        db_inquiry = await self.get_inquiry_by_id(inquiry_id)
        if not db_inquiry:
            return None
        
        db_inquiry.status = status
        if response:
            db_inquiry.response = response
        
        self.db.commit()
        self.db.refresh(db_inquiry)
        return db_inquiry

