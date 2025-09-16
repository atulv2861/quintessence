import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../../data/constants';
import { Service } from '../../types';

const ServiceSlider: React.FC = () => {
  const services: Service[] = SERVICES;

  const [current, setCurrent] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(3);

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideCount = services.length;
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 4000); // Slightly longer interval for services
    return () => clearInterval(interval);
  }, [slideCount]);

  // Infinite loop effect
  const extendedServices = [...services, ...services.slice(0, visibleCount)];

  return (
    <div className="relative w-full overflow-x-auto scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `}</style>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
      >
        {extendedServices.map((service, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-3 w-full sm:w-1/2 lg:w-1/3 flex flex-col"
            style={{ minWidth: visibleCount === 1 ? '100%' : visibleCount === 2 ? '50%' : '33.33%' }}
          >
            <div className="medical-card p-6 group hover:scale-105 transition-all duration-300 animate-scale-in relative overflow-hidden h-full">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Service Image */}
              <div className="mb-4 relative z-10">
                <div className="w-full h-40 bg-gray-100 rounded-xl overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
                  {service.image ? (
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="flex flex-col items-center justify-center h-full text-gray-600 bg-gradient-to-br from-blue-50 to-blue-100">
                              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                                <span class="text-white text-2xl font-bold">${service.title.charAt(0)}</span>
                              </div>
                              <span class="text-sm font-medium text-center px-2">${service.title}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-600 bg-gradient-to-br from-blue-50 to-blue-100">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                        <span className="text-white text-2xl font-bold">{service.title.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-center px-2">{service.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {service.title.toUpperCase()}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 group/link mt-auto"
                >
                  <span className="text-sm">READ MORE</span>
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center group-hover/link:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
