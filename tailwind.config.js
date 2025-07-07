/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // required for class-based dark mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // semantic colors (preferred)
        primary: {
          light: '#3B82F6',   // blue-500
          dark: '#2563EB',    // blue-600
        },
        background: {
          light: '#ffffff',
          dark: '#0f172a',    // slate-900
        },
        text: {
          light: '#1e293b',   // slate-800
          dark: '#f8fafc',    // slate-50
        },
        accent: {
          light: '#facc15',   // yellow-400
          dark: '#eab308',    // yellow-500
        },
      },
    },
  },
  plugins: [],
};
