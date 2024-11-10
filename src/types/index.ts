export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'tenant';
  avatar?: string;
  phone?: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: 'rent' | 'sale';
  location: {
    city: 'Delhi' | 'Noida';
    area: string;
    address: string;
  };
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  managerId: string;
  managerContact: string;
  status: 'available' | 'rented' | 'sold' | 'maintenance';
  amenities: string[];
  furnishing: 'unfurnished' | 'semi-furnished' | 'fully-furnished';
  propertyType: 'apartment' | 'villa' | 'house' | 'penthouse';
  createdAt: string;
}

export interface RentalApplication {
  id: string;
  propertyId: string;
  tenantId: string;
  status: 'pending' | 'approved' | 'rejected';
  message: string;
  createdAt: string;
}