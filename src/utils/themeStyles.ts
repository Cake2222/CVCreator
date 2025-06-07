import { Theme } from '../components/ThemeSelector';

export const getThemeStyles = (theme: Theme) => {
  const baseStyles = {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'mb-12',
    heading: 'text-xl font-semibold mb-6',
    text: 'text-gray-700',
  };

  const themeStyles = {
    modern: {
      container: baseStyles.container,
      section: `${baseStyles.section} font-sans`,
      heading: `${baseStyles.heading} text-gray-900 font-sans`,
      text: `${baseStyles.text} font-sans`,
      accent: 'text-blue-600',
      background: 'bg-white',
      border: 'border-gray-200',
    },
    infographic: {
      container: baseStyles.container,
      section: `${baseStyles.section} font-sans`,
      heading: `${baseStyles.heading} text-indigo-900 font-sans`,
      text: `${baseStyles.text} font-sans`,
      accent: 'text-indigo-600',
      background: 'bg-gray-50',
      border: 'border-indigo-200',
    },
    legal: {
      container: baseStyles.container,
      section: `${baseStyles.section} font-serif`,
      heading: `${baseStyles.heading} text-gray-900 font-serif`,
      text: `${baseStyles.text} font-serif`,
      accent: 'text-gray-800',
      background: 'bg-white',
      border: 'border-gray-300',
    },
  };

  return themeStyles[theme];
}; 