
import React from 'react';
import MobileCategoryButton from './MobileCategoryButton';
import MobileSubcategoryButton from './MobileSubcategoryButton';

const MobileButtonRow: React.FC = () => {
  return (
    <div className="flex gap-3 mb-6">
      <MobileSubcategoryButton />
      <MobileCategoryButton />
    </div>
  );
};

export default MobileButtonRow;
