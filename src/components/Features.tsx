import React from 'react';
import { Mountain, Car, Laptop, Wind } from 'lucide-react';

const features = [
  {
    icon: Mountain,
    title: 'Mountain View',
    description: 'Stunning views of Trinidad\'s Northern Range'
  },
  {
    icon: Car,
    title: 'Free Parking',
    description: 'Secure on-site parking for all guests'
  },
  {
    icon: Laptop,
    title: 'Dedicated Workspace',
    description: 'Comfortable work area with high-speed Wi-Fi'
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    description: 'Climate-controlled rooms for your comfort'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Property Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;