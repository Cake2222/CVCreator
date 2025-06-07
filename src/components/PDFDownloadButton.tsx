import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVPDF } from './pdf/CVPDF';
import { CVData } from '../types/cv';
import { Theme } from './ThemeSelector';

interface PDFDownloadButtonProps {
  data: CVData;
  theme: Theme;
  highlightInnovation: boolean;
}

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  data,
  theme,
  highlightInnovation
}) => {
  // Format the date as YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  // Create a filename using the person's name and date
  const filename = `${data.name.replace(/\s+/g, '_')}_CV_${today}.pdf`;

  return (
    <PDFDownloadLink
      document={
        <CVPDF
          data={data}
          theme={theme}
          highlightInnovation={highlightInnovation}
        />
      }
      fileName={filename}
      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg
                 hover:bg-blue-700 transition-colors duration-200"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Generating PDF...' : 'Download PDF'
      }
    </PDFDownloadLink>
  );
}; 