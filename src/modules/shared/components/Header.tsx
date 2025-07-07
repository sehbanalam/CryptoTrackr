import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-5 bg-[#1A1A1D] border-b border-[#3B1C32] shadow-lg relative">
      <h1 className="text-3xl font-extrabold tracking-tight text-[#A64D79]">
        CryptoTrackr
      </h1>
      {/* Desktop Search Bar */}
      <form className="hidden md:flex items-center bg-[#3B1C32] rounded-xl px-3 py-2 border border-[#A64D79] shadow transition-all duration-200 w-72">
        <FaSearch className="text-[#A64D79] mr-2  " />
        <input
          type="text"
          placeholder="Search coins..."
          className="bg-transparent outline-none text-[#A64D79] placeholder-[#A64D79] w-full"
        />
      </form>
      {/* Mobile Search Icon */}
      <button
        className="md:hidden flex items-center px-3 py-2 rounded-xl bg-[#3B1C32] hover:bg-[#6A1E55] text-[#A64D79] border border-[#A64D79] shadow transition-all duration-200"
        onClick={() => setShowMobileSearch((prev) => !prev)}
        aria-label="Open search"
        type="button"
      >
        <FaSearch />
      </button>
      {/* Mobile Search Input */}
      {showMobileSearch && (
        <form className="absolute top-full left-0 w-full px-8 py-2 bg-[#1A1A1D] border-b border-[#3B1C32] md:hidden flex items-center z-10">
          <FaSearch className="text-[#A64D79] mr-2" />
          <input
            type="text"
            placeholder="Search coins..."
            className="bg-transparent outline-none text-[#A64D79] placeholder-[#A64D79] w-full"
            autoFocus
          />
        </form>
      )}
    </header>
  );
};

export default Header;