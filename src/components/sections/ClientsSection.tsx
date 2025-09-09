import React from 'react'

const ClientsSection: React.FC = () => {
  const clients = [
    {
      name: 'DDF Consultants Private Limited',
      logo: '/images/clients/ddf-consultants.jpg'
    },
    {
      name: 'Dexterous Designers & Associates',
      logo: '/images/clients/dexterous-designers.jpg'
    },
    {
      name: 'ARCOP',
      logo: '/images/clients/arcop.jpg'
    },
    {
      name: 'SGA DESIGN LAB',
      logo: '/images/clients/sga-design.jpg'
    },
    {
      name: 'SAA sikka associates architects',
      logo: '/images/clients/saa-architects.jpg'
    }
  ]

  return (
    <>
    {/* <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200"
            >
              <div className="mb-4">
                <div className="h-16 w-24 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-xs font-bold">
                    {client.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section> */}
    {/* Our Clients Section */}
    <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Clients
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {/* HKSD Health City */}            
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-20 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                    <span className="text-gray-600 text-xs font-bold">HKSD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                HKSD Health City
              </p>
            </div>
           

            {/* PWD Delhi Government */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-16 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs">🌍</span>
                    </div>
                    <span className="text-gray-600 text-xs font-bold">PWD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                PWD Delhi Government
              </p>
            </div>

            {/* PWD Delhi Government (Tractor) */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-16 bg-white border-2 border-gray-800 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-white text-xs">🚜</span>
                    </div>
                    <span className="text-gray-600 text-xs font-bold">PWD</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                PWD Delhi Government
              </p>
            </div>

            {/* DDF Consultants */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-24 bg-white border border-gray-200 rounded flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                    <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                DDF Consultants Private Limited
              </p>
            </div>

            {/* Dexterous Designers */}
            <div className="flex flex-col items-center p-4 hover:bg-white rounded-lg transition-colors duration-200">
              <div className="mb-4">
                <div className="h-16 w-24 bg-gray-800 rounded flex items-center justify-center">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center mr-2">
                      <span className="text-white text-xs font-bold">d</span>
                    </div>
                    <span className="text-white text-xs font-bold">Dexterous</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center font-medium">
                Dexterous Designers & Associates
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientsSection
