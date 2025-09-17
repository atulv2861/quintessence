import React from 'react'
import ClientSlider from './ClientSlider'

const ClientsSection: React.FC = () => {
  // const clients = [
  //   {
  //     name: 'DDF Consultants Private Limited',
  //     logo: '/images/clients/ddf-consultants.jpg'
  //   },
  //   {
  //     name: 'Dexterous Designers & Associates',
  //     logo: '/images/clients/dexterous-designers.jpg'
  //   },
  //   {
  //     name: 'ARCOP',
  //     logo: '/images/clients/arcop.jpg'
  //   },
  //   {
  //     name: 'SGA DESIGN LAB',
  //     logo: '/images/clients/sga-design.jpg'
  //   },
  //   {
  //     name: 'SAA sikka associates architects',
  //     logo: '/images/clients/saa-architects.jpg'
  //   }
  // ]

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
    <section className="section-padding medical-section-bg relative">
        <div className="container-custom">
          <div className="text-center mb-20 animate-fade-in">
            {/* <div className="inline-block mb-4">
              <span className="text-blue-400 text-lg font-semibold tracking-wider">OUR CLIENTS</span>
            </div> */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {/* <span className="medical-text-gradient">Our Clients</span> */}
              <span className="text-blue-400">Our Clients</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <ClientSlider />
        </div>
      </section>
    </>
  )
}

export default ClientsSection
