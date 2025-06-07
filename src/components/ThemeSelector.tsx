import React from 'react';

export type Theme = 'modern' | 'infographic' | 'legal';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  return (
    <select
      value={currentTheme}
      onChange={(e) => onThemeChange(e.target.value as Theme)}
      className="px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 
                 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium
                 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Select CV theme"
    >
      <option value="modern">Modern</option>
      <option value="infographic">Infographic</option>
      <option value="legal">Legal</option>
    </select>
  );
}; 