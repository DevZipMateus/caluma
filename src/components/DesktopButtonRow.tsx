
import React from 'react';
import DesktopCategoryDropdown from './DesktopCategoryDropdown';
import DesktopSubcategoryDropdown from './DesktopSubcategoryDropdown';
import DebugPanel from './DebugPanel';

const DesktopButtonRow: React.FC = () => {
  return (
    <>
      <div className="flex gap-3 mb-6">
        <DesktopCategoryDropdown />
        <DesktopSubcategoryDropdown />
      </div>
      <DebugPanel />
    </>
  );
};

export default DesktopButtonRow;
