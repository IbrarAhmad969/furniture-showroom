import { CiSearch } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";

const Search = ({mobile}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className={`relative sm580:flex items-center w-6 hidden ${mobile && ('inline h-6')}`}>
      {isSearchOpen ? (
        <input
          ref={inputRef}
          type="text"
          autoFocus
          placeholder="Search..."
          className={`${mobile && (' left-0 top-1.5')} absolute right-0 top-1/2 -translate-y-1/2  w-48 px-3 py-1 rounded-md border border-white bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all`}
          onBlur={() => setIsSearchOpen(false)}
        />
      ) : (
        <button onClick={() => setIsSearchOpen(true)}>
          <div className="flex gap-3">
            <CiSearch
              className="cursor-pointer hover:text-gray-200 transition text-amber-600"
              size={24}
            />
            {mobile && (<p >Search...</p>)}
          </div>
        </button>
      )}
    </div>
  );
};

export default Search;
