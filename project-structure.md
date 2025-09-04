# Quintessence Consultants Website - Project Structure

## Recommended Tech Stack

### Frontend
- **Framework:** React.js 18+ with TypeScript
- **Styling:** Tailwind CSS + Styled Components
- **State Management:** Redux Toolkit + RTK Query
- **Routing:** React Router v6
- **Forms:** React Hook Form + Yup validation
- **UI Components:** Headless UI + Custom components
- **Icons:** Heroicons or Lucide React
- **Animations:** Framer Motion
- **Build Tool:** Vite

### Backend
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL + SQLAlchemy ORM
- **Authentication:** JWT tokens
- **File Storage:** AWS S3 or local storage
- **Email:** SendGrid or SMTP
- **Validation:** Pydantic
- **Documentation:** FastAPI auto-generated docs

### DevOps & Deployment
- **CI/CD:** GitHub Actions
- **Hosting:** AWS/DigitalOcean/Vercel
- **Monitoring:** Sentry

## Folder Structure

```
quintessence-website/
├── frontend/                          # React.js + TypeScript frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── images/
│   │       ├── logo/
│   │       ├── services/
│   │       ├── projects/
│   │       └── team/
│   ├── src/
│   │   ├── components/                # Reusable UI components
│   │   │   ├── common/
│   │   │   │   ├── Header/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Header.module.css
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Footer/
│   │   │   │   ├── Navigation/
│   │   │   │   ├── Button/
│   │   │   │   ├── Modal/
│   │   │   │   ├── Card/
│   │   │   │   ├── Loading/
│   │   │   │   └── ErrorBoundary/
│   │   │   ├── forms/
│   │   │   │   ├── ContactForm/
│   │   │   │   ├── NewsletterForm/
│   │   │   │   └── ConsultationForm/
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection/
│   │   │   │   ├── AboutSection/
│   │   │   │   ├── ServicesSection/
│   │   │   │   ├── ProjectsSection/
│   │   │   │   ├── TestimonialsSection/
│   │   │   │   ├── FAQSection/
│   │   │   │   └── StatsSection/
│   │   │   └── layout/
│   │   │       ├── Layout/
│   │   │       ├── Sidebar/
│   │   │       └── MobileMenu/
│   │   ├── pages/                     # Page components
│   │   │   ├── Home/
│   │   │   │   ├── HomePage.tsx
│   │   │   │   └── index.ts
│   │   │   ├── About/
│   │   │   ├── Services/
│   │   │   │   ├── ServicesPage.tsx
│   │   │   │   ├── ServiceDetail/
│   │   │   │   └── index.ts
│   │   │   ├── Projects/
│   │   │   ├── Blog/
│   │   │   │   ├── BlogPage.tsx
│   │   │   │   ├── BlogPost/
│   │   │   │   └── index.ts
│   │   │   ├── Contact/
│   │   │   └── NotFound/
│   │   ├── hooks/                     # Custom React hooks
│   │   │   ├── useApi.ts
│   │   │   ├── useLocalStorage.ts
│   │   │   ├── useModal.ts
│   │   │   └── useWhatsApp.ts
│   │   ├── services/                  # API services
│   │   │   ├── api.ts
│   │   │   ├── contactService.ts
│   │   │   ├── blogService.ts
│   │   │   ├── projectService.ts
│   │   │   └── testimonialService.ts
│   │   ├── store/                     # Redux store
│   │   │   ├── index.ts
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.ts
│   │   │   │   ├── contactSlice.ts
│   │   │   │   ├── blogSlice.ts
│   │   │   │   └── uiSlice.ts
│   │   │   └── api/
│   │   │       ├── baseApi.ts
│   │   │       └── endpoints/
│   │   ├── types/                     # TypeScript type definitions
│   │   │   ├── api.ts
│   │   │   ├── blog.ts
│   │   │   ├── project.ts
│   │   │   ├── service.ts
│   │   │   ├── testimonial.ts
│   │   │   └── user.ts
│   │   ├── utils/                     # Utility functions
│   │   │   ├── constants.ts
│   │   │   ├── helpers.ts
│   │   │   ├── validation.ts
│   │   │   └── formatters.ts
│   │   ├── styles/                    # Global styles
│   │   │   ├── globals.css
│   │   │   ├── tailwind.config.js
│   │   │   └── components.css
│   │   ├── assets/                    # Static assets
│   │   │   ├── images/
│   │   │   ├── icons/
│   │   │   └── fonts/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── .env.example
├── backend/                           # Python FastAPI backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py                    # FastAPI application entry point
│   │   ├── core/                      # Core application logic
│   │   │   ├── __init__.py
│   │   │   ├── config.py              # Configuration settings
│   │   │   ├── security.py            # Authentication & security
│   │   │   ├── database.py            # Database connection
│   │   │   └── exceptions.py          # Custom exceptions
│   │   ├── models/                    # SQLAlchemy models
│   │   │   ├── __init__.py
│   │   │   ├── base.py
│   │   │   ├── user.py
│   │   │   ├── blog.py
│   │   │   ├── project.py
│   │   │   ├── service.py
│   │   │   ├── testimonial.py
│   │   │   ├── faq.py
│   │   │   └── contact.py
│   │   ├── schemas/                   # Pydantic schemas
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── blog.py
│   │   │   ├── project.py
│   │   │   ├── service.py
│   │   │   ├── testimonial.py
│   │   │   ├── faq.py
│   │   │   └── contact.py
│   │   ├── api/                       # API routes
│   │   │   ├── __init__.py
│   │   │   ├── deps.py                # Dependencies
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       ├── auth.py
│   │   │       ├── blog.py
│   │   │       ├── projects.py
│   │   │       ├── services.py
│   │   │       ├── testimonials.py
│   │   │       ├── faqs.py
│   │   │       └── contact.py
│   │   ├── services/                  # Business logic
│   │   │   ├── __init__.py
│   │   │   ├── auth_service.py
│   │   │   ├── blog_service.py
│   │   │   ├── project_service.py
│   │   │   ├── service_service.py
│   │   │   ├── testimonial_service.py
│   │   │   ├── faq_service.py
│   │   │   ├── contact_service.py
│   │   │   └── email_service.py
│   │   ├── utils/                     # Utility functions
│   │   │   ├── __init__.py
│   │   │   ├── email.py
│   │   │   ├── file_upload.py
│   │   │   └── helpers.py
│   │   └── tests/                     # Test files
│   │       ├── __init__.py
│   │       ├── conftest.py
│   │       ├── test_auth.py
│   │       ├── test_blog.py
│   │       ├── test_projects.py
│   │       └── test_contact.py
│   ├── migrations/                    # Database migrations
│   ├── static/                        # Static files
│   │   ├── images/
│   │   ├── documents/
│   │   └── uploads/
│   ├── requirements.txt
│   ├── requirements-dev.txt
│   ├── alembic.ini
│   └── .env.example
├── docs/                              # Documentation
│   ├── api/
│   ├── deployment/
│   └── development/
├── scripts/                           # Utility scripts
│   ├── setup.sh
│   ├── deploy.sh
│   └── backup.sh
├── .github/                           # GitHub Actions
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── .gitignore
└── README.md
```

## Component Architecture

### Frontend Components Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   └── ContactInfo
│   ├── Main
│   │   ├── HomePage
│   │   │   ├── HeroSection
│   │   │   ├── AboutSection
│   │   │   ├── ServicesSection
│   │   │   ├── ProjectsSection
│   │   │   ├── TestimonialsSection
│   │   │   ├── FAQSection
│   │   │   └── StatsSection
│   │   ├── AboutPage
│   │   ├── ServicesPage
│   │   ├── ProjectsPage
│   │   ├── BlogPage
│   │   └── ContactPage
│   └── Footer
│       ├── CompanyInfo
│       ├── ServiceLinks
│       ├── ContactDetails
│       └── SocialLinks
├── Modals
│   ├── ConsultationModal
│   └── ContactModal
└── WhatsAppWidget
```

## Database Schema

### Core Tables

```sql
-- Users table (for admin access)
users (
    id, email, password_hash, is_active, created_at, updated_at
)

-- Blog posts
blog_posts (
    id, title, slug, content, excerpt, featured_image, 
    author_id, status, published_at, created_at, updated_at
)

-- Projects
projects (
    id, title, description, image, category, 
    location, area, beds, status, created_at, updated_at
)

-- Services
services (
    id, title, description, icon, features, 
    is_active, sort_order, created_at, updated_at
)

-- Testimonials
testimonials (
    id, name, position, company, content, 
    image, rating, is_featured, created_at, updated_at
)

-- FAQs
faqs (
    id, question, answer, category, 
    sort_order, is_active, created_at, updated_at
)

-- Contact inquiries
contact_inquiries (
    id, name, email, phone, subject, message, 
    status, created_at, updated_at
)
```

## API Endpoints

### Public Endpoints
```
GET  /api/v1/services          # Get all services
GET  /api/v1/projects          # Get all projects
GET  /api/v1/blog              # Get blog posts
GET  /api/v1/testimonials      # Get testimonials
GET  /api/v1/faqs              # Get FAQs
POST /api/v1/contact           # Submit contact form
```

### Admin Endpoints (Protected)
```
# Authentication
POST /api/v1/auth/login        # Admin login
POST /api/v1/auth/logout       # Admin logout

# Blog Management
GET    /api/v1/admin/blog      # Get all blog posts
POST   /api/v1/admin/blog      # Create blog post
PUT    /api/v1/admin/blog/{id} # Update blog post
DELETE /api/v1/admin/blog/{id} # Delete blog post

# Project Management
GET    /api/v1/admin/projects  # Get all projects
POST   /api/v1/admin/projects  # Create project
PUT    /api/v1/admin/projects/{id} # Update project
DELETE /api/v1/admin/projects/{id} # Delete project

# Similar patterns for services, testimonials, FAQs, contact inquiries
```

## Development Workflow

### Setup Instructions
1. Clone repository
2. Set up environment variables
3. Install dependencies (frontend & backend)
4. Set up database
5. Run migrations
6. Start development servers

### Environment Variables
```bash
# Frontend (.env)
VITE_API_BASE_URL=http://localhost:8000
VITE_WHATSAPP_NUMBER=+919812692333

# Backend (.env)
DATABASE_URL=postgresql://user:password@localhost/quintessence
SECRET_KEY=your-secret-key
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

This structure provides a scalable, maintainable foundation for cloning the Quintessence Consultants website with modern development practices.
