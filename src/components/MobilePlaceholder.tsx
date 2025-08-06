
import React from 'react';

interface MobilePlaceholderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MobilePlaceholder: React.FC<MobilePlaceholderProps> = ({ title, description, icon }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Mobile Layout Coming Soon
          </h2>
          <p className="text-sm text-gray-600">
            This page is optimized for desktop viewing. Mobile and tablet layouts 
            are being developed and will be available soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobilePlaceholder;
