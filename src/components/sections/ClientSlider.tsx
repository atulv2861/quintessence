import React from 'react';

interface Client {
  image: string;
  alt: string;
  name: string;
}

const ClientSlider: React.FC = () => {
  const clients: Client[] = [
    { image: '/images/clients/fortis-logo.png', alt: 'Fortis Healthcare', name: 'Fortis Healthcare' },
    { image: '/images/clients/max-logo.png', alt: 'Max Healthcare', name: 'Max Healthcare' },
    { image: '/images/clients/medanta-logo.jpg', alt: 'Medanta Hospital', name: 'Medanta Hospital' },
    { image: '/images/clients/pwd-logo.jpg', alt: 'PWD Delhi Government', name: 'PWD Delhi Government' },
    { image: '/images/clients/up-logo.png', alt: 'Uttar Pradesh Government', name: 'Uttar Pradesh Government' },
  ];
    const [current, setCurrent] = React.useState(0);
    const [visibleCount, setVisibleCount] = React.useState(4);
  
    React.useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 640) setVisibleCount(1);
        else if (window.innerWidth < 1024) setVisibleCount(2);
        else setVisibleCount(4);
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const slideCount = clients.length;
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slideCount);
      }, 3000);
      return () => clearInterval(interval);
    }, [slideCount]);
  
    // Infinite loop effect
    const extendedClients = [...clients, ...clients.slice(0, visibleCount)];
  
    return (
      <div className="relative w-full overflow-x-auto scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <style>{`
          .scrollbar-none::-webkit-scrollbar { display: none; }
        `}</style>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
        >
          {extendedClients.map((client, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-2 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center justify-center"
              style={{ minWidth: visibleCount === 1 ? '100%' : visibleCount === 2 ? '50%' : '25%' }}
            >
              <div className="w-48 h-32 sm:w-60 sm:h-36 bg-white rounded-lg shadow flex items-center justify-center mb-2">
                <img
                  src={client.image}
                  alt={client.alt}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: 144 }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex flex-col items-center justify-center h-full text-gray-600">
                          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-2">
                            <span class="text-white text-lg font-bold">${client.name.charAt(0)}</span>
                          </div>
                          <span class="text-xs font-medium text-center px-2">${client.name}</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ClientSlider;
  