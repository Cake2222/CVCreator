import React from 'react';
import { View, Text, StyleSheet, Link, Svg, Path } from '@react-pdf/renderer';
import { ExecutiveSummaryData } from '../../types/cv';
import { Theme } from '../ThemeSelector';

const styles = StyleSheet.create({
  section: {
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    marginBottom: 8,
  },
  contact: {
    fontSize: 9,
    marginBottom: 8,
    lineHeight: 1.3,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  summary: {
    fontSize: 10,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  modern: {
    name: {
      color: '#1a202c',
    },
    title: {
      color: '#4a5568',
    },
    contact: {
      color: '#718096',
    },
    summary: {
      color: '#4a5568',
    },
    icon: {
      color: '#4a5568',
    },
  },
  infographic: {
    name: {
      color: '#1e3a8a',
    },
    title: {
      color: '#4c51bf',
    },
    contact: {
      color: '#6366f1',
    },
    summary: {
      color: '#4c51bf',
    },
    icon: {
      color: '#6366f1',
    },
  },
  legal: {
    name: {
      color: '#1a202c',
    },
    title: {
      color: '#4a5568',
    },
    contact: {
      color: '#718096',
    },
    summary: {
      color: '#4a5568',
    },
    icon: {
      color: '#4a5568',
    },
  },
});

interface ExecutiveSummaryPDFProps {
  data: ExecutiveSummaryData;
  theme: Theme;
}

export const ExecutiveSummaryPDF: React.FC<ExecutiveSummaryPDFProps> = ({ data, theme }) => {
  const themeStyles = styles[theme];

  const EmailIcon = () => (
    <Svg viewBox="0 0 24 24" style={[styles.icon, themeStyles.icon]}>
      <Path
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
        fill="currentColor"
      />
    </Svg>
  );

  const PhoneIcon = () => (
    <Svg viewBox="0 0 24 24" style={[styles.icon, themeStyles.icon]}>
      <Path
        d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.9-4-8.9-9-8.9v2c3.9 0 7 3.1 7 6.9z"
        fill="currentColor"
      />
    </Svg>
  );

  const LocationIcon = () => (
    <Svg viewBox="0 0 24 24" style={[styles.icon, themeStyles.icon]}>
      <Path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        fill="currentColor"
      />
    </Svg>
  );

  const LinkedInIcon = () => (
    <Svg viewBox="0 0 24 24" style={[styles.icon, themeStyles.icon]}>
      <Path
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
        fill="currentColor"
      />
    </Svg>
  );

  return (
    <View style={styles.section}>
      <Text style={[styles.name, themeStyles.name]}>{data.name}</Text>
      <Text style={[styles.title, themeStyles.title]}>{data.title}</Text>
      <View style={styles.contact}>
        {data.contact.email && (
          <View style={styles.contactItem}>
            <EmailIcon />
            <Link src={`mailto:${data.contact.email}`} style={{ color: '#2b6cb0' }}>
              {data.contact.email}
            </Link>
          </View>
        )}
        {data.contact.phone && (
          <View style={styles.contactItem}>
            <PhoneIcon />
            <Text>{data.contact.phone}</Text>
          </View>
        )}
        {data.contact.linkedin && (
          <View style={styles.contactItem}>
            <LinkedInIcon />
            <Link src={data.contact.linkedin} style={{ color: '#2b6cb0' }}>
              {data.name} LinkedIn
            </Link>
          </View>
        )}
        {data.contact.location && (
          <View style={styles.contactItem}>
            <LocationIcon />
            <Text>{data.contact.location}</Text>
          </View>
        )}
      </View>
      <Text style={[styles.summary, themeStyles.summary]}>
        {data.summary}
      </Text>
    </View>
  );
}; 