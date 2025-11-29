import { SearchOutlined } from "@ant-design/icons";
import { Input, Select } from "antd";
import React, { useState } from "react";

const menuItems = [
  { value: "movie", label: <span>Movies</span> },
  { value: "tv", label: <span>TV shows</span> },
];
const filterConfig = [
  {
    name: "with_genres",
    label: "Genre",
    options: [],
  },
  {
    name: "year",
    label: "Year",
    options: [],
  },
  {
    name: "sort_by",
    label: "Sort By",
    options: [
      {
        name: "Most Popular",
        value: "popularity.desc",
      },
      {
        name: "Latest Release",
        value: "primary_release_date.desc",
      },
      {
        name: "Oldest Release ",
        value: "primary_release_date.asc",
      },
      {
        name: "Title Asc",
        value: "title.desc",
      },
      {
        name: "Title Desc",
        value: "title.asc",
      },
      {
        name: "High Rated",
        value: "vote_average.desc",
      },
      {
        name: "Low Rated",
        value: "vote_average.asc",
      },
    ],
  },
  {
    name: "with_origin_country",
    label: "Country",
    options: [],
  },
];
export const SearchBar = ({
  selectedType,
  setSelectedType,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="search-bar">
      <Input
        className="search-input"
        placeholder="What do you want to watch?..."
        prefix={<SearchOutlined />}
        // style={{ width: "70%" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Select
        className="select-input"
        options={menuItems}
        value={selectedType}
        // style={{ width: "100%" }}
        onChange={(value) => setSelectedType(value)}
        classNames={{ popup: { root: "search-select-dropdown" } }}
        popupMatchSelectWidth={false}
      />
    </div>
  );
};
