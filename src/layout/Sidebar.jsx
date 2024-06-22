import React from "react";
import Sider from "antd/es/layout/Sider";
import { theme, Menu } from "antd";

import { ImportOutlined, InboxOutlined, HomeOutlined } from "../assets/icons";

const items2 = [
  {
    key: `home`,
    label: `Home`,
    icon: <HomeOutlined />,
    url: "/",
    children: [
      {
        label: "Spread Sheet",
        key: 1,
        icon: <ImportOutlined />,
      },
    ],
  },
  {
    key: `commingSoon`,
    label: `Comming Soon...`,
    icon: <InboxOutlined />,
    url: "/comming-soon",
  },
];

function Sidebar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Sider
      width={250}
      style={{
        background: colorBgContainer,
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["home"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={items2}
      />
    </Sider>
  );
}

export default Sidebar;
