from sqlalchemy import Column, String, Text, Boolean, Integer
from .base import BaseModel

class Service(BaseModel):
    __tablename__ = "services"
    
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    description = Column(Text, nullable=False)
    detailed_description = Column(Text)
    icon = Column(String)  # Icon class or image path
    image = Column(String)  # Featured image
    features = Column(Text)  # JSON string of features
    is_active = Column(Boolean, default=True)
    sort_order = Column(Integer, default=0)
    meta_title = Column(String)
    meta_description = Column(String)

