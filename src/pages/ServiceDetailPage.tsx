import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Building2, Zap, Stethoscope, CheckCircle, ArrowRight, Phone, Target, FileText} from 'lucide-react'
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

  // Special handling for Equipment Planning
  if (slug === 'hospital-equipment-planning') {
    return <EquipmentPlanningPage />
  }

  // Special handling for Pre-commissioning and Commissioning Activities
  if (slug === 'pre-commissioning-commissioning') {
    return <PreCommissioningPage />
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

      {/* Integrated Architectural and MEP Planning for Efficient Project Execution */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Sidebar - Service Categories */}
            <div className="space-y-4">
              <div className="bg-blue-400 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-sm font-semibold text-white leading-relaxed">
                  INTEGRATED ARCHITECTURAL AND MEP PLANNING SOLUTION FOR SEAMLESS PROJECT
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  CREATING TAILORED AND SPECIALIZED SERVICES
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  OPTIMIZED HOSPITAL EQUIPMENT PLANNING
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  STREAMLINING PRE-COMMISSIONING AND COMMISSIONING ACTIVITIES
                </h3>
              </div>
            </div>

            {/* Right Side - Gas Pipeline System Diagram */}
            <div className="space-y-8">
              {/* Gas Pipeline System Diagram */}
              <div className="text-lg text-gray-600 leading-relaxed">                
                <span className="text-lg md:text-lg font-bold text-gray-900 pr-2">Integrated Architectural and MEP Planning for Efficient Project Execution</span>
                construction projects often face delays and cost overruns due to uncoordinated architectural and MEP planning. An integrated approach resolves this by aligning design and engineering from the conceptual stage. Using BIM and clash detection, conflicts are identified early, ensuring smooth routing of ducts, conduits, and plumbing without interfering with architectural elements. This enhances building performance, energy efficiency, and compliance with regulations. Shared digital models improve collaboration, scheduling, and resource allocation, reducing risks and rework. Ultimately, integrated architectural and MEP planning delivers faster execution, sustainability, cost savings, and higher project accuracy across the entire lifecycle.
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Design Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Strategic Design Approach And Associated Requirements
              </h3>
              <div className="w-40 h-1 bg-blue-400 mb-4"></div>
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
                  <img src="/images/services/Michael-Malone-design-sketch.webp" alt="Strategic Design Approach And Associated Requirements" className="w-full h-full object-cover" />
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
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/Organizational.jpg" alt="Distinct Units And Organizational Divisions" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Distinct Units And Organizational Divisions:
              </h3>
              <div className="w-40 h-1 bg-blue-400 mb-4"></div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Optimizing Spatial Arrangements: Strategic Space Planning:
              </h3>
              <div className="w-40 h-1 bg-blue-400 mb-4"></div>
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
                  <img src="/images/services/space-optimised.jpg" alt="Space Planning Visualization" className="w-full h-full object-cover" />
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
                  <img src="/images/services/room-pressure-diagram-room.png" alt="Room Data Sheets" className="w-full h-full object-cover" />
                  
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Room Data Sheets
              </h3>
              <div className="w-40 h-1 bg-blue-400 mb-4"></div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Hospital Traffic Management
              </h3>
              <div className="w-40 h-1 bg-blue-400 mb-4"></div>
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
                  <img src="/images/services/htm.jpeg" alt="Hospital Traffic Management" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Strategizing and Crafting Healthcare Initiatives */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/planning-and-desigining.jpg" alt="Room Data Sheets" className="w-full h-full object-cover" />
                  
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Strategizing and Crafting Healthcare Initiatives
              </h3>
              <div className="w-40 h-1 bg-blue-400 mb-4"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              By conducting a comprehensive review and making necessary modifications, we ensure that the architectural drawings accurately reflect the desired concept brief, setting the foundation for a successful implementation of the project.  We ensure that parameters outlined in the Architect’s brief are strictly adhering to relevant Standards, Guidelines, Statutes, Rules and Regulations, in accordance with the NQUAS/NABH/JCI standards, aligning with either the American, Australasian, or other applicable Health facility guidelines. The aim is to create a well-designed healthcare facility that meets the highest standards of quality, safety, and patient care.
              </p>
              <div className="space-y-4">
                {[
                  "Layout and Space Planning",
                  "Compliance with NQUAS/NABH/JCI Standards",
                  "Adherence to Health Facility Guidelines",
                  "Statutes, Rules, and Regulations"
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


    </div>
  )
}

// Specialized Services Page Component
const SpecializedServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/tailored-and-specialized-services-design.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white font-semibold text-lg">Specialized Services</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  CREATING TAILORED
                </span>
                <br />
                <span className="text-white">
                  AND SPECIALIZED
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  SERVICES
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                By conducting a comprehensive review and making necessary modifications, we ensure that the architectural drawings accurately reflect the desired concept brief.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-medium">Comprehensive Design</span>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-medium">Tailored Solutions</span>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  <span className="text-white font-medium">Expert Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </section>

      {/* CREATING TAILORED AND SPECIALIZED SERVICES */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Sidebar - Service Categories */}
            <div className="space-y-4">
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  INTEGRATED ARCHITECTURAL AND MEP PLANNING SOLUTION FOR SEAMLESS PROJECT
                </h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-sm font-semibold text-white leading-relaxed">
                  CREATING TAILORED AND SPECIALIZED SERVICES
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  OPTIMIZED HOSPITAL EQUIPMENT PLANNING
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  STREAMLINING PRE-COMMISSIONING AND COMMISSIONING ACTIVITIES
                </h3>
              </div>
            </div>

            {/* Right Side - Gas Pipeline System Diagram */}
            <div className="space-y-8">
              {/* Gas Pipeline System Diagram */}
              <div className="text-lg text-gray-600 leading-relaxed">               
                <span className="text-lg md:text-lg font-bold text-gray-900 pr-2">Creating Tailored And Specialized Services</span>
                focuses on designing solutions that meet the unique needs of individual clients or industries. Unlike generic offerings, tailored services are customized after understanding specific requirements, challenges, and goals. This approach ensures higher efficiency, better alignment with client expectations, and improved outcomes. Specialized services also leverage domain expertise, advanced tools, and innovative practices to deliver measurable value. By offering flexibility and personalization, organizations build stronger client relationships, foster trust, and gain a competitive advantage. Ultimately, tailored and specialized services drive customer satisfaction, operational excellence, and sustainable growth in today’s dynamic and competitive market environment.
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Medical Gas Pipeline System Section*/}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Gas Pipeline System</h3>
                  {/* <p className="text-blue-600 font-medium">(MGPS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The design and planning of MGPS (Medical Gas Pipeline System) services for various functional areas adhere strictly to the guidelines set forth by HTM, ISO 7396, and NFPA standards. Our team conducts meticulous calculations to determine the necessary flow rates and requirements for essential components such as Liquid Oxygen Tank (LOX), Gas Manifolds, Medical Air Compressor System, Vacuum System, and PSA (Pressure Swing Adsorption) oxygen generation plant.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Compliance with Standards",
                  "Requirement Analysis",
                  "Detailed Layout Design",
                  "Collaboration and Coordination",
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
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/mgps.jpg" alt="Medical Gas Pipeline System" className="w-full h-full object-cover" />
                  {/* <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Gas Pipeline System</h3>
                  <p className="text-gray-600 font-medium">Medical Gas Pipeline System</p>
                  <p className="text-sm text-gray-500 mt-2">HTM, ISO 7396, NFPA Standards</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Modular Operation Theatre Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/mot.jpg" alt="Modular Operation Theatre" className="w-full h-full object-cover" />
                  {/* <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Stethoscope className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Modular Operation Theatre</h3>
                  <p className="text-gray-600 font-medium">Robotic Surgical System</p>
                  <p className="text-sm text-gray-500 mt-2">Advanced Surgical Technology</p> */}
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Modular Operation Theatre</h3>
                  {/* <p className="text-blue-500 font-medium">(MOT)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The design & development of the Operation Theatre complex, along with its accessory areas, is meticulously crafted to align with the organizational clinical plan and policies. Customized designs are created for specialty and super-specialty operation theatres, ensuring they cater precisely to the unique requirements of each area.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Clinical Plan and Policies",
                  "Accessory Areas",
                  "Infection Control Measures",
                  "Safety and Regulatory Compliance",
                  "Technology Implementation",
                  "Specialty and Super-Specialty OTs",
                  "Operation Theatre Integration (OTI)",
                  "Stakeholder Engagement",
                  "Clinical Requirements Analysis"
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

      {/* Nurse Call System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Nurse Call System</h3>
                  {/* <p className="text-blue-600 font-medium">(NCS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The planning of Nurse Call System (NCS) services for various functional areas conducted in accordance with DIN/VDE or UL standards. Development of a room-wise Design Matrix that outlines the placement and configuration of NCS components in each area.
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
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/ncs.jpg" alt="Nurse Call System" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Central Sterile Supply Department Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/cssd.jpg" alt="Central Sterile Supply Department" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Central Sterile Supply Department</h3>
                  {/* <p className="text-blue-600 font-medium">(CSSD)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The design follows a "three-zone" approach, including accessory areas. It emphasizes adherence to organizational clinical plans, policies, and infection control practices, guided by national and international agencies like the CDC and ASHRAE.
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
          </div>
        </div>
      </section>

      {/* Pneumatic Tube Transfer System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pneumatic Tube Transfer System</h3>
                  {/* <p className="text-blue-600 font-medium">(PTTS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Designing of Pneumatic Tube System stands as a state-of-the-art computer-controlled system. We design PTS considering ease of accessibility between crucial areas keeping in mind secure transfer points, patient flow, traffic patterns, distances, benefiting both nursing/medical staff and fully automated laboratory lines and pharmacies within the facility in accordance with HTM standards.
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
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/ptts.jpg" alt="Pneumatic Tube Transfer System" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radio-Diagnostic Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/rds.jpg" alt="Radio-Diagnostic Services" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Radio-Diagnostic Services</h3>
                  {/* <p className="text-blue-600 font-medium">(RDS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The planning of Radio-diagnostic services, encompassing CT scan, X-ray, and Ultrasound, is meticulously conducted following the guidelines set forth by reputable organizations such as AERB, PCPNDT, and other applicable regulations.
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
          </div>
        </div>
      </section>

      {/* Lab Diagnostic Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Lab Diagnostic Services</h3>
                  {/* <p className="text-blue-600 font-medium">(LDS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The planning of various clinical labs is carried out meticulously, considering presumptive load, efficient workload handling, and strict adherence to infection control guidelines from agencies like CDC and ASHRAE to ensure a safe and hygienic environment.
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
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/lds.jpg" alt="Lab Diagnostic Services" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radiation And Other Therapeutic Areas Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/rta.jpg" alt="Radiation And Other Therapeutic Areas" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Radiation And Other Therapeutic Areas</h3>
                  {/* <p className="text-blue-600 font-medium">(RTA)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The comprehensive planning of Radio-Therapeutic (Radiation) services, including PET CT scan, LINAC, and Brachy-Therapy, emphasizes adherence to guidelines from bodies like AERB (Atomic Energy Regulatory Board) and highlights the critical role of radiation oncology in cancer management.
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
          </div>
        </div>
      </section>

      {/* Hospital Laundry Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hospital Laundry Services</h3>
                  {/* <p className="text-blue-600 font-medium">(HLS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
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
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/hls.jpg" alt="Hospital Laundry Services" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Kitchen Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/hks.jpg" alt="Hospital Kitchen Services" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hospital Kitchen Services</h3>
                  {/* <p className="text-blue-600 font-medium">(HKS)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Careful planning and consideration of several factors are essential when designing a hospital kitchen to ensure its efficient operation. These factors include selecting an appropriate location, ensuring the presence of adequate equipment, complying with health and safety regulations, implementing digital inventory management systems or automated temperature monitoring for refrigeration.
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
          </div>
        </div>
      </section>

      {/* Hospital Information System Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl p-8">
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Hospital Information System</h3>
                  {/* <p className="text-blue-600 font-medium">(Hospital IT System)</p> */}
                  <div className="w-40 h-1 bg-blue-400 mb-4"></div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The primary objective of a Hospital Information Management System is to efficiently manage and streamline various aspects of a hospital's operations and administrative tasks. This includes handling patient registration and demographic data entry, storing and managing patient medical records, managing patient appointments, facilitating billing and insurance processes.
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
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/his.jpg" alt="Hospital IT System" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

// Equipment Planning Page Component
const EquipmentPlanningPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/hospital-equipment-planning.jpeg')"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-medium">Equipment Planning</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                OPTIMIZED HOSPITAL EQUIPMENT PLANNING
                <br />
                ENSURING HEALTHCARE DELIVERY
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Sidebar - Service Categories */}
            <div className="space-y-4">
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  INTEGRATED ARCHITECTURAL AND MEP PLANNING SOLUTION FOR SEAMLESS PROJECT
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  CREATING TAILORED AND SPECIALIZED SERVICES
                </h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-sm font-semibold text-white leading-relaxed">
                  OPTIMIZED HOSPITAL EQUIPMENT PLANNING
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  STREAMLINING PRE-COMMISSIONING AND COMMISSIONING ACTIVITIES
                </h3>
              </div>
            </div>

            {/* Right Side - Main Graphic and Content */}
            <div className="space-y-8">
              {/* Medical Infographic */}
              <div className="text-lg text-gray-600 leading-relaxed">
                {/* <div className="bg-gray-100 rounded-xl p-8"> */}
                {/* <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center"> */}
                {/* <div className="text-center"> */}
                {/* <h4 className="text-2xl font-bold text-gray-800 mb-4">Gas Pipeline System</h4> */}
                {/* <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-16 h-16 text-white" />
                    </div> */}
                <span className="text-lg md:text-lg font-bold text-gray-900 pr-2">Optimized Hospital Equipment Planning</span>
                ensures the right medical devices are available, functional, and strategically allocated to support efficient healthcare delivery. It involves analyzing patient needs, treatment demands, and facility capacity to create a well-structured equipment roadmap. By integrating technology, predictive analytics, and space utilization, hospitals can minimize equipment downtime, reduce costs, and avoid duplication. Proper planning also supports compliance with healthcare standards while ensuring critical devices are always accessible. Ultimately, optimized equipment planning improves patient care, enhances staff efficiency, and maximizes return on investment, making it an essential part of modern hospital management and sustainable healthcare infrastructure.
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>

              {/* Main Content */}

            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ensuring Efficient Healthcare Delivery
              </h3>
              <div className="w-40 h-1 bg-blue-500 mb-4"></div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hospital equipment planning is a methodical process that involves identifying, selecting, and strategically arranging medical equipment and technology within a healthcare facility. This comprehensive approach ensures optimal patient care, increases staff efficiency, and keeps the hospital up-to-date with the latest medical technology. The planning process is crucial during hospital design, construction, renovations, and expansions, as it directly impacts the facility's ability to deliver high-quality healthcare services.
              </p>
              {/* 
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Main considerations of hospital equipment planning:
                </h3> */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    "Identifying Equipment Needs",
                    "Budgeting and Procurement",
                    "Safety and Compliance",
                    "Maintenance and Service Support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    "Technology Evaluation",
                    "Space and Workflow Planning",
                    "Integration with Information Systems"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/hospital-equipment-planning.jpeg" alt="Pre-commissioning and Commissioning Activities" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Pre-commissioning and Commissioning Activities Page Component
const PreCommissioningPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/services/pre-commissioning.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container-custom text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-medium">Pre-commissioning & Commissioning</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                STREAMLINING PRE-COMMISSIONING AND
                <br />
                COMMISSIONING ACTIVITIES
                <br />
                ENSURING SEAMLESS PROJECTS DEPLOYMENT
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Hospital pre-commissioning activities refer to the preparatory steps and tasks that take place before the actual commissioning process of a hospital facility begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Sidebar - Service Categories */}
            <div className="space-y-4">
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  INTEGRATED ARCHITECTURAL AND MEP PLANNING SOLUTION FOR SEAMLESS PROJECT
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  CREATING TAILORED AND SPECIALIZED SERVICES
                </h3>
              </div>
              <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="text-sm font-semibold text-blue-800 leading-relaxed">
                  OPTIMIZED HOSPITAL EQUIPMENT PLANNING
                </h3>
              </div>
              <div className="bg-blue-400 p-6 rounded-xl border-l-4 border-blue-600">
                <h3 className="text-sm font-semibold text-white leading-relaxed">
                  STREAMLINING PRE-COMMISSIONING AND COMMISSIONING ACTIVITIES
                </h3>
              </div>
            </div>

            {/* Right Side - Main Graphic and Content */}
            <div className="space-y-8">
              {/* Industrial/Construction Infographic */}
              <div className="text-lg text-gray-600 leading-relaxed">
                {/* <div className="bg-gray-100 rounded-xl p-8"> */}
                {/* <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center"> */}
                {/* <div className="text-center"> */}
                {/* <h4 className="text-2xl font-bold text-gray-800 mb-4">Gas Pipeline System</h4> */}
                {/* <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-16 h-16 text-white" />
                    </div> */}
                <span className="text-lg md:text-lg font-bold text-gray-900 pr-2">Streamlining Pre-commissioning and Commissioning Activities</span>
                is essential to ensure a smooth transition from construction to full-scale operations. By adopting structured workflows, digital checklists, and real-time monitoring tools, project teams can identify issues early, reduce delays, and minimize rework. Integration of BIM, IoT sensors, and testing automation enhances accuracy in verifying system performance, safety, and compliance with regulatory standards. Effective coordination between stakeholders—designers, contractors, and operators—ensures that equipment and systems are validated efficiently. This approach not only accelerates project handover but also improves reliability, reduces costs, and enhances operational readiness for long-term performance and sustainability.
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>

              {/* Main Content */}

            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ensuring Seamless Project Deployment
              </h3>
              <div className="w-40 h-1 bg-blue-500 mb-4"></div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hospital pre-commissioning activities refer to the preparatory steps and tasks that take place before the actual commissioning process of a hospital facility begins. These activities are essential to ensure that the hospital's systems, equipment, and infrastructure are ready for commissioning and can function as intended. It includes:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    "Design Review",
                    "Systems Testing",
                    "Training",
                    "Mock Drills",
                    "Compliance Verification"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    "Equipment Inspection",
                    "Calibration",
                    "Documentation",
                    "Safety Checks",
                    "Handover Preparation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="w-full h-96 bg-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/esrpd.jpg" alt="Pre-commissioning and Commissioning Activities" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Design Approach Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <img src="/images/services/sdaar.jpg" alt="Strategic Design Approach And Associated Requirements" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Strategic Design Approach And Associated Requirements
              </h2>
              <div className="w-40 h-1 bg-blue-500 mb-4"></div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As building systems continue to advance in complexity, the commissioning process has become increasingly significant for ensuring quality, especially in healthcare facilities. Hospital commissioning is a systematic process designed to ensure that building systems are meticulously constructed and meet predefined standards. It involves the fine-tuning of a building's systems and equipment to ensure optimal functionality and performance. This process is crucial for a hospital's long-term success and contributes to the delivery of high-quality healthcare services.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hospital commissioning activities are the set of organized and systematic tasks that ensure a new or renovated hospital facility is fully functional, meets requirements, and operates as intended. These activities typically include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    "Functional Testing",
                    "Integrated Systems Testing",
                    "Safety and Emergency Preparedness Checks",
                    "Staff Training",
                    "Patient Flow and Process Testing",
                    "Infection Control Assessment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    "Documenting Standard Operating Procedures (SOPs)",
                    "Facility Management Handover",
                    "Patient Simulation",
                    "Quality Assurance and Quality Control",
                    "Performance Monitoring",
                    "Regulatory Compliance Verification"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage

