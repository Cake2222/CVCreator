# LegalTech CV Creator

A modern web application for creating professional CVs with a focus on legal technology experience and skills.

## Features

- Modern, responsive design
- Multiple themes (Modern, Infographic, Legal)
- PDF export functionality
- Real-time preview
- JSON-based data management
- Innovation highlighting
- GitHub backup integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd CVcreatorV2
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your GitHub token:
```
VITE_GITHUB_TOKEN=your_github_token_here
```

4. Start the development server:
```bash
npm run dev
```

## Usage

1. Open the application in your browser
2. Use the JSON editor to input your CV data
3. Choose your preferred theme
4. Toggle innovation highlighting as needed
5. Download your CV as a PDF
6. Use the GitHub backup feature to save your CV data

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- @react-pdf/renderer
- Vite

## License

This project is licensed under the MIT License.

## Project Structure

- `src/components/` - Reusable CV section components
- `src/pages/` - Page components
- `src/App.tsx` - Main application component
- `src/index.css` - Global styles and Tailwind imports

## Design Principles

- Minimalist and professional aesthetic
- Mobile-first responsive design
- Clear visual hierarchy
- Optimized for PDF export
- Semantic HTML structure 