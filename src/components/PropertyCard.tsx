import React, { useState } from 'react';
import { MapPin, Bed, Bath, Move, Heart } from 'lucide-react';
import type { Property } from '../types';
import PropertyModal from './PropertyModal';

export default function PropertyCard({ property }: { property: Property }) {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number, type: 'rent' | 'sale') => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });
    
    return `${formatter.format(price)}${type === 'rent' ? '/month' : ''}`;
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-48 w-full object-cover"
          />
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white"
          >
            <Heart 
              className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
          <div className="absolute bottom-3 left-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
            {formatPrice(property.price, property.priceType)}
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{property.location.area}, {property.location.city}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
            <div className="flex items-center">
              <Move className="h-4 w-4 mr-1" />
              <span className="text-sm">{property.area} sqft</span>
            </div>
          </div>
        </div>
        
        <div className="px-4 py-3 bg-gray-50 border-t flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs ${
            property.status === 'available' ? 'bg-green-100 text-green-800' :
            property.status === 'rented' ? 'bg-red-100 text-red-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
          <button 
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <PropertyModal 
          property={property} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
}