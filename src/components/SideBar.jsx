import React, { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, Switch, Layout } from "antd";

const items = [
  {
    key: "home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    key: "search",
    label: "Search",
    icon: <SearchOutlined />,
  },
  // {
  //   key: "sub4",
  //   label: "Navigation Three",
  //   icon: <SettingOutlined />,
  //   children: [
  //     { key: "9", label: "Option 9" },
  //     { key: "10", label: "Option 10" },
  //     { key: "11", label: "Option 11" },
  //     { key: "12", label: "Option 12" },
  //   ],
  // },
];

const SideBar = () => {
  const [current, setCurrent] = useState("home");
  const [collapsed, setCollapsed] = useState(false);
  const onClick = ({ key }) => {
    setCurrent(key);
  };
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <Menu
      theme={"dark"}
      className="side-bar-menu"
      onClick={onClick}
      // style={{ width: 256 }}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};

export default SideBar;
