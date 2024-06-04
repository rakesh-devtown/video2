import { Tree } from "antd";
import { treeData } from "./mockTreeData";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

const BookmarkTree = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };
  return (
    <StyledTree
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
      showIcon={false}
      blockNode
      switcherIcon={<DownOutlined />}
    />
  );
};
export default BookmarkTree;

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
