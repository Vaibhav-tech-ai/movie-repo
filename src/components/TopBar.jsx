import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="search-input-div">
        <Input
          className="search-input"
          prefix={<SearchOutlined />}
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default TopBar;
