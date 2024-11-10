export const properties = [
  {
    id: '1',
    title: 'Luxury Apartment in South Delhi',
    description: 'Premium 3BHK apartment with modern amenities in the heart of South Delhi. Features include modular kitchen, premium flooring, and 24/7 security.',
    price: 45000,
    priceType: 'rent',
    location: {
      city: 'Delhi',
      area: 'Greater Kailash',
      address: 'E-Block, GK-2'
    },
    bedrooms: 3,
    bathrooms: 2,
    area: 1500,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=1000&q=80'
    ],
    managerId: '1',
    managerContact: '+91 98765 43210',
    status: 'available',
    amenities: ['Parking', 'Gym', 'Security', 'Power Backup', 'Lift'],
    furnishing: 'fully-furnished',
    propertyType: 'apartment',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Modern Villa in Noida Sector 93',
    description: '4BHK independent villa with garden and terrace. Perfect for family living with premium amenities and secure gated community.',
    price: 25000000,
    priceType: 'sale',
    location: {
      city: 'Noida',
      area: 'Sector 93',
      address: 'Villa 45, Premium Villas'
    },
    bedrooms: 4,
    bathrooms: 4,
    area: 3200,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    managerId: '2',
    managerContact: '+91 98765 43211',
    status: 'available',
    amenities: ['Garden', 'Terrace', 'Parking', 'Security', 'Modular Kitchen'],
    furnishing: 'semi-furnished',
    propertyType: 'villa',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Spacious 4BHK in Vasant Kunj',
    description: 'Elegant 4BHK apartment with premium finishes, large balconies, and stunning views. Located in a prime residential area.',
    price: 75000,
    priceType: 'rent',
    location: {
      city: 'Delhi',
      area: 'Vasant Kunj',
      address: 'C-Block, Vasant Kunj'
    },
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1000&q=80'
    ],
    managerId: '3',
    managerContact: '+91 98765 43212',
    status: 'available',
    amenities: ['Parking', 'Club House', 'Security', 'Swimming Pool', 'Garden'],
    furnishing: 'fully-furnished',
    propertyType: 'apartment',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Premium Penthouse in Noida Sector 128',
    description: 'Luxurious 5BHK penthouse with private terrace garden, premium amenities, and panoramic views of the city.',
    price: 35000000,
    priceType: 'sale',
    location: {
      city: 'Noida',
      area: 'Sector 128',
      address: 'Tower A, Luxury Towers'
    },
    bedrooms: 5,
    bathrooms: 5,
    area: 4500,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1000&q=80'
    ],
    managerId: '4',
    managerContact: '+91 98765 43213',
    status: 'available',
    amenities: ['Private Pool', 'Terrace Garden', 'Home Theater', 'Smart Home', 'Private Elevator'],
    furnishing: 'fully-furnished',
    propertyType: 'penthouse',
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Modern 3BHK in Defence Colony',
    description: 'Contemporary 3BHK apartment with modern amenities, spacious rooms, and excellent connectivity.',
    price: 55000,
    priceType: 'rent',
    location: {
      city: 'Delhi',
      area: 'Defence Colony',
      address: 'D-Block, Defence Colony'
    },
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    managerId: '5',
    managerContact: '+91 98765 43214',
    status: 'available',
    amenities: ['Gym', 'Parking', 'Security', 'Power Backup', 'Children\'s Play Area'],
    furnishing: 'semi-furnished',
    propertyType: 'apartment',
    createdAt: new Date().toISOString()
  }
] as const;