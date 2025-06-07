import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { KeyAchievementData } from '../../types/cv';
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
  achievementCell: {
    flex: 2,
  },
  dateCell: {
    flex: 0.8,
  },
  descriptionCell: {
    flex: 3,
    borderRightWidth: 0,
  },
  achievementTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  date: {
    fontSize: 8,
  },
  description: {
    fontSize: 8,
    marginBottom: 1,
    lineHeight: 1.2,
  },
  impact: {
    fontSize: 8,
    marginTop: 1,
    lineHeight: 1.2,
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
  },
});

interface KeyAchievementsPDFProps {
  data: KeyAchievementData[];
  theme: Theme;
}

export const KeyAchievementsPDF: React.FC<KeyAchievementsPDFProps> = ({
  data,
  theme,
}) => {
  const themeStyles = styles[theme];

  return (
    <View style={styles.section}>
      <Text style={[styles.heading, themeStyles.heading]}>Key Achievements</Text>
      <View style={[styles.table, themeStyles.table]}>
        {/* Table Header */}
        <View style={[styles.tableRow, styles.tableHeader, themeStyles.tableHeader]}>
          <Text style={[styles.tableCell, styles.achievementCell]}>Achievement</Text>
          <Text style={[styles.tableCell, styles.dateCell]}>Date</Text>
          <Text style={[styles.tableCell, styles.descriptionCell]}>Description & Impact</Text>
        </View>

        {/* Table Rows */}
        {data.map((achievement, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={[styles.tableCell, styles.achievementCell]}>
              <Text style={styles.achievementTitle}>{achievement.title}</Text>
            </View>
            <Text style={[styles.tableCell, styles.dateCell, styles.date]}>
              {achievement.date}
            </Text>
            <View style={[styles.tableCell, styles.descriptionCell]}>
              <Text style={styles.description}>{achievement.description}</Text>
              <Text style={styles.impact}>Impact: {achievement.impact}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}; 