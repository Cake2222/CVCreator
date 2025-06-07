import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { SkillsData } from '../../types/cv';

const styles = StyleSheet.create({
  section: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  skillsContainer: {
    marginTop: 2,
  },
  skillCategory: {
    marginBottom: 4,
  },
  skillCategoryTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#4a5568',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillItem: {
    width: '49%',
    marginBottom: 2,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillName: {
    fontSize: 8,
    color: '#2d3748',
    flex: 1,
  },
  skillLevel: {
    flexDirection: 'row',
    marginLeft: 2,
  },
  skillDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#e2e8f0',
    marginLeft: 1,
  },
  skillDotFilled: {
    backgroundColor: '#4caf50',
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  categoryColumn: {
    flex: 1,
    minWidth: '48%',
  },
});

interface KeySkillsPDFProps {
  data: SkillsData;
}

export const KeySkillsPDF: React.FC<KeySkillsPDFProps> = ({ data }) => {
  const renderSkills = () => {
    const categories = Object.entries(data);
    const halfLength = Math.ceil(categories.length / 2);
    
    return (
      <View style={styles.categoryRow}>
        <View style={styles.categoryColumn}>
          {categories.slice(0, halfLength).map(([category, skills]) => (
            <View key={category} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              <View style={styles.skillsGrid}>
                {Object.entries(skills).map(([skill, level]) => (
                  <View key={skill} style={styles.skillItem}>
                    <View style={styles.skillRow}>
                      <Text style={styles.skillName}>{skill}</Text>
                      <View style={styles.skillLevel}>
                        {[...Array(5)].map((_, i) => (
                          <View
                            key={i}
                            style={[
                              styles.skillDot,
                              i < (level as number) ? styles.skillDotFilled : {}
                            ]}
                          />
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.categoryColumn}>
          {categories.slice(halfLength).map(([category, skills]) => (
            <View key={category} style={styles.skillCategory}>
              <Text style={styles.skillCategoryTitle}>{category}</Text>
              <View style={styles.skillsGrid}>
                {Object.entries(skills).map(([skill, level]) => (
                  <View key={skill} style={styles.skillItem}>
                    <View style={styles.skillRow}>
                      <Text style={styles.skillName}>{skill}</Text>
                      <View style={styles.skillLevel}>
                        {[...Array(5)].map((_, i) => (
                          <View
                            key={i}
                            style={[
                              styles.skillDot,
                              i < (level as number) ? styles.skillDotFilled : {}
                            ]}
                          />
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.section}>
      <Text style={styles.heading}>Key Skills</Text>
      <View style={styles.skillsContainer}>
        {renderSkills()}
      </View>
    </View>
  );
}; 