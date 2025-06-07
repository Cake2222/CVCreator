import React from 'react';
import { ThemeSelector, Theme } from './ThemeSelector';
import { PDFDownloadButton } from './PDFDownloadButton';
import { CVData } from '../types/cv';

interface TopBarProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  highlightInnovation: boolean;
  onInnovationToggle: () => void;
  cvData: CVData;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentTheme,
  onThemeChange,
  highlightInnovation,
  onInnovationToggle,
  cvData
}) => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">LegalTech CV Creator</h1>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={highlightInnovation}
                onChange={onInnovationToggle}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Highlight Innovation</span>
            </label>
            <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />
            <PDFDownloadButton
              data={cvData}
              theme={currentTheme}
              highlightInnovation={highlightInnovation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 