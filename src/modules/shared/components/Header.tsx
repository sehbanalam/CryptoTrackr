import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-background-light dark:bg-background-dark shadow">
      <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
        CryptoTrackr
      </h1>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 border rounded bg-accent-light dark:bg-accent-dark text-text-light dark:text-text-dark"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;