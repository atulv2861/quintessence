# Quintessence Consultants Website - Component Breakdown

## UI Components Analysis

Based on the website analysis, here are all the components needed for the React.js implementation:

## 1. Layout Components

### Header Component
```typescript
interface HeaderProps {
  isScrolled?: boolean;
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}
```

**Features:**
- Logo (QMC)
- Main navigation menu
- Contact information display
- "FREE CONSULTATION" CTA button
- Mobile responsive hamburger menu
- Sticky header on scroll

**Sub-components:**
- `Logo`
- `Navigation`
- `ContactInfo`
- `MobileMenu`
- `CTAButton`

### Footer Component
```typescript
interface FooterProps {
  companyInfo: CompanyInfo;
  socialLinks: SocialLink[];
}
```

**Features:**
- Company information
- Service links
- Quick links
- Contact details
- Social media links
- Copyright information
- Legal links (Privacy Policy, Terms & Conditions)

**Sub-components:**
- `CompanyInfo`
- `ServiceLinks`
- `QuickLinks`
- `ContactDetails`
- `SocialLinks`
- `LegalLinks`

## 2. Page Components

### HomePage
```typescript
interface HomePageProps {
  heroData: HeroData;
  aboutData: AboutData;
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  stats: StatsData;
}
```

**Sections:**
- Hero Section
- About Section
- Services Section
- Projects Section
- Testimonials Section
- FAQ Section
- Stats Section

### AboutPage
```typescript
interface AboutPageProps {
  founderInfo: FounderInfo;
  companyHistory: string;
  achievements: Achievement[];
  team: TeamMember[];
}
```

### ServicesPage
```typescript
interface ServicesPageProps {
  services: Service[];
  categories: ServiceCategory[];
}
```

**Sub-pages:**
- Service Detail Pages (4 main services)

### ProjectsPage
```typescript
interface ProjectsPageProps {
  projects: Project[];
  categories: ProjectCategory[];
  filters: ProjectFilter[];
}
```

### BlogPage
```typescript
interface BlogPageProps {
  posts: BlogPost[];
  categories: BlogCategory[];
  pagination: PaginationData;
}
```

### ContactPage
```typescript
interface ContactPageProps {
  contactInfo: ContactInfo;
  officeLocation: LocationData;
}
```

## 3. Section Components

### HeroSection
```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButtons: CTAButton[];
}
```

**Features:**
- Main headline
- Subtitle text
- Background image/video
- Call-to-action buttons
- Animated elements

### AboutSection
```typescript
interface AboutSectionProps {
  title: string;
  content: string;
  founderInfo: FounderInfo;
  readMoreLink?: string;
}
```

**Features:**
- Section title
- About content
- Founder information
- "Read More" functionality
- Professional imagery

### ServicesSection
```typescript
interface ServicesSectionProps {
  title: string;
  services: Service[];
  layout?: 'grid' | 'carousel';
}
```

**Features:**
- Service cards with icons
- Hover effects
- "Read More" links
- Responsive grid layout

**Service Card Component:**
```typescript
interface ServiceCardProps {
  service: Service;
  onReadMore: (serviceId: string) => void;
}
```

### ProjectsSection
```typescript
interface ProjectsSectionProps {
  title: string;
  projects: Project[];
  showFilters?: boolean;
  layout?: 'grid' | 'masonry';
}
```

**Features:**
- Project showcase
- Filter options
- Project details modal
- Statistics display

### TestimonialsSection
```typescript
interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
  layout?: 'carousel' | 'grid';
}
```

**Features:**
- Customer testimonials
- Star ratings
- Client photos
- Carousel/slider functionality

### FAQSection
```typescript
interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
  categories?: FAQCategory[];
}
```

**Features:**
- Expandable FAQ items
- Search functionality
- Category filtering
- Smooth animations

### StatsSection
```typescript
interface StatsSectionProps {
  stats: StatItem[];
  title?: string;
}
```

**Features:**
- Animated counters
- Statistics display
- Achievement metrics

## 4. Form Components

### ContactForm
```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
  isLoading?: boolean;
  fields?: FormField[];
}
```

**Fields:**
- Name (required)
- Email (required)
- Phone (optional)
- Subject (required)
- Message (required)
- Company (optional)

### ConsultationForm
```typescript
interface ConsultationFormProps {
  onSubmit: (data: ConsultationFormData) => void;
  isLoading?: boolean;
}
```

**Fields:**
- Name
- Email
- Phone
- Service Interest
- Project Details
- Timeline
- Budget Range

### NewsletterForm
```typescript
interface NewsletterFormProps {
  onSubmit: (email: string) => void;
  isLoading?: boolean;
}
```

## 5. Interactive Components

### Modal Component
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Modal Types:**
- Consultation Modal
- Contact Modal
- Project Detail Modal
- Service Detail Modal

### WhatsAppWidget
```typescript
interface WhatsAppWidgetProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
}
```

**Features:**
- Floating WhatsApp button
- Click to open WhatsApp
- Custom message template
- Responsive positioning

### LoadingSpinner
```typescript
interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  text?: string;
}
```

### ErrorBoundary
```typescript
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<ErrorFallbackProps>;
}
```

## 6. Utility Components

### Button Component
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}
```

### Card Component
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}
```

### Image Component
```typescript
interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  placeholder?: string;
}
```

### Badge Component
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant: 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
}
```

## 7. Data Types

### Core Types
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
  slug: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  area: number;
  beds: number;
  status: 'completed' | 'ongoing' | 'planned';
  gallery?: string[];
}

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
  rating: number;
  isFeatured: boolean;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
}
```

## 8. State Management

### Redux Slices
- `authSlice` - Authentication state
- `contactSlice` - Contact form state
- `blogSlice` - Blog posts state
- `projectSlice` - Projects state
- `serviceSlice` - Services state
- `testimonialSlice` - Testimonials state
- `uiSlice` - UI state (modals, loading, etc.)

### API Endpoints (RTK Query)
- `contactApi` - Contact form submission
- `blogApi` - Blog posts fetching
- `projectApi` - Projects data
- `serviceApi` - Services data
- `testimonialApi` - Testimonials data
- `faqApi` - FAQ data

## 9. Styling Strategy

### Tailwind CSS Classes
- Responsive design utilities
- Custom color palette
- Typography scale
- Spacing system
- Component variants

### Custom CSS Modules
- Complex animations
- Component-specific styles
- Third-party library overrides

### Styled Components
- Dynamic styling
- Theme-based styling
- Complex component styling

## 10. Performance Optimizations

### Code Splitting
- Route-based splitting
- Component lazy loading
- Dynamic imports

### Image Optimization
- Next.js Image component
- WebP format support
- Lazy loading
- Responsive images

### Caching Strategy
- API response caching
- Static asset caching
- Browser caching headers

This comprehensive component breakdown provides a complete roadmap for implementing the Quintessence Consultants website with React.js and TypeScript.
