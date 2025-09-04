import React from 'react'
import { Building, Bed, FileText, Users } from 'lucide-react'
import { COMPANY_INFO } from '../../data/constants'

const StatsSection: React.FC = () => {
  const { stats } = COMPANY_INFO

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 text-lg font-semibold mb-4">PROJECTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Some of the projects attributed to me...
          </h3>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <h4 className="text-blue-600 text-lg font-semibold mb-4">WELL BEYOND HEALTHCARE</h4>
          <h5 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Achievements and Milestones
          </h5>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          
          <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Collaborative effort of various stakeholders has paved the way for improved healthcare infrastructure benefiting communities worldwide. We have a vision to create sustainable and resilient infrastructure across the healthcare sector. Our mission is to plan healthcare infrastructure which is receptive and comfortable to its users with their local architecture yet equipped with all the modern facilities and advancement.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {formatNumber(stats.area)} Sqm
            </div>
            <div className="text-gray-600 font-medium">Area</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bed className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {formatNumber(stats.beds)}*
            </div>
            <div className="text-gray-600 font-medium">Beds</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stats.projects}*
            </div>
            <div className="text-gray-600 font-medium">Projects</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {stats.associates}*
            </div>
            <div className="text-gray-600 font-medium">Associates</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
