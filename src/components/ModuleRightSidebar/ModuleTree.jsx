import React from "react";
import { Button, Col, Row, Space, Tree } from "antd";
import { treeData } from "./mockTreeData";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

const ModuleTree = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  return (
    <>
      <StyledTree
        //   checkable
        // defaultSelectedKeys={["0-0-0", "0-0-1"]}
        // defaultCheckedKeys={["0-0-0", "0-0-1"]}
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
        showIcon={false}
        blockNode
        switcherIcon={<DownOutlined />}
      />
      <BottomButtons>
        <Col span={12}>
          <p>Previous Module</p>
        </Col>
        <Col span={12}>
          <p>Next Module</p>
        </Col>
      </BottomButtons>
    </>
  );
};
export default ModuleTree;

const StyledTree = styled(Tree.DirectoryTree)`
  .ant-tree-indent {
    display: none;
  }
  .ant-tree-switcher-noop {
    display: none;
  }
  .level-1 {
    /* color: var(--Color-Brand-Brand-Blue, #0859de); */
    font-family: "DM Sans";
    font-size: 16px;
    font-weight: 500;
    padding: 14px 16px;
    border-top: 1px solid #d6d6d6;
    border-bottom: 1px solid #d6d6d6;
  }
`;

const BottomButtons = styled(Row)`
  p {
    text-align: center;
    padding: 16px 0;
    color: #294169;
    font-family: "DM Sans";
    font-size: 16px;
    text-transform: capitalize;
    cursor: pointer;
    &:hover {
      color: white;
      background: #294169;
    }
    &:active {
      color: white;
      background: #375488;
    }
  }
`;
