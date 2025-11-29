import { useState } from "react";
import "@ant-design/v5-patch-for-react-19";
import "./App.scss";
import SideBar from "./components/utils/SideBar";
import TopBar from "./components/utils/TopBar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "antd";
import { customAxios } from "./external/customAxios";
import { Search } from "./pages/Search";

const { Content, Header, Sider } = Layout;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout className="layout">
      <Sider className="sider">
        <SideBar />
      </Sider>

      <Layout className="layout">
        {/* <Header>
          <TopBar />
        </Header> */}
        <Content>
          {/*Routes*/}
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
