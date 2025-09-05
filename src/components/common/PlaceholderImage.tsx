import React from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  width, 
  height, 
  text = 'Image', 
  className = '' 
}) => {
  return (
    <div 
      className={`bg-gray-200 flex items-center justify-center text-gray-500 font-medium ${className}`}
      style={{ width, height }}
    >
      {text}
    </div>
  )
}

export default PlaceholderImage

