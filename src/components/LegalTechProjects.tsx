import React from 'react';
import { ProjectData } from '../types/cv';
import { Theme } from './ThemeSelector';
import { getThemeStyles } from '../utils/themeStyles';

interface LegalTechProjectsProps {
  data: ProjectData[];
  theme: Theme;
  highlightInnovation: boolean;
}

export const LegalTechProjects: React.FC<LegalTechProjectsProps> = ({
  data,
  theme,
  highlightInnovation
}) => {
  const themeStyles = getThemeStyles(theme);
  
  return (
    <section className={themeStyles.section}>
      <h2 className={themeStyles.heading}>Legal Tech Projects</h2>
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
              <th className="py-2 px-4 text-left">Project</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Achievements</th>
            </tr>
          </thead>
          <tbody>
            {data.map((project, index) => (
              <tr key={index} className={`border-b ${
                theme === 'infographic'
                  ? 'border-indigo-100'
                  : theme === 'legal'
                  ? 'border-gray-100'
                  : 'border-blue-100'
              }`}>
                <td className="py-2 px-4">
                  <span className="font-medium">
                    {highlightInnovation && '💡 '}
                    {project.name}
                  </span>
                </td>
                <td className="py-2 px-4">{project.role}</td>
                <td className="py-2 px-4">
                  <ul className="list-disc list-inside space-y-1">
                    {project.achievements.map((achievement, aIndex) => (
                      <li key={aIndex}>{achievement}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}; 