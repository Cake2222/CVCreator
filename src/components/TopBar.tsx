import React from 'react';
import { motion } from 'framer-motion';
import { Theme } from './ThemeSelector';
import { ThemeSelector } from './ThemeSelector';
import { InnovationToggle } from './InnovationToggle';
import { PDFDownloadButton } from './PDFDownloadButton';

interface TopBarProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  highlightInnovation: boolean;
  onInnovationToggle: () => void;
  cvData: any;
  onReset: () => void;
  onGitHubBackup: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentTheme,
  onThemeChange,
  highlightInnovation,
  onInnovationToggle,
  cvData,
  onReset,
  onGitHubBackup,
}) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200
                 px-4 py-3 flex items-center justify-between shadow-sm"
    >
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold text-gray-900">LegalTech CV Creator</h1>
        <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />
      </div>

      <div className="flex items-center space-x-4">
        <InnovationToggle
          isEnabled={highlightInnovation}
          onToggle={onInnovationToggle}
        />
        <PDFDownloadButton
          data={cvData}
          theme={currentTheme}
          highlightInnovation={highlightInnovation}
        />
        <button
          onClick={onReset}
          className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg
                     hover:bg-gray-200 transition-colors duration-200"
        >
          Reset CV
        </button>
        <button
          onClick={onGitHubBackup}
          className="px-3 py-1.5 text-sm font-medium text-white bg-gray-800 rounded-lg
                     hover:bg-gray-900 transition-colors duration-200"
        >
          Backup to GitHub
        </button>
      </div>
    </motion.div>
  );
}; 