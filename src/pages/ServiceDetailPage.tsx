import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Building2, Zap, Stethoscope, CheckCircle, ArrowRight, Phone, Users, Target, FileText, MapPin } from 'lucide-react'
import { SERVICES } from '../data/constants'

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  // Special handling for Integrated Architectural and MEP Planning
  if (slug === 'integrated-architectural-mep-planning') {
    return <IntegratedArchitecturalMEPPage />
  }

  // Special handling for Specialized Services
  if (slug === 'specialized-services') {
    return <SpecializedServicesPage />
  }

  const getServiceIcon = (iconName: string) => {
    const icons = {
      Building2,
      Zap,
      Stethoscope,
      CheckCircle
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Building2
    return <IconComponent className="w-20 h-20" />
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg text-white py-20">
        <div className="container-custom">
          <div className="flex items-center space-x-4 mb-8">
            <Link
              to="/services"
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="text-primary-200 mb-6 flex justify-center">
              {getServiceIcon(service.icon)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Service Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {service.detailedDescription}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Key Features & Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Why Choose Our {service.title}?
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our team of experienced professionals brings years of expertise in healthcare infrastructure planning. 
                      We understand the unique challenges of healthcare facilities and provide solutions that are both 
                      practical and innovative. With our comprehensive approach, we ensure that every aspect of your 
                      project is carefully planned and executed to meet the highest standards of quality and efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Contact CTA */}
                  <div className="bg-primary-600 text-white rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Get Expert Consultation</h3>
                    <p className="text-blue-100 mb-6">
                      Ready to discuss your project? Our experts are here to help you plan the perfect healthcare infrastructure.
                    </p>
                    <Link
                      to="/contact"
                      className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 w-full justify-center"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Related Services */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Other Services</h3>
                    <div className="space-y-3">
                      {SERVICES.filter(s => s.id !== service.id).map((relatedService) => (
                        <Link
                          key={relatedService.id}
                          to={`/services/${relatedService.slug}`}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 mb-1">
                            {relatedService.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {relatedService.description.substring(0, 100)}...
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-medium">20+ Years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Projects:</span>
                        <span className="font-medium">60+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area Covered:</span>
                        <span className="font-medium">1.4M+ Sqm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Beds Planned:</span>
                        <span className="font-medium">19K+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you create world-class healthcare infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="btn-outline inline-flex items-center space-x-2"
            >
              <span>View Our Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Specialized component for Integrated Architectural and MEP Planning
const IntegratedArchitecturalMEPPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/planning-and-desigining.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-medium">Integrated Planning</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                INTEGRATED ARCHITECTURAL AND
                <br />
                MEP PLANNING SOLUTION FOR
                <br />
                SEAMLESS PROJECT
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                By conducting a comprehensive review and making necessary modifications, we ensure that the architectural drawings accurately reflect the desired concept brief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Design Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Strategic Design Approach And Associated Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By implementing design strategy, the organization benefits from a customized healthcare facility that meets their unique needs, complies with national and international standards, and respects the local culture and practices. The following points are considered while implementing design strategy:
              </p>
              <div className="space-y-4">
                {[
                  "Thorough assessment on organization's unique mission, vision, and targeted population.",
                  "Research and incorporate relevant national and international standards",
                  "To incorporate elements that reflect the local culture and practices, ensuring the facility is culturally sensitive and familiar to the local community.",
                  "Customization considering factors such as the organization's values, culture, and brand identity to align with the organization's individual needs and preferences.",
                  "Stakeholder engagement to encourage their input and involvement to ensure that their perspectives, experiences, and cultural sensitivities are considered in the design strategy",
                  "Integrate sustainable design principles to incorporate materials and construction practices that take advantage of local resources, such as natural lighting, ventilation, and passive cooling techniques also appropriate for the climate."
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600">Architectural Design Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinct Units Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-600">Medical Team Collaboration</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Distinct Units And Organizational Divisions:
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In consultation with the authorities, the development of the specialty mix undertaken to determine the appropriate allocation of medical specialties within the healthcare facility. Additionally, a matrix is created to guide the bed allotment and positioning of various departments. The following steps will be taken:
              </p>
              <div className="space-y-4">
                {[
                  "Consultation with Authorities",
                  "Specialty Mix Assessment",
                  "Bed Allotment Matrix",
                  "Department Positioning",
                  "Collaboration with Medical Professionals"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Space Planning Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Optimizing Spatial Arrangements: Strategic Space Planning:
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The allocation of areas for different departments and services determined based on the estimated workload, while taking into consideration relevant rules, statutes, guidelines, norms, and best practices. The following approach will be implemented:
              </p>
              <div className="space-y-4">
                {[
                  "Workload Assessment of each department",
                  "Specialty Mix Assessment",
                  "Compliance with Rules, Statutes, and Guidelines",
                  "Best Practices and Norms",
                  "Flexibility and Adaptability",
                  "Collaboration with Stakeholders",
                  "Preparation of Room Data Sheets (RDS)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-purple-500 mx-auto mb-4" />
                  <p className="text-gray-600">Space Planning Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Data Sheets Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-20 h-20 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600">Room Data Sheets</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Room Data Sheets
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Room Data Sheets (RDS) are prepared for each hospital area, detailing requirements like room names, dimensions, intended usage, equipment, furniture layout, storage, infection control, patient safety, and regulatory compliance.
              </p>
              <div className="space-y-4">
                {[
                  "Engineering Considerations",
                  "HVAC System Planning",
                  "Electrical System Planning",
                  "MEP System Integration",
                  "Compliance and Coordination",
                  "Documentation and Communication, including detailed drawings, specifications, and technical guidelines",
                  "Ongoing Review and Updates"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Traffic Management Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Hospital Traffic Management
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A detailed analysis of intramural man and material movement within the hospital and adjustment of architectural plans accordingly. The segregation of various functional areas implemented based on access levels. The following steps to be determined:
              </p>
              <div className="space-y-4">
                {[
                  "Movement Analysis",
                  "Architectural Plan Adjustment",
                  "Functional Area Segregation",
                  "Public Zones",
                  "Staff-Only Zones",
                  "Restricted Areas",
                  "Wayfinding and Signage",
                  "Collaboration with Security and Facilities Management"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-20 h-20 text-indigo-500 mx-auto mb-4" />
                  <p className="text-gray-600">Traffic Flow Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold">011 4182 9639</div>
                  <div className="text-blue-200">or go to contact form:</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Strategizing And Crafting Healthcare Initiatives
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                By conducting a comprehensive review and making necessary modifications, we ensure that the architectural drawings accurately reflect the desired concept brief. We ensure compliance with various standards (NQUAS/NABH/JCI, American, Australasian, etc.) to achieve high standards of quality, safety, and patient care.
              </p>
              <div className="space-y-4">
                {[
                  "Layout and Space Planning",
                  "Compliance with NQUAS/NABH/JCI Standards",
                  "Adherence to Health Facility Guidelines",
                  "Statutes, Rules, and Regulations"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Specialized Services Page Component
const SpecializedServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/tailored-and-specialized-services-design.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-medium">Specialized Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                CREATING TAILORED AND SPECIALIZED
                <br />
                SERVICES A COMPREHENSIVE DESIGN
                <br />
                APPROACH
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Gas Pipeline System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600">Gas Pipeline System</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Medical Gas Pipeline System (MGPS)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The design and planning of MGPS (Medical Gas Pipeline System) services for various functional areas adhere strictly to the guidelines set forth by HTM, ISO 7396, and NFPA standards. Our team conducts meticulous calculations to determine the necessary flow rates and requirements for essential components such as Liquid Oxygen Tank (LOX), Gas Manifolds, Medical Air Compressor System, Vacuum System, and PSA (Pressure Swing Adsorption) oxygen generation plant. We prepare a room-wise Design Matrix that includes detailed layouts of the piping, terminal units, connected valves, alarm systems, and manifold/plant rooms, tailored to suit the specific needs of each area. The following steps are to be undertaken in the process:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Compliance with Standards",
                  "Requirement Analysis",
                  "Detailed Layout Design",
                  "Collaboration and Coordination with engineers, contractors, and relevant stakeholders",
                  "Calculation of Flow Rates",
                  "Design Matrix Preparation",
                  "Safety and Compliance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modular Operation Theatre Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Modular Operation Theatre (MOT)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The design & development of the Operation Theatre complex, along with its accessory areas, is meticulously crafted to align with the organizational clinical plan and policies. Customized designs are created for specialty and super-specialty operation theatres, ensuring they cater precisely to the unique requirements of each area. Furthermore, the planning of Operation Theatre Integration services takes place with careful consideration of the desired level of integration with BIM/HMIS and other relevant systems. This integration aims to enhance operational efficiency and streamline the overall healthcare workflow. The following steps are undertaken in this comprehensive process:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Organizational Clinical Plan and Policies",
                  "Accessory Areas",
                  "Infection Control Measures",
                  "Safety and Regulatory Compliance",
                  "Technology implementation",
                  "Design of Specialty and Super-Specialty OTs",
                  "Operation Theatre Integration (OTI) Services",
                  "Collaboration and Stakeholder Engagement",
                  "Analysis of clinical requirements"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Stethoscope className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-600">Robotic Surgical System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nurse Call System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Phone className="w-20 h-20 text-purple-500 mx-auto mb-4" />
                  <p className="text-gray-600">Nurse Call System</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Nurse Call System (NCS)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The planning of Nurse Call System (NCS) services for various functional areas conducted in accordance with DIN/VDE or UL standards. Development of a room-wise Design Matrix that outlines the placement and configuration of NCS components in each area. This includes identifying locations for Room Units, Pull Cords, Nurse Station Consoles, Code Blue systems, and Centralized Control Systems. The following steps are undertaken in this process:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Standard Compliance",
                  "Functional Area Analysis",
                  "Design Matrix Preparation",
                  "Layout Design",
                  "Safety and Emergency Considerations",
                  "Centralized Control System"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Central Sterile Supply Department Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Central Sterile Supply Department (CSSD)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The design follows a "three-zone" approach, including accessory areas. It emphasizes adherence to organizational clinical plans, policies, and infection control practices, guided by national and international agencies like the CDC and ASHRAE. The planning also considers integration with Building Management Systems (BMS), Hospital Management Information Systems (HMIS), and Supply Chain modules.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Organizational Clinical Plan and Policies",
                  "Infection Control Practices",
                  "Three-Zone CSSD Design",
                  "Accessory Areas",
                  "CSSD Integration (CSSDI) Services",
                  "Safety and Regulatory Compliance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-20 h-20 text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-600">CSSD Three-Zone Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pneumatic Tube Transfer System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-indigo-500 mx-auto mb-4" />
                  <p className="text-gray-600">Pneumatic Tube System</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Pneumatic Tube Transfer System (PTTS)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Designing of Pneumatic Tube System stands as a state-of-the-art computer-controlled system. We design PTS considering ease of accessibility between crucial areas keeping in mind secure transfer points, patient flow, traffic patterns, distances, benefiting both nursing/medical staff and fully automated laboratory lines and pharmacies within the facility in accordance with HTM standards. The main considerations while designing of PTS are as under:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Functional Area Analysis",
                  "Design Matrix Preparation",
                  "HTM Standards Compliance",
                  "Layout Design and Piping Details",
                  "Traffic Optimization",
                  "Safety and Regulatory Compliance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio-Diagnostic Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Radio-Diagnostic Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The planning of Radio-diagnostic services, encompassing CT scan, X-ray, and Ultrasound, is meticulously conducted following the guidelines set forth by reputable organizations such as AERB, PCPNDT, and other applicable regulations. These stringent guidelines ensure that all aspects of the services adhere to safety, quality, and ethical standards. Additionally, for the planning of MRI services, particular attention is given to RF and magnetic shielding details, meticulously aligning with both national and international guidelines. This comprehensive approach guarantees that the MRI facilities meet the highest safety standards, protecting patients, staff, and sensitive electronic equipment from potential risks associated with magnetic fields done with utmost precision, ensuring the provision of top-quality medical imaging while safeguarding the well-being of patients and healthcare professionals. The following points to be considered while planning:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Guideline Compliance",
                  "Facility Analysis",
                  "CT Scan, X-ray, and Ultrasound Planning",
                  "MRI Planning",
                  "Compliance with PCPNDT Guidelines",
                  "Safety and Regulatory Compliance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Stethoscope className="w-20 h-20 text-cyan-500 mx-auto mb-4" />
                  <p className="text-gray-600">MRI Machine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Diagnostic Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-20 h-20 text-teal-500 mx-auto mb-4" />
                  <p className="text-gray-600">Laboratory Equipment</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Lab Diagnostic Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The planning of various clinical labs is carried out meticulously, considering presumptive load, efficient workload handling, and strict adherence to infection control guidelines from agencies like CDC and ASHRAE to ensure a safe and hygienic environment. Additionally, our team provides valuable assistance in the formulation of a quality control policy aligned with high standards (NABH, JCI) to ensure quality, accuracy, and patient safety in clinical labs. It emphasizes integrating load considerations, infection control, and robust quality control. The following points to be considered while planning:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Presumptive Load Analysis",
                  "Quality Control Policy",
                  "Equipment Selection and Placement",
                  "Infection Control Guidelines",
                  "Lab Design and Layout"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radiation And Other Therapeutic Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Radiation And Other Therapeutic Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The comprehensive planning of Radio-Therapeutic (Radiation) services, including PET CT scan, LINAC, and Brachy-Therapy, emphasizes adherence to guidelines from bodies like AERB (Atomic Energy Regulatory Board) and highlights the critical role of radiation oncology in cancer management, covering diagnosis, coordinated referrals, and long-term patient follow-up. The text also details the engineering challenges involved in building specialized bunkers (shielded rooms) for equipment and the importance of a generic design for future technological advancements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Regulatory Compliance",
                  "Equipment and Facility Layout",
                  "Bunker Planning",
                  "Radiation Safety Measures",
                  "Radioactive Discharge Disposal Program"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-red-50 to-red-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-red-500 mx-auto mb-4" />
                  <p className="text-gray-600">LINAC Machine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Laundry Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                  <p className="text-gray-600">Hospital Laundry</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Hospital Laundry Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hospital linen and laundry services play a crucial role in patient care, with expertise in designing and planning these services, considering factors like linen volume, textile types, and patient capacity. The emphasis is on efficient and hygienic management, resource utilization, cost-effective planning, and maintaining high standards of cleanliness.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Laundry Facility Location",
                  "Organisational Clinical Plan and Policies",
                  "Two-Zone Laundry Design",
                  "Laundry Integration (LI) Services",
                  "Workflow Design",
                  "Environmental Considerations",
                  "Space Planning",
                  "Infection Control Practices",
                  "Ancillary Areas",
                  "Safety and Regulatory Compliance",
                  "Equipment and Machinery",
                  "Budget and Cost Analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Kitchen Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Hospital Kitchen Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Careful planning and consideration of several factors are essential when designing a hospital kitchen to ensure its efficient operation. These factors include selecting an appropriate location, ensuring the presence of adequate equipment, complying with health and safety regulations, implementing digital inventory management systems or automated temperature monitoring for refrigeration, and establishing an effective waste management system to handle food waste responsibly and promote recycling wherever feasible. Here are some key steps and factors to consider when planning and designing a hospital kitchen:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Space and Layout",
                  "Workflow Efficiency",
                  "Storage Solutions",
                  "Staff Facilities",
                  "Waste Management",
                  "Flexibility for Future Growth",
                  "Compliance with Health and Safety Regulations",
                  "Adequate Equipment",
                  "Energy Efficiency",
                  "Meal Delivery Systems",
                  "Technology Integration"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-600">Hospital Kitchen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Information System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-20 h-20 text-purple-500 mx-auto mb-4" />
                  <p className="text-gray-600">Hospital IT System</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Hospital Information System (Hospital IT System)
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The primary objective of a Hospital Information Management System is to efficiently manage and streamline various aspects of a hospital's operations and administrative tasks. This includes handling patient registration and demographic data entry, storing and managing patient medical records, managing patient appointments, facilitating billing and insurance processes, overseeing pharmacy and inventory management, integrating with the hospital's laboratory for test orders, results, and sample tracking, and storing and managing medical images such as X-rays, MRIs, and CT scans. Additionally, the system aids in managing financial transactions, expenses, and revenue related to hospital operations, while also generating various reports and analytics to monitor hospital performance and support data-driven decision-making. Primary considerations of planning and designing:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Assessment of Requirements",
                  "Customization",
                  "Data Migration",
                  "System Development or Adoption",
                  "Integration",
                  "Testing and Quality Assurance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold">011 4182 9639</div>
                  <div className="text-blue-200">or go to contact form:</div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Contact us now
              </h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                If need help! Our specialized services team is ready to assist you with comprehensive healthcare infrastructure planning and design solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage

