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
    minHeight: 28,
  },
  tableHeader: {
    backgroundColor: '#f8fafc',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 4,
    fontSize: 9,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
  },
  projectCell: {
    flex: 2,
  },
  roleCell: {
    flex: 0.8,
  },
  achievementsCell: {
    flex: 3,
    borderRightWidth: 0,
  },
  projectTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  projectName: {
    fontSize: 9,
    fontWeight: 'bold',
    flex: 1,
  },
  role: {
    fontSize: 8,
  },
  achievement: {
    fontSize: 8,
    marginBottom: 1,
    lineHeight: 1.2,
  },
  innovationIcon: {
    width: 8,
    height: 8,
    marginRight: 3,
    flexShrink: 0,
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
      color: '#2d3748',
    },
    highlight: {
      backgroundColor: '#f8fafc',
    },
    innovationIcon: {
      color: '#2d3748',
    },
  },
  infographic: {
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
      color: '#2d3748',
    },
    highlight: {
      backgroundColor: '#f8fafc',
    },
    innovationIcon: {
      color: '#2d3748',
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
      color: '#2d3748',
    },
    highlight: {
      backgroundColor: '#f7fafc',
    },
    innovationIcon: {
      color: '#2d3748',
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
                <Text style={[styles.projectName, themeStyles.tableCell]}>{project.name}</Text>
              </View>
            </View>
            <Text style={[styles.tableCell, styles.roleCell, styles.role, themeStyles.tableCell]}>
              {project.role}
            </Text>
            <View style={[styles.tableCell, styles.achievementsCell]}>
              {project.achievements.map((achievement, aIndex) => (
                <Text key={aIndex} style={[styles.achievement, themeStyles.tableCell]}>
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