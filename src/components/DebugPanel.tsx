
import React from 'react';
import { useSelectedSubcategory } from '../hooks/useSelectedSubcategory';
import { useDesktopDropdownState } from '../hooks/useDesktopDropdownState';
import { useLocation } from 'react-router-dom';

const DebugPanel: React.FC = () => {
  const { selectedSubcategory } = useSelectedSubcategory();
  const { categoryDropdownOpen, subcategoryDropdownOpen } = useDesktopDropdownState();
  const location = useLocation();

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-[9999] max-w-xs">
      <h4 className="font-bold mb-2">Debug Panel</h4>
      <div className="space-y-1">
        <p><strong>Current Path:</strong> {location.pathname}</p>
        <p><strong>Selected Subcategory:</strong> {selectedSubcategory || 'None'}</p>
        <p><strong>Category Dropdown:</strong> {categoryDropdownOpen ? 'Open' : 'Closed'}</p>
        <p><strong>Subcategory Dropdown:</strong> {subcategoryDropdownOpen ? 'Open' : 'Closed'}</p>
      </div>
    </div>
  );
};

export default DebugPanel;
