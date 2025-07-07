import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        CryptoTrackr
      </h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
