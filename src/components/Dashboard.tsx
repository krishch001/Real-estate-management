import React, { useState } from 'react';
import { Home, Users, FileText, Settings, PieChart, Search } from 'lucide-react';
import Navbar from './Navbar';
import PropertyCard from './PropertyCard';
import AddPropertyModal from './AddPropertyModal';
import { properties as initialProperties } from '../data/properties';
import type { Property } from '../types';

export default function Dashboard({ role = 'admin' }) {
  const [properties, setProperties] = useState(initialProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<'all' | 'Delhi' | 'Noida'>('all');
  const [propertyType, setPropertyType] = useState<'all' | 'rent' | 'sale'>('all');
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddProperty = (newProperty: Omit<Property, 'id' | 'createdAt'>) => {
    const property: Property = {
      ...newProperty,
      id: (properties.length + 1).toString(),
      createdAt: new Date().toISOString()
    };
    setProperties([...properties, property]);
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.area.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'all' || property.location.city === selectedCity;
    const matchesType = propertyType === 'all' || property.priceType === propertyType;
    
    return matchesSearch && matchesCity && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar role={role} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-64 bg-white border-r">
          <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
            <div className="flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-indigo-50 text-indigo-600">
                  <Home className="mr-3 h-6 w-6" />
                  Dashboard
                </a>
                <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                  <PieChart className="mr-3 h-6 w-6" />
                  Analytics
                </a>
                <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                  <Users className="mr-3 h-6 w-6" />
                  Users
                </a>
                <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                  <FileText className="mr-3 h-6 w-6" />
                  Documents
                </a>
                <a href="#" className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                  <Settings className="mr-3 h-6 w-6" />
                  Settings
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search properties..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value as any)}
                  >
                    <option value="all">All Cities</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                  </select>
                  <select
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value as any)}
                  >
                    <option value="all">All Types</option>
                    <option value="rent">For Rent</option>
                    <option value="sale">For Sale</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Home className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Properties
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {properties.length}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Available Properties
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {properties.filter(p => p.status === 'available').length}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <FileText className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Total Locations
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          2
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Listings */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Available Properties</h2>
                {role === 'admin' || role === 'manager' ? (
                  <button 
                    onClick={() => setShowAddModal(true)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Add Property
                  </button>
                ) : null}
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
        <AddPropertyModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddProperty}
        />
      )}
    </div>
  );
}