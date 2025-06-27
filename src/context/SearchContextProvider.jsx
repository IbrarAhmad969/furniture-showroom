import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
