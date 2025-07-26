import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useRef, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import SearchContext from "../context/SearchContext";

const Search = ({ mobile }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleClear = () => {
    setSearchTerm("");
    setIsSearchOpen(false);
  };

  const handleInputBlur = (e) => {
    // Delay so the clear button can be clicked before blur closes input
    setTimeout(() => {
      if (!document.activeElement.closest(".search-wrapper")) {
        setIsSearchOpen(false);
      }
    }, 100);
  };

  return (
    <div
      className={`relative items-center w-6 hidden sm580:flex ${
        mobile ? "inline h-6" : ""
      } search-wrapper`}
    >
      {isSearchOpen ? (
        <div className="flex items-center relative">
          <input
            ref={inputRef}
            type="text"
            autoFocus
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onBlur={handleInputBlur}
            className={`absolute right-0 top-1/2 -translate-y-1/2 min-w-[10rem] max-w-[12rem] w-full px-3 py-1 rounded-md border border-white bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 ease-in-out ${
              mobile ? "left-0 top-1.5 right-auto" : ""
            }`}
          />
          {searchTerm && (
            <button
              onClick={handleClear}
              className="hover:cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-red-500"
            >
              <AiOutlineClose size={16} />
            </button>
          )}
        </div>
      ) : (
        <button onClick={() => setIsSearchOpen(true)}>
          <div className="flex gap-3">
            <CiSearch
              className="hover:cursor-pointer hover:text-gray-200 transition text-amber-600"
              size={24}
            />
            {mobile && <p>Search...</p>}
          </div>
        </button>
      )}
    </div>
  );
};

export default Search;
