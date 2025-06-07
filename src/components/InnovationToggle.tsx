import React from 'react';

interface InnovationToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

export const InnovationToggle: React.FC<InnovationToggleProps> = ({ isEnabled, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-[26rem] z-10 flex items-center space-x-2 px-3 py-2 
                 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50
                 transition-colors duration-200"
    >
      <span className="text-sm font-medium text-gray-700">
        {isEnabled ? '💡 Highlight Innovation' : 'Highlight Innovation'}
      </span>
      <div className={`w-10 h-5 rounded-full transition-colors duration-200 ${
        isEnabled ? 'bg-blue-500' : 'bg-gray-200'
      }`}>
        <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform duration-200 ${
          isEnabled ? 'translate-x-5' : 'translate-x-1'
        }`} />
      </div>
    </button>
  );
}; 