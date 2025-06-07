import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import { CVData } from '../types/cv';

// Import Ace editor themes and modes
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';

interface JsonEditorProps {
  data: CVData;
  onUpdate: (data: CVData) => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ data, onUpdate }) => {
  const [jsonString, setJsonString] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  useEffect(() => {
    setJsonString(JSON.stringify(data, null, 2));
  }, [data]);

  const saveToFile = async (jsonData: string) => {
    try {
      setSaveStatus('saving');
      const response = await fetch('http://localhost:3001/api/save-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cvData: JSON.parse(jsonData) }),
      });

      if (!response.ok) {
        throw new Error('Failed to save changes');
      }

      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (err) {
      console.error('Error saving CV data:', err);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  const handleChange = (newValue: string) => {
    setJsonString(newValue);
    try {
      const parsedData = JSON.parse(newValue);
      onUpdate(parsedData);
      setError(null);
      // Debounce the save operation
      const timeoutId = setTimeout(() => saveToFile(newValue), 1000);
      return () => clearTimeout(timeoutId);
    } catch (err) {
      setError('Invalid JSON');
    }
  };

  return (
    <div className="relative">
      <div className="mb-2 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">JSON Editor</h2>
        <div className="text-sm">
          {saveStatus === 'saving' && <span className="text-blue-600">Saving...</span>}
          {saveStatus === 'success' && <span className="text-green-600">Saved!</span>}
          {saveStatus === 'error' && <span className="text-red-600">Save failed</span>}
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <AceEditor
          mode="json"
          theme="github"
          value={jsonString}
          onChange={handleChange}
          name="json-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            showPrintMargin: false,
            showGutter: true,
            highlightActiveLine: true,
            fontSize: 14,
          }}
          width="100%"
          height="600px"
        />
      </div>
      {error && (
        <div className="mt-2 text-sm text-red-600">
          {error}
        </div>
      )}
    </div>
  );
}; 