const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const CV_DATA_PATH = path.join(__dirname, 'src', 'store', 'cvData.ts');

app.post('/api/save-cv', async (req, res) => {
  try {
    const { cvData } = req.body;
    const fileContent = `import { CVData } from '../types/cv';

export const initialCVData: CVData = ${JSON.stringify(cvData, null, 2)};

// This will be expanded later to include state management
export const cvData = initialCVData;`;

    await fs.writeFile(CV_DATA_PATH, fileContent, 'utf8');
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving CV data:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 