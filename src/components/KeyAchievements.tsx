import React from 'react';
import { KeyAchievementData } from '../types/cv';
import { Theme } from './ThemeSelector';
import { getThemeStyles } from '../utils/themeStyles';

interface KeyAchievementsProps {
  data: KeyAchievementData[];
  theme: Theme;
}

export const KeyAchievements: React.FC<KeyAchievementsProps> = ({ data, theme }) => {
  const themeStyles = getThemeStyles(theme);
  
  return (
    <section className={themeStyles.section}>
      <h2 className={themeStyles.heading}>Key Achievements</h2>
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
              <th className="py-2 px-4 text-left">Achievement</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Description</th>
              <th className="py-2 px-4 text-left">Impact</th>
            </tr>
          </thead>
          <tbody>
            {data.map((achievement, index) => (
              <tr key={index} className={`border-b ${
                theme === 'infographic'
                  ? 'border-indigo-100'
                  : theme === 'legal'
                  ? 'border-gray-100'
                  : 'border-blue-100'
              }`}>
                <td className="py-2 px-4">
                  <span className="font-medium">{achievement.title}</span>
                </td>
                <td className="py-2 px-4">{achievement.date}</td>
                <td className="py-2 px-4">{achievement.description}</td>
                <td className="py-2 px-4">{achievement.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}; 