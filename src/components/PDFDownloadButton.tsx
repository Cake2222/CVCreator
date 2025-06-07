import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVData } from '../types/cv';
import { Theme } from './ThemeSelector';
import { CVPDF } from './pdf/CVPDF';

interface PDFDownloadButtonProps {
  data: CVData;
  theme: Theme;
  highlightInnovation: boolean;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  data,
  theme,
  highlightInnovation,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleError = () => {
    setError('Failed to generate PDF. Please try again.');
  };

  return (
    <div>
      {error ? (
        <div className="px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm">
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-2 text-red-700 hover:text-red-800"
          >
            Try Again
          </button>
        </div>
      ) : (
        <PDFDownloadLink
          document={
            <CVPDF
              data={data}
              theme={theme}
              highlightInnovation={highlightInnovation}
            />
          }
          fileName={`${data.name.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg
                     hover:bg-blue-700 transition-colors duration-200 text-sm font-medium
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {({ loading, error }) => {
            if (error) {
              handleError();
              return 'Error';
            }
            return loading ? 'Generating PDF...' : 'Download PDF';
          }}
        </PDFDownloadLink>
      )}
    </div>
  );
}; 