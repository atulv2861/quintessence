# Quintessence Consultants Website - API Endpoints & Data Models

## Backend API Design (FastAPI + Python)

### Base Configuration
```python
# app/core/config.py
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = "postgresql://user:password@localhost/quintessence"
    
    # Security
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Email
    EMAIL_HOST: str
    EMAIL_PORT: int = 587
    EMAIL_USER: str
    EMAIL_PASSWORD: str
    
    # File Upload
    UPLOAD_DIR: str = "static/uploads"
    MAX_FILE_SIZE: int = 10 * 1024 * 1024  # 10MB
    
    # CORS
    ALLOWED_ORIGINS: list = ["http://localhost:3000", "https://sevenhealerconsultants.in"]
    
    class Config:
        env_file = ".env"
```

## Database Models (SQLAlchemy)

### Base Model
```python
# app/models/base.py
from sqlalchemy import Column, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class BaseModel(Base):
    __abstract__ = True
    
    id = Column(Integer, primary_key=True, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
```

### User Model
```python
# app/models/user.py
from sqlalchemy import Column, String, Boolean
from .base import BaseModel

class User(BaseModel):
    __tablename__ = "users"
    
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_superuser = Column(Boolean, default=False)
    full_name = Column(String)
```

### Service Model
```python
# app/models/service.py
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
```

### Project Model
```python
# app/models/project.py
from sqlalchemy import Column, String, Text, Integer, Enum
from .base import BaseModel
import enum

class ProjectStatus(enum.Enum):
    PLANNED = "planned"
    ONGOING = "ongoing"
    COMPLETED = "completed"

class Project(BaseModel):
    __tablename__ = "projects"
    
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    description = Column(Text, nullable=False)
    detailed_description = Column(Text)
    image = Column(String, nullable=False)
    gallery = Column(Text)  # JSON string of image URLs
    category = Column(String, nullable=False)
    location = Column(String, nullable=False)
    area = Column(Integer)  # Area in square meters
    beds = Column(Integer)  # Number of beds
    status = Column(Enum(ProjectStatus), default=ProjectStatus.PLANNED)
    client_name = Column(String)
    completion_date = Column(String)
    is_featured = Column(Boolean, default=False)
    sort_order = Column(Integer, default=0)
    meta_title = Column(String)
    meta_description = Column(String)
```

### Blog Model
```python
# app/models/blog.py
from sqlalchemy import Column, String, Text, Boolean, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from .base import BaseModel

class BlogPost(BaseModel):
    __tablename__ = "blog_posts"
    
    title = Column(String, nullable=False)
    slug = Column(String, unique=True, index=True, nullable=False)
    content = Column(Text, nullable=False)
    excerpt = Column(Text)
    featured_image = Column(String)
    author_id = Column(Integer, ForeignKey("users.id"))
    status = Column(String, default="draft")  # draft, published, archived
    published_at = Column(DateTime)
    category = Column(String)
    tags = Column(Text)  # JSON string of tags
    meta_title = Column(String)
    meta_description = Column(String)
    view_count = Column(Integer, default=0)
    
    # Relationships
    author = relationship("User", back_populates="blog_posts")
```

### Testimonial Model
```python
# app/models/testimonial.py
from sqlalchemy import Column, String, Text, Integer, Boolean
from .base import BaseModel

class Testimonial(BaseModel):
    __tablename__ = "testimonials"
    
    name = Column(String, nullable=False)
    position = Column(String)
    company = Column(String)
    content = Column(Text, nullable=False)
    image = Column(String)
    rating = Column(Integer, default=5)  # 1-5 stars
    is_featured = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    sort_order = Column(Integer, default=0)
    project_id = Column(Integer)  # Optional link to project
```

### FAQ Model
```python
# app/models/faq.py
from sqlalchemy import Column, String, Text, Integer, Boolean
from .base import BaseModel

class FAQ(BaseModel):
    __tablename__ = "faqs"
    
    question = Column(String, nullable=False)
    answer = Column(Text, nullable=False)
    category = Column(String, default="general")
    sort_order = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)
    view_count = Column(Integer, default=0)
```

### Contact Model
```python
# app/models/contact.py
from sqlalchemy import Column, String, Text, Enum
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
```

## Pydantic Schemas

### Service Schemas
```python
# app/schemas/service.py
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class ServiceBase(BaseModel):
    title: str
    description: str
    detailed_description: Optional[str] = None
    icon: Optional[str] = None
    image: Optional[str] = None
    features: Optional[List[str]] = []
    is_active: bool = True
    sort_order: int = 0
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None

class ServiceCreate(ServiceBase):
    slug: str

class ServiceUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    detailed_description: Optional[str] = None
    icon: Optional[str] = None
    image: Optional[str] = None
    features: Optional[List[str]] = None
    is_active: Optional[bool] = None
    sort_order: Optional[int] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None

class Service(ServiceBase):
    id: int
    slug: str
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
```

### Project Schemas
```python
# app/schemas/project.py
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from app.models.project import ProjectStatus

class ProjectBase(BaseModel):
    title: str
    description: str
    detailed_description: Optional[str] = None
    image: str
    gallery: Optional[List[str]] = []
    category: str
    location: str
    area: Optional[int] = None
    beds: Optional[int] = None
    status: ProjectStatus = ProjectStatus.PLANNED
    client_name: Optional[str] = None
    completion_date: Optional[str] = None
    is_featured: bool = False
    sort_order: int = 0
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None

class ProjectCreate(ProjectBase):
    slug: str

class ProjectUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    detailed_description: Optional[str] = None
    image: Optional[str] = None
    gallery: Optional[List[str]] = None
    category: Optional[str] = None
    location: Optional[str] = None
    area: Optional[int] = None
    beds: Optional[int] = None
    status: Optional[ProjectStatus] = None
    client_name: Optional[str] = None
    completion_date: Optional[str] = None
    is_featured: Optional[bool] = None
    sort_order: Optional[int] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None

class Project(ProjectBase):
    id: int
    slug: str
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
```

### Contact Schemas
```python
# app/schemas/contact.py
from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class ContactInquiryBase(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: str
    message: str
    company: Optional[str] = None
    service_interest: Optional[str] = None

class ContactInquiryCreate(ContactInquiryBase):
    pass

class ContactInquiryUpdate(BaseModel):
    status: Optional[str] = None
    response: Optional[str] = None

class ContactInquiry(ContactInquiryBase):
    id: int
    status: str
    response: Optional[str] = None
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True
```

## API Endpoints

### Public Endpoints

#### Services API
```python
# app/api/v1/services.py
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.service import Service
from app.services.service_service import ServiceService

router = APIRouter()

@router.get("/", response_model=List[Service])
async def get_services(
    skip: int = 0,
    limit: int = 100,
    active_only: bool = True,
    service_service: ServiceService = Depends()
):
    """Get all services"""
    return await service_service.get_services(
        skip=skip, limit=limit, active_only=active_only
    )

@router.get("/{slug}", response_model=Service)
async def get_service_by_slug(
    slug: str,
    service_service: ServiceService = Depends()
):
    """Get service by slug"""
    service = await service_service.get_service_by_slug(slug)
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service
```

#### Projects API
```python
# app/api/v1/projects.py
from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional
from app.schemas.project import Project
from app.services.project_service import ProjectService

router = APIRouter()

@router.get("/", response_model=List[Project])
async def get_projects(
    skip: int = 0,
    limit: int = 100,
    category: Optional[str] = None,
    status: Optional[str] = None,
    featured_only: bool = False,
    project_service: ProjectService = Depends()
):
    """Get all projects with optional filtering"""
    return await project_service.get_projects(
        skip=skip,
        limit=limit,
        category=category,
        status=status,
        featured_only=featured_only
    )

@router.get("/{slug}", response_model=Project)
async def get_project_by_slug(
    slug: str,
    project_service: ProjectService = Depends()
):
    """Get project by slug"""
    project = await project_service.get_project_by_slug(slug)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.get("/stats/summary")
async def get_project_stats(project_service: ProjectService = Depends()):
    """Get project statistics"""
    return await project_service.get_project_stats()
```

#### Blog API
```python
# app/api/v1/blog.py
from fastapi import APIRouter, Depends, HTTPException, Query
from typing import List, Optional
from app.schemas.blog import BlogPost
from app.services.blog_service import BlogService

router = APIRouter()

@router.get("/", response_model=List[BlogPost])
async def get_blog_posts(
    skip: int = 0,
    limit: int = 10,
    category: Optional[str] = None,
    published_only: bool = True,
    blog_service: BlogService = Depends()
):
    """Get blog posts with pagination and filtering"""
    return await blog_service.get_blog_posts(
        skip=skip,
        limit=limit,
        category=category,
        published_only=published_only
    )

@router.get("/{slug}", response_model=BlogPost)
async def get_blog_post_by_slug(
    slug: str,
    blog_service: BlogService = Depends()
):
    """Get blog post by slug"""
    post = await blog_service.get_blog_post_by_slug(slug)
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    # Increment view count
    await blog_service.increment_view_count(post.id)
    return post
```

#### Contact API
```python
# app/api/v1/contact.py
from fastapi import APIRouter, Depends, HTTPException
from app.schemas.contact import ContactInquiryCreate, ContactInquiry
from app.services.contact_service import ContactService
from app.services.email_service import EmailService

router = APIRouter()

@router.post("/", response_model=ContactInquiry)
async def create_contact_inquiry(
    inquiry: ContactInquiryCreate,
    contact_service: ContactService = Depends(),
    email_service: EmailService = Depends()
):
    """Submit contact inquiry"""
    # Create inquiry in database
    created_inquiry = await contact_service.create_inquiry(inquiry)
    
    # Send email notification
    await email_service.send_contact_notification(created_inquiry)
    
    return created_inquiry
```

#### Testimonials API
```python
# app/api/v1/testimonials.py
from fastapi import APIRouter, Depends
from typing import List
from app.schemas.testimonial import Testimonial
from app.services.testimonial_service import TestimonialService

router = APIRouter()

@router.get("/", response_model=List[Testimonial])
async def get_testimonials(
    featured_only: bool = False,
    active_only: bool = True,
    testimonial_service: TestimonialService = Depends()
):
    """Get testimonials"""
    return await testimonial_service.get_testimonials(
        featured_only=featured_only,
        active_only=active_only
    )
```

#### FAQ API
```python
# app/api/v1/faqs.py
from fastapi import APIRouter, Depends
from typing import List, Optional
from app.schemas.faq import FAQ
from app.services.faq_service import FAQService

router = APIRouter()

@router.get("/", response_model=List[FAQ])
async def get_faqs(
    category: Optional[str] = None,
    active_only: bool = True,
    faq_service: FAQService = Depends()
):
    """Get FAQs"""
    return await faq_service.get_faqs(
        category=category,
        active_only=active_only
    )
```

### Admin Endpoints (Protected)

#### Authentication
```python
# app/api/v1/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from app.schemas.user import User, UserCreate, Token
from app.services.auth_service import AuthService

router = APIRouter()

@router.post("/login", response_model=Token)
async def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    auth_service: AuthService = Depends()
):
    """Admin login"""
    user = await auth_service.authenticate_user(
        form_data.username, form_data.password
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = auth_service.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_user)):
    """Get current user info"""
    return current_user
```

#### Admin Services Management
```python
# app/api/v1/admin/services.py
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.schemas.service import Service, ServiceCreate, ServiceUpdate
from app.services.service_service import ServiceService
from app.api.deps import get_current_admin_user

router = APIRouter()

@router.post("/", response_model=Service)
async def create_service(
    service: ServiceCreate,
    current_user: User = Depends(get_current_admin_user),
    service_service: ServiceService = Depends()
):
    """Create new service"""
    return await service_service.create_service(service)

@router.put("/{service_id}", response_model=Service)
async def update_service(
    service_id: int,
    service_update: ServiceUpdate,
    current_user: User = Depends(get_current_admin_user),
    service_service: ServiceService = Depends()
):
    """Update service"""
    return await service_service.update_service(service_id, service_update)

@router.delete("/{service_id}")
async def delete_service(
    service_id: int,
    current_user: User = Depends(get_current_admin_user),
    service_service: ServiceService = Depends()
):
    """Delete service"""
    await service_service.delete_service(service_id)
    return {"message": "Service deleted successfully"}
```

## Service Layer Examples

### Service Service
```python
# app/services/service_service.py
from typing import List, Optional
from sqlalchemy.orm import Session
from app.models.service import Service
from app.schemas.service import ServiceCreate, ServiceUpdate

class ServiceService:
    def __init__(self, db: Session):
        self.db = db
    
    async def get_services(
        self, 
        skip: int = 0, 
        limit: int = 100, 
        active_only: bool = True
    ) -> List[Service]:
        query = self.db.query(Service)
        if active_only:
            query = query.filter(Service.is_active == True)
        
        return query.offset(skip).limit(limit).all()
    
    async def get_service_by_slug(self, slug: str) -> Optional[Service]:
        return self.db.query(Service).filter(Service.slug == slug).first()
    
    async def create_service(self, service: ServiceCreate) -> Service:
        db_service = Service(**service.dict())
        self.db.add(db_service)
        self.db.commit()
        self.db.refresh(db_service)
        return db_service
    
    async def update_service(
        self, 
        service_id: int, 
        service_update: ServiceUpdate
    ) -> Service:
        db_service = self.db.query(Service).filter(Service.id == service_id).first()
        if not db_service:
            raise HTTPException(status_code=404, detail="Service not found")
        
        update_data = service_update.dict(exclude_unset=True)
        for field, value in update_data.items():
            setattr(db_service, field, value)
        
        self.db.commit()
        self.db.refresh(db_service)
        return db_service
```

This comprehensive API design provides a solid foundation for the Quintessence Consultants website backend with proper data models, schemas, and endpoints for both public and admin functionality.

