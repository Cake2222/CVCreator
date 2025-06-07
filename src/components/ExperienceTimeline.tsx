import React from 'react';
import { ExperienceData } from '../types/cv';
import { Theme } from './ThemeSelector';
import { getThemeStyles } from '../utils/themeStyles';

interface ExperienceTimelineProps {
  data: ExperienceData[];
  theme: Theme;
  highlightInnovation: boolean;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  data,
  theme,
  highlightInnovation
}) => {
  const themeStyles = getThemeStyles(theme);
  
  return (
    <section className={themeStyles.section}>
      <h2 className={themeStyles.heading}>Experience</h2>
      <div className="space-y-8">
        {data.map((exp, index) => (
          <div 
            key={index}
            className={`relative pl-8 border-l-2 ${
              highlightInnovation
                ? theme === 'infographic'
                  ? 'border-indigo-200'
                  : theme === 'legal'
                  ? 'border-gray-300'
                  : 'border-blue-200'
                : themeStyles.border
            }`}
          >
            {/* Timeline dot */}
            <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${
              highlightInnovation
                ? theme === 'infographic'
                  ? 'bg-indigo-200'
                  : theme === 'legal'
                  ? 'bg-gray-300'
                  : 'bg-blue-200'
                : themeStyles.border.replace('border', 'bg')
            }`} />
            
            {/* Date range */}
            <div className={`text-sm ${themeStyles.text} mb-1`}>
              {exp.period}
            </div>
            
            {/* Role and company */}
            <div className="mb-2">
              <h3 className={`text-lg font-medium ${themeStyles.heading}`}>
                {highlightInnovation && '💡 '}
                {exp.title}
                {highlightInnovation && (
                  <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    highlightInnovation
                      ? theme === 'infographic'
                        ? 'bg-indigo-100 text-indigo-800'
                        : theme === 'legal'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-blue-100 text-blue-800'
                      : theme === 'infographic'
                        ? 'bg-indigo-50 text-indigo-600'
                        : theme === 'legal'
                        ? 'bg-gray-50 text-gray-600'
                        : 'bg-slate-100 text-slate-700'
                  }`}>
                    Legal Tech
                  </span>
                )}
              </h3>
              <p className={themeStyles.text}>{exp.company}</p>
            </div>
            
            {/* Achievements */}
            <ul className="list-disc list-inside space-y-2">
              {exp.achievements.map((achievement, aIndex) => (
                <li 
                  key={aIndex} 
                  className={`text-sm leading-relaxed ${
                    highlightInnovation
                      ? theme === 'infographic'
                        ? 'text-indigo-700'
                        : theme === 'legal'
                        ? 'text-gray-700'
                        : 'text-blue-700'
                      : themeStyles.text
                  }`}
                >
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}; 