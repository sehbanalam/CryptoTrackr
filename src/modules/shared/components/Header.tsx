import { FaMoon } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-5 bg-[#1A1A1D] border-b border-[#3B1C32] shadow-lg">
      <h1 className="text-3xl font-extrabold tracking-tight text-[#A64D79]">
        CryptoTrackr
      </h1>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3B1C32] hover:bg-[#6A1E55] text-[#A64D79] font-semibold transition-all duration-200 shadow border border-[#A64D79] cursor-not-allowed"
        disabled
      >
        <FaMoon className="text-[#A64D79]" />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;