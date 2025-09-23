import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Briefcase, MapPin, Calendar, Clock } from 'lucide-react'

interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  postedDate: string
  description: string
  requirements: string[]
  responsibilities: string[]
  overview: string
  keyResponsibilities: {
    category: string
    items: string[]
  }[]
  qualifications: string[]
  remuneration: string
  whyJoinUs: string
}

const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>()
  const navigate = useNavigate()

  // Mock job data - in a real app, this would come from an API
  const jobs: Job[] = [
    {
      id: 'JD-0028',
      title: 'Assistant Manager – Marketing',
      company: 'SHCP',
      location: 'Seven Healer Counsultancy Pvt.Ltd',
      type: 'Full Time',
      postedDate: 'Posted 3 weeks ago',
      description: 'We are looking for a dynamic and strategic Marketing Manager to lead the development and execution of integrated marketing initiatives for our upcoming state-of-the-art hospital.',
      overview: 'We are looking for a dynamic and strategic Marketing Manager to lead the development and execution of integrated marketing initiatives for our upcoming state-of-the-art hospital. The ideal candidate will play a pivotal role in building the hospital\'s brand presence, driving patient engagement, and ensuring alignment between marketing goals and overall business objectives.',
      keyResponsibilities: [
        {
          category: 'Marketing Strategy & Execution',
          items: [
            'Assist in developing and implementing marketing plans to promote hospital services and enhance brand visibility.',
            'Support execution of campaigns across digital, print, outdoor, and other platforms.',
            'Coordinate marketing activities in line with hospital milestones, service launches, and special initiatives.',
            'Conduct basic market research and competitor analysis to support decision-making.',
            'Assist in initiatives across domestic, corporate, and medical tourism segments.'
          ]
        },
        {
          category: 'Digital & Social Media Marketing',
          items: [
            'Manage day-to-day content updates and engagement across social media channels.',
            'Coordinate website updates, SEO/SEM activities, and email marketing campaigns.',
            'Track and report performance metrics using analytics tools.'
          ]
        },
        {
          category: 'Public Relations & Community Engagement',
          items: [
            'Support in organizing hospital events, health camps, CME programs, and CSR activities.',
            'Coordinate with media agencies, influencers, and healthcare journalists as directed.',
            'Assist in building positive relationships with the local community.'
          ]
        },
        {
          category: 'Coordination & Support',
          items: [
            'Liaise with clinical and administrative teams to fulfill marketing requirements.',
            'Coordinate with vendors, creative agencies, and service providers for timely execution.',
            'Provide marketing support for new doctors, specialties, or technologies.'
          ]
        },
        {
          category: 'Performance & Reporting',
          items: [
            'Maintain records of marketing campaigns and prepare periodic reports.',
            'Track campaign outcomes and share insights with senior management for improvements.'
          ]
        },
        {
          category: 'Hospital Empanelment & Insurance Support',
          items: [
            'Assist in empanelment processes with TPAs, ECHS, CGHS, and corporate health schemes.',
            'Coordinate with insurance companies, TPAs, and internal teams for documentation and renewals.',
            'Support smooth handling of cashless approvals and claim settlements in coordination with relevant departments.'
          ]
        }
      ],
      qualifications: [
        'MBA/PGDM in Marketing, Communications, or related field.',
        '6-8 years of experience in healthcare or service industry marketing.',
        'Knowledge of digital marketing, brand promotion, and public relations.',
        'Strong coordination, communication, and organizational skills.',
        'Ability to multitask and work collaboratively with internal and external stakeholders.'
      ],
      remuneration: 'As per industry standards',
      whyJoinUs: 'At Sant Nirankari Health City, we offer a collaborative and supportive work environment where your contributions are valued and recognized. Join us in our mission to deliver exceptional healthcare services while upholding the highest standards of quality and patient care.',
      requirements: [],
      responsibilities: []
    },
    {
      id: 'JD-0027',
      title: 'Sr. Manager/ AGM – Marketing',
      company: 'SHCP',
      location: 'Seven Healer Counsultancy Pvt.Ltd',
      type: 'Full Time',
      postedDate: 'Posted 3 weeks ago',
      description: 'We are looking for a dynamic and strategic Marketing Manager to lead the development and execution of integrated marketing initiatives for our upcoming state-of-the-art hospital.',
      overview: 'We are looking for a dynamic and strategic Marketing Manager to lead the development and execution of integrated marketing initiatives for our upcoming state-of-the-art hospital. The ideal candidate will play a pivotal role in building the hospital\'s brand presence, driving patient engagement, and ensuring alignment between marketing goals and overall business objectives.',
      keyResponsibilities: [
        {
          category: 'Marketing Strategy & Execution',
          items: [
            'Lead the development and implementation of comprehensive marketing strategies.',
            'Oversee execution of campaigns across digital, print, outdoor, and other platforms.',
            'Drive marketing activities in line with hospital milestones and service launches.',
            'Conduct market research and competitor analysis to inform strategic decisions.',
            'Lead initiatives across domestic, corporate, and medical tourism segments.'
          ]
        },
        {
          category: 'Team Leadership & Management',
          items: [
            'Lead and mentor the marketing team to achieve departmental goals.',
            'Coordinate with cross-functional teams to ensure marketing alignment.',
            'Manage marketing budgets and resource allocation effectively.'
          ]
        }
      ],
      qualifications: [
        'Master\'s degree in Marketing, Business Administration, or related field.',
        '8+ years of experience in healthcare or service industry marketing.',
        'Proven track record in team leadership and strategic planning.',
        'Strong analytical and strategic thinking skills.',
        'Excellent communication and presentation skills.'
      ],
      remuneration: 'As per industry standards',
      whyJoinUs: 'At Sant Nirankari Health City, we offer a collaborative and supportive work environment where your contributions are valued and recognized. Join us in our mission to deliver exceptional healthcare services while upholding the highest standards of quality and patient care.',
      requirements: [],
      responsibilities: []
    }
  ]

  const job = jobs.find(j => j.id === jobId)

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/career/current-openings')}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero3.webp')"
          }}
        >
          {/* Subtle overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {job.title}
              </h1>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                Join our team and be part of transforming healthcare infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={() => navigate('/career/current-openings')}
              className="flex items-center text-gray-600 hover:text-blue-500 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Careers Page
            </button>

            {/* Job Header */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {job.title} ({job.id})
                  </h2>
                  
                  {/* Company Logo/Initials */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">{job.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{job.company}</h3>
                    </div>
                  </div>
                </div>

                {/* Job Details */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{job.postedDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div>
              {/* Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  {job.overview}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Responsibilities</h3>
                <div className="space-y-6">
                  {job.keyResponsibilities.map((section, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">
                        {index + 1}. {section.category}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications & Experience */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Qualifications & Experience</h3>
                <ul className="space-y-2">
                  {job.qualifications.map((qualification, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{qualification}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Remuneration */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Remuneration</h3>
                <p className="text-gray-700">{job.remuneration}</p>
              </div>

              {/* Why Join Us */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Join Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  {job.whyJoinUs}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200">
                <button
                  onClick={() => navigate('/career/apply')}
                  className="flex-1 bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Apply Now</span>
                </button>
                <button
                  onClick={() => navigate('/career/current-openings')}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Careers Page</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobDetailPage
