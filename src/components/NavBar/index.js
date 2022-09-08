import React, { useState } from "react";
import { Drawer, Button, Avatar, Dropdown, Menu } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ menu }) => {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);

  const menuDrop = (
    <Menu
      items={[
        {
          key: "1",
          label: <span onClick={() => navigate('/')}>Logout</span>,
        },
      ]}
    />
  );

  return (
    <nav className="navbar">
      <Button
        className="menu ms-2"
        type="primary"
        ghost
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        width="200px"
        title="Topics"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}>
        {menu}
      </Drawer>
      <div className="d-flex align-items-center me-3 me-auto">
        <img
          src={
            "https://st2.depositphotos.com/36084824/42391/v/450/depositphotos_423916028-stock-illustration-blue-circle-logo-world-diabetes.jpg"
          }
          className="logo"
          alt="logo"
        />
        <span>ChromeBit Lab</span>
      </div>
      <div className="me-3">
        <Dropdown overlay={menuDrop} placement="bottom"  trigger={['click']}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </nav>
  );
};

export default NavBar;
