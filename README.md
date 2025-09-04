# Quintessence Consultants Website Clone

A complete clone of the [Quintessence Consultants website](https://quintessenceconsultants.in/) built with modern web technologies.

## 🏗️ Tech Stack

### Frontend
- **React.js 18+** with TypeScript
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **React Router v6** for routing
- **React Hook Form** for form handling
- **Framer Motion** for animations
- **Vite** as build tool

### Backend
- **FastAPI** (Python) for API
- **PostgreSQL** as database
- **SQLAlchemy** as ORM
- **JWT** for authentication
- **Pydantic** for data validation
- **Alembic** for database migrations

### DevOps
- **GitHub Actions** for CI/CD

## 📁 Project Structure

```
quintessence-website/
├── frontend/          # React.js + TypeScript frontend
├── backend/           # FastAPI Python backend
├── docs/              # Documentation
└── scripts/           # Utility scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL 13+

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quintessence-website
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   cp .env.example .env
   # Edit .env with your database and email settings
   alembic upgrade head
   uvicorn app.main:app --reload
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your API URL
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - API Docs: http://localhost:8000/docs

## 📋 Features

### Public Features
- ✅ Responsive homepage with hero section
- ✅ About us page with founder information
- ✅ Services showcase (4 main services)
- ✅ Projects portfolio with filtering
- ✅ Blog with categories and pagination
- ✅ Contact form with email notifications
- ✅ FAQ section with search
- ✅ Customer testimonials
- ✅ WhatsApp integration
- ✅ SEO optimization

### Admin Features
- ✅ Secure admin authentication
- ✅ Content management (blog, projects, services)
- ✅ Contact inquiry management
- ✅ Testimonial management
- ✅ FAQ management
- ✅ File upload handling
- ✅ Email notifications

## 🎨 Design System

### Color Palette
- Primary: Professional blue (#1e40af)
- Secondary: Clean grays (#6b7280, #9ca3af)
- Accent: Call-to-action colors (#dc2626, #059669)

### Typography
- Headings: Inter, system-ui, sans-serif
- Body: Inter, system-ui, sans-serif
- Monospace: 'Fira Code', monospace

### Components
- Modern card-based layouts
- Smooth animations and transitions
- Mobile-first responsive design
- Accessible form controls

## 🔧 Configuration

### Environment Variables

#### Frontend (.env)
```bash
VITE_API_BASE_URL=http://localhost:8000
VITE_WHATSAPP_NUMBER=+919812692333
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

#### Backend (.env)
```bash
DATABASE_URL=postgresql://user:password@localhost/quintessence
SECRET_KEY=your-secret-key-here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
UPLOAD_DIR=static/uploads
```

## 📊 Database Schema

### Core Tables
- `users` - Admin users
- `services` - Company services
- `projects` - Project portfolio
- `blog_posts` - Blog articles
- `testimonials` - Customer testimonials
- `faqs` - Frequently asked questions
- `contact_inquiries` - Contact form submissions

## 🚀 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   # Frontend
   npm run build
   
   # Backend
   cd backend
   pip install -r requirements.txt
   ```

2. **Deploy the application**
   ```bash
   # Start backend
   cd backend
   uvicorn app.main:app --host 0.0.0.0 --port 8000
   
   # Start frontend (in another terminal)
   npm run preview
   ```

3. **Configure web server**
   - Set up Nginx or Apache
   - Configure SSL certificates
   - Set up domain

### Environment Setup
- Set production environment variables
- Configure database connection
- Set up email service
- Configure file storage

## 📚 API Documentation

### Public Endpoints
- `GET /api/v1/services` - Get all services
- `GET /api/v1/projects` - Get all projects
- `GET /api/v1/blog` - Get blog posts
- `GET /api/v1/testimonials` - Get testimonials
- `GET /api/v1/faqs` - Get FAQs
- `POST /api/v1/contact` - Submit contact form

### Admin Endpoints
- `POST /api/v1/auth/login` - Admin login
- `GET /api/v1/admin/services` - Manage services
- `GET /api/v1/admin/projects` - Manage projects
- `GET /api/v1/admin/blog` - Manage blog posts
- `GET /api/v1/admin/contact` - Manage contact inquiries

Full API documentation available at `/docs` when running the backend.

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm run test
npm run test:coverage
```

### Backend Testing
```bash
cd backend
pytest
pytest --cov=app
```

## 📈 Performance

### Optimization Features
- Code splitting and lazy loading
- Image optimization and WebP support
- API response caching
- Database query optimization
- CDN integration ready

### Monitoring
- Error tracking with Sentry
- Performance monitoring
- Database query analysis
- API response time tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: info@quintessenceconsultants.in
- Phone: +91 9812692333
- Website: https://quintessenceconsultants.in/

## 🙏 Acknowledgments

- Original website design by Quintessence Consultants
- Icons from Heroicons
- Images from Unsplash
- Fonts from Google Fonts

---

**Note:** This is a clone project for educational purposes. All content and branding belong to Quintessence Consultants.
