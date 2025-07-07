/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ← enables toggling by class, not media query
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
