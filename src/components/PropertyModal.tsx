import React from 'react';
import { X, Phone, MapPin, Home } from 'lucide-react';
import type { Property } from '../types';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const formatPrice = (price: number, type: 'rent' | 'sale') => {
    const formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    });
    
    return `${formatter.format(price)}${type === 'rent' ? '/month' : ''}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {property.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            ))}
          </div>
          
          {/* Price and Location */}
          <div className="mb-6">
            <div className="text-3xl font-bold text-indigo-600 mb-2">
              {formatPrice(property.price, property.priceType)}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.location.address}, {property.location.area}, {property.location.city}</span>
            </div>
          </div>
          
          {/* Property Details */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Property Details</h3>
              <div className="space-y-2 text-gray-600">
                <div>Type: {property.propertyType}</div>
                <div>Furnishing: {property.furnishing}</div>
                <div>Area: {property.area} sq.ft</div>
                <div>{property.bedrooms} Bedrooms • {property.bathrooms} Bathrooms</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <Home className="h-4 w-4 mr-2" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-600">{property.description}</p>
          </div>
          
          {/* Contact */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Contact Property Manager</h3>
                <p className="text-gray-600">{property.managerContact}</p>
              </div>
              <a
                href={`tel:${property.managerContact}`}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}