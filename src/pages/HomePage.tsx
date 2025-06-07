import React, { useState } from 'react';
import { initialCVData } from '../store/cvData';
import { ThemeSelector, Theme } from '../components/ThemeSelector';
import { ExecutiveSummary } from '../components/ExecutiveSummary';
import { KeySkills } from '../components/KeySkills';
import { LegalTechProjects } from '../components/LegalTechProjects';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { KeyAchievements } from '../components/KeyAchievements';
import { JsonEditor } from '../components/JsonEditor';
import { PDFDownloadButton } from '../components/PDFDownloadButton';
import { getThemeStyles } from '../utils/themeStyles';
import { CVData } from '../types/cv';

export const HomePage: React.FC = () => {
  const [cvData, setCVData] = useState<CVData>(initialCVData);
  const [theme, setTheme] = useState<Theme>('modern');
  const [highlightInnovation, setHighlightInnovation] = useState(false);
  const styles = getThemeStyles(theme);

  return (
    <div className={`min-h-screen ${styles.background}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${styles.heading}`}>LegalTech CV Creator</h1>
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={highlightInnovation}
                onChange={(e) => setHighlightInnovation(e.target.checked)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span className="text-sm text-gray-700">Highlight Innovation</span>
            </label>
            <ThemeSelector currentTheme={theme} onThemeChange={setTheme} />
            <PDFDownloadButton
              data={cvData}
              theme={theme}
              highlightInnovation={highlightInnovation}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className={styles.section}>
              <ExecutiveSummary
                data={{
                  name: cvData.name,
                  title: cvData.title,
                  contact: cvData.contact,
                  summary: cvData.summary
                }}
                theme={theme}
              />
            </div>

            <div className={styles.section}>
              <ExperienceTimeline
                data={cvData.experience}
                theme={theme}
                highlightInnovation={highlightInnovation}
              />
            </div>

            <div className={styles.section}>
              <LegalTechProjects
                data={cvData.projects}
                theme={theme}
                highlightInnovation={highlightInnovation}
              />
            </div>

            <div className={styles.section}>
              <KeyAchievements
                data={cvData.keyAchievements}
                theme={theme}
              />
            </div>

            <div className={styles.section}>
              <KeySkills
                data={cvData.skills}
                theme={theme}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <JsonEditor
              data={cvData}
              onUpdate={setCVData}
              onReset={() => setCVData(initialCVData)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 