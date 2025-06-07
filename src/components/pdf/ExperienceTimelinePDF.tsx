import React from 'react';
import { View, Text, StyleSheet, Svg, Path } from '@react-pdf/renderer';
import { ExperienceData } from '../../types/cv';
import { Theme } from '../ThemeSelector';

const styles = StyleSheet.create({
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  experience: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeftWidth: 1,
  },
  dateRange: {
    fontSize: 9,
    marginBottom: 2,
  },
  roleContainer: {
    marginBottom: 4,
  },
  role: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 10,
    marginTop: 1,
  },
  legalTechBadge: {
    fontSize: 8,
    padding: '1 4',
    borderRadius: 4,
    marginLeft: 4,
  },
  achievements: {
    marginTop: 4,
  },
  achievement: {
    fontSize: 9,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  innovationIcon: {
    width: 10,
    height: 10,
    marginRight: 2,
  },
  modern: {
    heading: {
      color: '#1a202c',
    },
    experience: {
      borderLeftColor: '#e2e8f0',
    },
    dateRange: {
      color: '#718096',
    },
    role: {
      color: '#2d3748',
    },
    company: {
      color: '#4a5568',
    },
    legalTechBadge: {
      backgroundColor: '#ebf8ff',
      color: '#2b6cb0',
    },
    achievement: {
      color: '#4a5568',
    },
    highlight: {
      borderLeftColor: '#90cdf4',
    },
    highlightText: {
      color: '#2b6cb0',
    },
    innovationIcon: {
      color: '#2b6cb0',
    },
  },
  infographic: {
    heading: {
      color: '#1e3a8a',
    },
    experience: {
      borderLeftColor: '#c7d2fe',
    },
    dateRange: {
      color: '#6366f1',
    },
    role: {
      color: '#312e81',
    },
    company: {
      color: '#4338ca',
    },
    legalTechBadge: {
      backgroundColor: '#e0e7ff',
      color: '#4338ca',
    },
    achievement: {
      color: '#4338ca',
    },
    highlight: {
      borderLeftColor: '#818cf8',
    },
    highlightText: {
      color: '#4338ca',
    },
    innovationIcon: {
      color: '#4338ca',
    },
  },
  legal: {
    heading: {
      color: '#1a202c',
    },
    experience: {
      borderLeftColor: '#e2e8f0',
    },
    dateRange: {
      color: '#718096',
    },
    role: {
      color: '#2d3748',
    },
    company: {
      color: '#4a5568',
    },
    legalTechBadge: {
      backgroundColor: '#f7fafc',
      color: '#4a5568',
    },
    achievement: {
      color: '#4a5568',
    },
    highlight: {
      borderLeftColor: '#cbd5e0',
    },
    highlightText: {
      color: '#4a5568',
    },
    innovationIcon: {
      color: '#4a5568',
    },
  },
});

interface ExperienceTimelinePDFProps {
  data: ExperienceData[];
  theme: Theme;
  highlightInnovation: boolean;
}

export const ExperienceTimelinePDF: React.FC<ExperienceTimelinePDFProps> = ({
  data,
  theme,
  highlightInnovation,
}) => {
  const themeStyles = styles[theme];

  const InnovationIcon = () => (
    <Svg viewBox="0 0 24 24" style={[styles.innovationIcon, themeStyles.innovationIcon]}>
      <Path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </Svg>
  );

  return (
    <View style={styles.section}>
      <Text style={[styles.heading, themeStyles.heading]}>Experience</Text>
      {data.map((exp, index) => (
        <View
          key={index}
          style={[
            styles.experience,
            themeStyles.experience,
            highlightInnovation ? themeStyles.highlight : {},
          ]}
        >
          <Text style={[styles.dateRange, themeStyles.dateRange]}>
            {exp.period}
          </Text>
          
          <View style={styles.roleContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {highlightInnovation && <InnovationIcon />}
              <Text style={[styles.role, themeStyles.role]}>
                {exp.title}
              </Text>
              {highlightInnovation && (
                <Text style={[styles.legalTechBadge, themeStyles.legalTechBadge]}>
                  Legal Tech
                </Text>
              )}
            </View>
            <Text style={[styles.company, themeStyles.company]}>{exp.company}</Text>
          </View>
          
          <View style={styles.achievements}>
            {exp.achievements.map((achievement, aIndex) => (
              <Text
                key={aIndex}
                style={[
                  styles.achievement,
                  themeStyles.achievement,
                  highlightInnovation ? themeStyles.highlightText : {},
                ]}
              >
                • {achievement}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}; 