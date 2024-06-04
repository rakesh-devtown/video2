import {
  CheckOutlined,
  LockOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
import { StyledTopicNode } from "../../styles/moduleRightSidebar.styles";

const TopicNode = ({ topic, lock, time, checked }) => {
  return (
    <StyledTopicNode>
      <Space size={8}>
        <i>
          <PlayCircleOutlined />
        </i>
        <p>{topic}</p>
      </Space>
      <Space>
        {checked ? (
          <i>
            <CheckOutlined style={{ color: "#1E6DE8" }} />
          </i>
        ) : (
          <i>
            <FaPlay />
          </i>
        )}
      </Space>
    </StyledTopicNode>
  );
};

export default TopicNode;
