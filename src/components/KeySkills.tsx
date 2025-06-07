import React from 'react';
import { SkillsData } from '../types/cv';
import { Theme } from './ThemeSelector';
import { getThemeStyles } from '../utils/themeStyles';

interface KeySkillsProps {
  data: SkillsData;
  theme: Theme;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span key={index} className="text-lg">
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export const KeySkills: React.FC<KeySkillsProps> = ({ data, theme }) => {
  const themeStyles = getThemeStyles(theme);
  
  return (
    <section className={themeStyles.section}>
      <h2 className={themeStyles.heading}>Key Skills</h2>
      <div className="space-y-6">
        {Object.entries(data).map(([category, skills]) => (
          <div key={category}>
            <h3 className={`text-lg font-medium mb-3 ${
              theme === 'infographic'
                ? 'text-indigo-700'
                : theme === 'legal'
                ? 'text-gray-700'
                : 'text-blue-700'
            }`}>
              {category}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className={`border-b ${
                    theme === 'infographic'
                      ? 'border-indigo-200'
                      : theme === 'legal'
                      ? 'border-gray-200'
                      : 'border-blue-200'
                  }`}>
                    <th className="py-2 px-4 text-left">Skill</th>
                    <th className="py-2 px-4 text-center">Proficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(skills).map(([skill, rating]) => (
                    <tr key={skill} className={`border-b ${
                      theme === 'infographic'
                        ? 'border-indigo-100'
                        : theme === 'legal'
                        ? 'border-gray-100'
                        : 'border-blue-100'
                    }`}>
                      <td className="py-2 px-4">{skill}</td>
                      <td className="py-2 px-4 text-center">
                        <StarRating rating={Number(rating)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}; 