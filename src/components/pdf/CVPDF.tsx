import React from 'react';
import { Document, Page, StyleSheet, View, Text, Link } from '@react-pdf/renderer';
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
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    fontSize: 8,
    color: '#718096',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
  },
  footerLink: {
    color: '#2b6cb0',
    textDecoration: 'none',
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

        {/* Footer */}
        <View style={styles.footer}>
          <Text>
            This CV was built using my own custom code, made using prompts with Cursor AI. {' '}
            <Link src="https://github.com/Cake2222/CVCreator" style={styles.footerLink}>
              Click here{' '}
            </Link>
            to view the source code on GitHub.
          </Text>
        </View>
      </Page>
    </Document>
  );
}; 