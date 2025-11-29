import React, { useState } from "react";
import { SearchBar } from "../components/search/SearchBar";
import { DisplayContainer } from "../components/home/DisplayContainer";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("movie");
  return (
    <div className="search">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <DisplayContainer type={selectedType} searchQuery={searchQuery} />
    </div>
  );
};
