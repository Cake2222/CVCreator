import React from 'react';
import { View, Text, StyleSheet, Svg, Path } from '@react-pdf/renderer';
import { ProjectData } from '../../types/cv';
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
  table: {
    display: 'flex',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    minHeight: 32,
  },
  tableHeader: {
    backgroundColor: '#f8fafc',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 6,
    fontSize: 9,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
  },
  projectCell: {
    flex: 2,
  },
  roleCell: {
    flex: 1,
  },
  achievementsCell: {
    flex: 3,
    borderRightWidth: 0,
  },
  projectTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 9,
  },
  achievement: {
    fontSize: 9,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  innovationIcon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  modern: {
    heading: {
      color: '#1a202c',
    },
    table: {
      borderColor: '#e2e8f0',
    },
    tableHeader: {
      backgroundColor: '#f8fafc',
      color: '#2d3748',
    },
    tableCell: {
      color: '#4a5568',
    },
    highlight: {
      backgroundColor: '#ebf8ff',
    },
    innovationIcon: {
      color: '#2b6cb0',
    },
  },
  infographic: {
    heading: {
      color: '#1e3a8a',
    },
    table: {
      borderColor: '#c7d2fe',
    },
    tableHeader: {
      backgroundColor: '#e0e7ff',
      color: '#312e81',
    },
    tableCell: {
      color: '#4338ca',
    },
    highlight: {
      backgroundColor: '#e0e7ff',
    },
    innovationIcon: {
      color: '#4338ca',
    },
  },
  legal: {
    heading: {
      color: '#1a202c',
    },
    table: {
      borderColor: '#e2e8f0',
    },
    tableHeader: {
      backgroundColor: '#f7fafc',
      color: '#2d3748',
    },
    tableCell: {
      color: '#4a5568',
    },
    highlight: {
      backgroundColor: '#f7fafc',
    },
    innovationIcon: {
      color: '#4a5568',
    },
  },
});

interface LegalTechProjectsPDFProps {
  data: ProjectData[];
  theme: Theme;
  highlightInnovation: boolean;
}

export const LegalTechProjectsPDF: React.FC<LegalTechProjectsPDFProps> = ({
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
      <Text style={[styles.heading, themeStyles.heading]}>Legal Tech Projects</Text>
      <View style={[styles.table, themeStyles.table]}>
        {/* Table Header */}
        <View style={[styles.tableRow, styles.tableHeader, themeStyles.tableHeader]}>
          <Text style={[styles.tableCell, styles.projectCell]}>Project</Text>
          <Text style={[styles.tableCell, styles.roleCell]}>Role</Text>
          <Text style={[styles.tableCell, styles.achievementsCell]}>Achievements</Text>
        </View>

        {/* Table Rows */}
        {data.map((project, index) => (
          <View 
            key={index} 
            style={[
              styles.tableRow,
              highlightInnovation ? themeStyles.highlight : {}
            ]}
          >
            <View style={[styles.tableCell, styles.projectCell]}>
              <View style={styles.projectTitle}>
                {highlightInnovation && <InnovationIcon />}
                <Text style={styles.projectName}>{project.name}</Text>
              </View>
            </View>
            <Text style={[styles.tableCell, styles.roleCell, styles.role]}>
              {project.role}
            </Text>
            <View style={[styles.tableCell, styles.achievementsCell]}>
              {project.achievements.map((achievement, aIndex) => (
                <Text key={aIndex} style={styles.achievement}>
                  • {achievement}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}; 