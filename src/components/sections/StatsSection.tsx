import React,{useEffect, useState} from 'react'
import { Building, Bed, FileText, Users } from 'lucide-react'
import { COMPANY_INFO } from '../../data/constants'

const StatsSection: React.FC = () => {
  const { stats } = COMPANY_INFO

  // const formatNumber = (num: number) => {
  //   return num.toLocaleString()
  // }
  const [projectsCount, setProjectsCount] = useState(1)
  const [bedsCount, setBedsCount] = useState(1)
  const [areaCount, setAreaCount] = useState(1)
  const [associatesCount, setAssociatesCount] = useState(1)
  const increaseCount = (num: number, type: string, update: (val: number) => void) => {
    let current = 1
    let increment = 1
    let stepTime = 50
    if(type === "projects"){
      current = projectsCount
      increment = 1
      stepTime = 100
    }else if(type === "beds"){
      current = 1000
      increment = 1000
      stepTime = 100
    }else if(type === "area"){
      current = 1000
      increment = 1000
    }else if(type === "associates"){
      current = associatesCount
      increment = 1
      stepTime = 100
    }
     // interval step (ms) → adjust for speed
  
    const interval = setInterval(() => {
      update(current) // update UI with current value
  
      if (current >= num) {
        clearInterval(interval)
      } else {
        current += increment
      }
    }, stepTime)
  }
  
  useEffect(() => {
    increaseCount(stats.projects,"projects",setProjectsCount)
    increaseCount(stats.beds,"beds",setBedsCount)
    increaseCount(stats.area,"area",setAreaCount)
    increaseCount(stats.associates,"associates",setAssociatesCount)
  }, [])

  return (
    <section className="section-padding medical-section-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-300/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-purple-100/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-lg font-semibold tracking-wider">WELL BEYOND HEALTHCARE</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {/* <span className="medical-text-gradient">Achievements and Milestones</span> */}
            <span className="text-blue-400">Achievements and Milestones</span>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Collaborative effort of various stakeholders has paved the way for improved healthcare infrastructure benefiting communities worldwide. We have a vision to create sustainable and resilient infrastructure across the healthcare sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group animate-scale-in h-full">
            <div className="medical-card p-8 h-64 flex flex-col justify-center items-center group-hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-blue-400">{areaCount}</span>
                <span className="text-blue-400"> Sqm</span>
              </div>
              <div className="text-gray-600 font-medium text-lg">Area</div>
            </div>
          </div>

          <div className="text-center group animate-scale-in h-full" style={{animationDelay: '0.1s'}}>
            <div className="medical-card p-8 h-64 flex flex-col justify-center items-center group-hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Bed className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-blue-400">{bedsCount}</span>
                <span className="text-blue-400">*</span>
              </div>
              <div className="text-gray-600 font-medium text-lg">Beds</div>
            </div>
          </div>

          <div className="text-center group animate-scale-in h-full" style={{animationDelay: '0.2s'}}>
            <div className="medical-card p-8 h-64 flex flex-col justify-center items-center group-hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-blue-400">{projectsCount}</span>
                <span className="text-blue-400">*</span>
              </div>
              <div className="text-gray-600 font-medium text-lg">Projects</div>
            </div>
          </div>

          <div className="text-center group animate-scale-in h-full" style={{animationDelay: '0.3s'}}>
            <div className="medical-card p-8 h-64 flex flex-col justify-center items-center group-hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-blue-400">{associatesCount}</span>
                <span className="text-blue-400">*</span>
              </div>
              <div className="text-gray-600 font-medium text-lg">Associates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
