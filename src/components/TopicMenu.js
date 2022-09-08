import React from "react";
import { Menu } from "antd";

const TopicMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = [];
  topics.forEach(({ key, label }) =>
    styledTopics.push(
      <Menu.Item key={key} onClick={changeSelectedKey}>
        {label}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};
export default TopicMenu;
