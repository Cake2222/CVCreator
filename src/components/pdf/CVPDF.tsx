import React from 'react';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../../types/cv';
import { Theme } from '../ThemeSelector';
import { ExecutiveSummaryPDF } from './ExecutiveSummaryPDF';
import { KeySkillsPDF } from './KeySkillsPDF';
import { LegalTechProjectsPDF } from './LegalTechProjectsPDF';
import { ExperienceTimelinePDF } from './ExperienceTimelinePDF';
import { KeyAchievementsPDF } from './KeyAchievementsPDF';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff'
  },
  modern: {
    fontFamily: 'Helvetica',
  },
  infographic: {
    fontFamily: 'Helvetica',
  },
  legal: {
    fontFamily: 'Times-Roman',
  },
});

interface CVPDFProps {
  data: CVData;
  theme: Theme;
  highlightInnovation: boolean;
}

export const CVPDF: React.FC<CVPDFProps> = ({ data, theme, highlightInnovation }) => {
  const themeStyle = styles[theme];

  return (
    <Document>
      <Page size="A4" style={[styles.page, themeStyle]}>
        {/* Executive Summary */}
        <ExecutiveSummaryPDF 
          data={{
            name: data.name,
            title: data.title,
            contact: data.contact,
            summary: data.summary
          }} 
          theme={theme} 
        />

        {/* Experience */}
        <ExperienceTimelinePDF 
          data={data.experience}
          theme={theme}
          highlightInnovation={highlightInnovation}
        />

        {/* Legal Tech Projects */}
        <LegalTechProjectsPDF 
          data={data.projects} 
          theme={theme}
          highlightInnovation={highlightInnovation}
        />

        {/* Key Achievements */}
        <KeyAchievementsPDF 
          data={data.keyAchievements} 
          theme={theme} 
        />

        {/* Key Skills */}
        <KeySkillsPDF 
          data={data.skills} 
        />
      </Page>
    </Document>
  );
}; 