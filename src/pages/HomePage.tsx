import React, { useState } from 'react';
import { Theme } from '../components/ThemeSelector';
import { ExecutiveSummary } from '../components/ExecutiveSummary';
import { KeySkills } from '../components/KeySkills';
import { LegalTechProjects } from '../components/LegalTechProjects';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { KeyAchievements } from '../components/KeyAchievements';
import { JsonEditor } from '../components/JsonEditor';
import { TopBar } from '../components/TopBar';
import { getThemeStyles } from '../utils/themeStyles';
import { CVData } from '../types/cv';
import { personalCVData } from '../store/personalCVData';

export const HomePage: React.FC = () => {
  const [cvData, setCVData] = useState<CVData>(personalCVData);
  const [theme, setTheme] = useState<Theme>('modern');
  const [highlightInnovation, setHighlightInnovation] = useState(false);
  const styles = getThemeStyles(theme);

  return (
    <div className={`min-h-screen ${styles.background}`}>
      <TopBar
        currentTheme={theme}
        onThemeChange={setTheme}
        highlightInnovation={highlightInnovation}
        onInnovationToggle={() => setHighlightInnovation(!highlightInnovation)}
        cvData={cvData}
      />
      
      <div className="container mx-auto px-4 pt-24 pb-8">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 