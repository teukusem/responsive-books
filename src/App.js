import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

import { TopicMenu, NavBar, SideBar } from "./components";

function App() {
  const topics = [
    {
      key: "menu_1",
      label: "Library Books",
    },
  ];
  const [selectedKey, setSelectedKey] = useState(topics[0].key);

  const changeSelectedKey = (event) => {
    const key = event.key;
    setSelectedKey(key);
  };
  
  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  const withLayout = (children) => {
    return (
      <div className="App">
        <NavBar menu={Menu} />
        <Layout>
          <SideBar menu={Menu} />
          <Layout.Content className="content">{children}</Layout.Content>
        </Layout>
      </div>
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={withLayout(<Home />)} />
        <Route path="/detail" element={withLayout(<Detail />)} />
      </Routes>
    </div>
  );
}

export default App;
