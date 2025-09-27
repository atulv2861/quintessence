import { Service, Project, Testimonial, FAQ, ContactInfo, CompanyInfo, NavItem } from '../types'

// Company Information
export const COMPANY_INFO: CompanyInfo = {
  name: 'Seven Healer counsultancy Pvt.Ltd',
  tagline: 'Transforming Healthcare Infrastructure',
  description: 'We are a consulting company dedicated to transforming the future of health across the entire continuum of care.',
  founder: {
    name: 'Dr. Nitin Garg',
    title: 'Founder & CEO',
    education: [
      'Pt. B. D. Sharma Post Graduate Institute of Medical Sciences (PGIMS), Rohtak',
      'Postgraduate in Hospital Administration from AIIMS, New Delhi',
      'NABH accreditation specialist (5th edition)'
    ],
    experience: '20+ years of expertise in healthcare industry',
    achievements: [
      'Leadership position in leading private hospital',
      'NABH accreditation team leader',
      'Extensive experience in healthcare infrastructure planning'
    ]
  },
  stats: {
    area: 139528,
    beds: 19474,
    projects: 60,
    associates: 20
  }
}

// Contact Information
export const CONTACT_INFO: ContactInfo = {
  address: '303, GDITL Tower, A-09 Netaji Subhash Place, Pitampura New Delhi - 110034',
  email: 'Info@sevenhealerconsultants.in',
  phone: '011 41664694',
  phone2: '+91 9812692333',
  phone3: '+91 9728392333'
}

// Services Data
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Integrated Architectural and MEP Planning',
    image: '/images/services/planning-and-desigining.jpg',
    description: 'By conducting a comprehensive review and making necessary modifications, we ensure that the architectural drawings accurately reflect the desired concept brief.',
    detailedDescription: 'Our integrated approach combines architectural design with Mechanical, Electrical, and Plumbing (MEP) systems to create seamless healthcare facilities. We ensure optimal space utilization, efficient workflow, and compliance with healthcare standards.',
    icon: 'Building2',
    features: [
      'Comprehensive architectural review',
      'MEP system integration',
      'Space optimization',
      'Workflow efficiency',
      'Healthcare compliance',
      'Concept brief alignment'
    ],
    slug: 'integrated-architectural-mep-planning'
  },
  {
    id: '2',
    title: 'Creating Tailored and Specialized Services',
    image: '/images/services/tailored-and-specialized-services-design.jpg',
    description: 'The design and planning of MGPS (Medical Gas Pipeline System) services for various functional areas adhere strictly to the guidelines set forth by HTM.',
    detailedDescription: 'We specialize in designing and implementing Medical Gas Pipeline Systems (MGPS) that meet HTM guidelines. Our services ensure safe, efficient, and compliant medical gas delivery throughout healthcare facilities.',
    icon: 'Zap',
    features: [
      'MGPS design and planning',
      'HTM guideline compliance',
      'Functional area optimization',
      'Safety standards adherence',
      'System integration',
      'Quality assurance'
    ],
    slug: 'specialized-services'
  },
  {
    id: '3',
    title: 'Optimized Hospital Equipment Planning',
    image: '/images/services/hospital-equipment-planning.jpeg',
    description: 'Hospital equipment planning is a methodical process that involves identifying, selecting, and strategically arranging medical equipment and technology within a healthcare facility.',
    detailedDescription: 'Our systematic approach to hospital equipment planning ensures optimal placement, efficient utilization, and seamless integration of medical equipment. We consider workflow, maintenance, and future expansion needs.',
    icon: 'Stethoscope',
    features: [
      'Equipment identification and selection',
      'Strategic placement planning',
      'Workflow optimization',
      'Maintenance considerations',
      'Future expansion planning',
      'Technology integration'
    ],
    slug: 'hospital-equipment-planning'
  },
  {
    id: '4',
    title: 'Pre-commissioning and Commissioning Activities',
    image: '/images/services/pre-commissioning.jpg',
    description: 'Hospital pre-commissioning activities refer to the preparatory steps and tasks that take place before the actual commissioning process of a hospital facility begins.',
    detailedDescription: 'We provide comprehensive pre-commissioning and commissioning services to ensure smooth facility startup. Our systematic approach covers testing, validation, staff training, and operational readiness.',
    icon: 'CheckCircle',
    features: [
      'Pre-commissioning planning',
      'System testing and validation',
      'Staff training programs',
      'Operational readiness assessment',
      'Documentation and compliance',
      'Smooth facility startup'
    ],
    slug: 'pre-commissioning-commissioning'
  }
]

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Multi-Specialty Hospital - Delhi',
    description: 'A comprehensive 500-bed multi-specialty hospital with advanced medical facilities and modern infrastructure.',
    image: '/images/projects/hospital-delhi.jpg',
    image_name: 'hospital-delhi.jpg',
    category: 'Multi-Specialty',
    location: 'New Delhi',
    area: '150000',
    beds: '500',
    status: 'Completed',
    client: 'Delhi Healthcare Group',
    clientName: 'Delhi Healthcare Group',
    completionDate: '2023',
    isFeatured: true,
    slug: 'multi-specialty-hospital-delhi',
    features: [
      'Advanced ICU facilities',
      'Modern operation theaters',
      'Emergency care unit',
      'Diagnostic imaging center',
      'Pharmacy and laboratory services'
    ],
    created_at: '2023-01-15T10:00:00Z',
    updated_at: '2023-12-31T18:00:00Z'
  },
  {
    id: '2',
    title: 'Cardiac Care Center - Mumbai',
    description: 'State-of-the-art cardiac care facility with advanced diagnostic and treatment capabilities.',
    image: '/images/projects/cardiac-mumbai.jpg',
    image_name: 'cardiac-mumbai.jpg',
    category: 'Cardiac Care',
    location: 'Mumbai',
    area: '75000',
    beds: '200',
    status: 'Completed',
    client: 'Mumbai Cardiac Institute',
    clientName: 'Mumbai Cardiac Institute',
    completionDate: '2022',
    isFeatured: true,
    slug: 'cardiac-care-center-mumbai',
    features: [
      'Cardiac catheterization lab',
      'Advanced imaging systems',
      'Intensive care units',
      'Rehabilitation center',
      'Emergency cardiac services'
    ],
    created_at: '2022-03-10T09:00:00Z',
    updated_at: '2022-11-30T17:00:00Z'
  },
  {
    id: '3',
    title: 'Oncology Center - Bangalore',
    description: 'Comprehensive cancer care facility with advanced radiation therapy and chemotherapy units.',
    image: '/images/projects/oncology-bangalore.jpg',
    image_name: 'oncology-bangalore.jpg',
    category: 'Oncology',
    location: 'Bangalore',
    area: '100000',
    beds: '150',
    status: 'In Progress',
    client: 'Bangalore Cancer Institute',
    clientName: 'Bangalore Cancer Institute',
    completionDate: '2024',
    isFeatured: true,
    slug: 'oncology-center-bangalore',
    features: [
      'Radiation therapy units',
      'Chemotherapy infusion center',
      'Surgical oncology suites',
      'Palliative care unit',
      'Research and clinical trials'
    ],
    created_at: '2023-06-01T08:00:00Z',
    updated_at: '2024-01-15T16:30:00Z'
  },
  {
    id: '4',
    title: 'Pediatric Hospital - Chennai',
    description: 'Specialized pediatric care facility designed with child-friendly environments and advanced medical equipment.',
    image: '/images/projects/pediatric-chennai.jpg',
    image_name: 'pediatric-chennai.jpg',
    category: 'Pediatric',
    location: 'Chennai',
    area: '60000',
    beds: '100',
    status: 'Planning',
    client: 'Chennai Children\'s Hospital',
    clientName: 'Chennai Children\'s Hospital',
    completionDate: '2025',
    isFeatured: false,
    slug: 'pediatric-hospital-chennai',
    features: [
      'Child-friendly design',
      'Pediatric intensive care',
      'Neonatal care unit',
      'Play therapy areas',
      'Family accommodation'
    ],
    created_at: '2024-01-01T12:00:00Z',
    updated_at: '2024-01-15T14:00:00Z'
  }
]

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sunil Kumar',
    position: 'CEO',
    company: 'Delhi Healthcare Group',
    content: 'Dr. Nitin Garg and his team provided exceptional consulting services for our multi-specialty hospital project. Their expertise in healthcare infrastructure planning was invaluable.',
    rating: 5,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Dr. Priya Sharma',
    position: 'Medical Director',
    company: 'Mumbai Cardiac Institute',
    content: 'The integrated approach to architectural and MEP planning helped us create a world-class cardiac care facility. Highly recommended for healthcare projects.',
    rating: 5,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Rajesh Patel',
    position: 'Project Manager',
    company: 'Bangalore Cancer Institute',
    content: 'Professional, knowledgeable, and committed to excellence. The team ensured our oncology center meets all regulatory requirements and operational needs.',
    rating: 5,
    isFeatured: true
  }
]

// FAQ Data
export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'What services does Seven Healer counsultancy Pvt.Ltd offer?',
    answer: 'We offer comprehensive healthcare infrastructure consulting services including integrated architectural and MEP planning, specialized services like MGPS design, hospital equipment planning, and pre-commissioning/commissioning activities.',
    category: 'services',
    sortOrder: 1
  },
  {
    id: '2',
    question: 'What is the experience of Dr. Nitin Garg?',
    answer: 'Dr. Nitin Garg has over 16 years of expertise in healthcare industry. He completed his medical education at PGIMS, Rohtak and pursued postgraduate degree in Hospital Administration from AIIMS, New Delhi. He is also a NABH accreditation specialist.',
    category: 'about',
    sortOrder: 2
  },
  {
    id: '3',
    question: 'How many projects has Seven Healer completed?',
    answer: 'We have completed 60+ projects covering over 1.4 million square meters of healthcare infrastructure, planning for 19,474+ beds across various healthcare facilities.',
    category: 'projects',
    sortOrder: 3
  },
  {
    id: '4',
    question: 'What is MGPS and why is it important?',
    answer: 'MGPS (Medical Gas Pipeline System) is a critical infrastructure component in healthcare facilities that ensures safe and efficient delivery of medical gases like oxygen, nitrous oxide, and compressed air to patient care areas.',
    category: 'services',
    sortOrder: 4
  },
  {
    id: '5',
    question: 'Do you provide post-commissioning support?',
    answer: 'Yes, we provide comprehensive support during the commissioning process and offer ongoing consultation to ensure smooth operations and compliance with healthcare standards.',
    category: 'services',
    sortOrder: 5
  },
  {
    id: '6',
    question: 'How can I get a consultation?',
    answer: 'You can contact us through our website contact form, call us at +91 9812692333, or email us at Info@sevenhealerconsultants.in for a free consultation.',
    category: 'contact',
    sortOrder: 6
  }
]

// Navigation Data
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Services',
    href: '#',
    children: [
      {
        label: 'Integrated Architectural and MEP Planning',
        href: '/services/integrated-architectural-mep-planning'
      },
      {
        label: 'Specialized Services',
        href: '/services/specialized-services'
      },
      {
        label: 'Hospital Equipment Planning',
        href: '/services/hospital-equipment-planning'
      },
      {
        label: 'Pre-commissioning and Commissioning',
        href: '/services/pre-commissioning-commissioning'
      }
    ]
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Career',
    href: '/career/current-openings'
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  }
]

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/sevenhealerconsultants',
  linkedin: 'https://linkedin.com/company/Seven Healer-consultants',
  email: 'Info@sevenhealerconsultants.in'
}

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  number: '+919812692333',
  message: 'Hello! I would like to know more about your healthcare consulting services.'
}
