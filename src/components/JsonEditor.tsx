import React, { useState } from 'react';
import AceEditor from 'react-ace';
import { CVData } from '../types/cv';

// Import Ace editor themes and modes
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';

interface JsonEditorProps {
  data: CVData;
  onUpdate: (data: CVData) => void;
  onReset: () => void;
}

export const JsonEditor: React.FC<JsonEditorProps> = ({ data, onUpdate, onReset }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [jsonString, setJsonString] = useState(() => JSON.stringify(data, null, 2));

  const handleChange = (value: string) => {
    setJsonString(value);
    try {
      const parsedData = JSON.parse(value);
      onUpdate(parsedData);
    } catch (error) {
      // Invalid JSON, don't update
    }
  };

  const handleReset = () => {
    const defaultData = JSON.stringify(data, null, 2);
    setJsonString(defaultData);
    onReset();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">JSON Editor</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="px-3 py-1 text-sm rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1 text-sm rounded-md bg-blue-100 hover:bg-blue-200 text-blue-700"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="h-[800px]">
        <AceEditor
          mode="json"
          theme={isDarkMode ? 'monokai' : 'github'}
          value={jsonString}
          onChange={handleChange}
          name="json-editor"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            showPrintMargin: false,
            showGutter: true,
            highlightActiveLine: true,
            fontSize: 16,
            tabSize: 2,
            useSoftTabs: true,
            showLineNumbers: true,
            wrap: true,
          }}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}; 