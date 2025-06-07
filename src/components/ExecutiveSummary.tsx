import React from 'react';
import { ExecutiveSummaryData } from '../types/cv';
import { Theme } from './ThemeSelector';
import { getThemeStyles } from '../utils/themeStyles';

interface ExecutiveSummaryProps {
  data: ExecutiveSummaryData;
  theme: Theme;
}

// Simple SVG icons
const EnvelopeIcon = () => (
  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.3 1.2a2 2 0 01-.45 1.95l-1.27 1.27a16.06 16.06 0 006.6 6.6l1.27-1.27a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg>
);
const LinkedInIcon = () => (
  <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
);
const MapPinIcon = () => (
  <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"/></svg>
);

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ data, theme }) => {
  const themeStyles = getThemeStyles(theme);
  return (
    <section className={themeStyles.section}>
      <div className="max-w-3xl">
        {/* Name and Title */}
        <div className="mb-6">
          <h1 className={`text-3xl font-semibold ${themeStyles.heading}`}>
            {data.name}
          </h1>
          <h2 className={themeStyles.text}>
            {data.title}
          </h2>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-4 text-sm items-center">
            {data.contact.email && (
              <a
                href={`mailto:${data.contact.email}`}
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <EnvelopeIcon />
                {data.contact.email}
              </a>
            )}
            {data.contact.phone && (
              <span className="text-gray-700 flex items-center gap-1">
                <PhoneIcon />
                {data.contact.phone}
              </span>
            )}
            {data.contact.linkedin && (
              <a
                href={data.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center gap-1"
              >
                <LinkedInIcon />
                {data.name} LinkedIn
              </a>
            )}
            {data.contact.location && (
              <span className="text-gray-700 flex items-center gap-1">
                <MapPinIcon />
                {data.contact.location}
              </span>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-3">
          <p className={themeStyles.text}>
            {data.summary}
          </p>
        </div>
      </div>
    </section>
  );
}; 