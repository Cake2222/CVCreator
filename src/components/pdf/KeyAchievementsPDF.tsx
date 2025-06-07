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
  achievement: {
    marginBottom: 8,
    paddingLeft: 8,
    borderLeftWidth: 1,
  },
  achievementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 9,
    marginTop: 1,
  },
  description: {
    fontSize: 9,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  impact: {
    fontSize: 9,
    marginTop: 2,
    lineHeight: 1.3,
  },
  modern: {
    heading: {
      color: '#1a202c',
    },
    achievement: {
      borderLeftColor: '#e2e8f0',
    },
    achievementTitle: {
      color: '#2d3748',
    },
    date: {
      color: '#718096',
    },
    description: {
      color: '#4a5568',
    },
    impact: {
      color: '#4a5568',
    },
  },
  infographic: {
    heading: {
      color: '#1e3a8a',
    },
    achievement: {
      borderLeftColor: '#c7d2fe',
    },
    achievementTitle: {
      color: '#312e81',
    },
    date: {
      color: '#4338ca',
    },
    description: {
      color: '#4338ca',
    },
    impact: {
      color: '#4338ca',
    },
  },
  legal: {
    heading: {
      color: '#1a202c',
    },
    achievement: {
      borderLeftColor: '#e2e8f0',
    },
    achievementTitle: {
      color: '#2d3748',
    },
    date: {
      color: '#718096',
    },
    description: {
      color: '#4a5568',
    },
    impact: {
      color: '#4a5568',
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
      {data.map((achievement, index) => (
        <View
          key={index}
          style={[styles.achievement, themeStyles.achievement]}
        >
          <View style={styles.achievementHeader}>
            <Text style={[styles.achievementTitle, themeStyles.achievementTitle]}>
              {achievement.title}
            </Text>
            <Text style={[styles.date, themeStyles.date]}>
              {achievement.date}
            </Text>
          </View>
          
          <Text style={[styles.description, themeStyles.description]}>
            {achievement.description}
          </Text>
          
          <Text style={[styles.impact, themeStyles.impact]}>
            Impact: {achievement.impact}
          </Text>
        </View>
      ))}
    </View>
  );
}; 