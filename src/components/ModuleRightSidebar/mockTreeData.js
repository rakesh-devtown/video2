import { icons } from "antd/es/image/PreviewGroup";
import TopicNode from "./TopicNode";
import { DownOutlined, PlayCircleOutlined } from "@ant-design/icons";
import AssignmentNode from "./AssignmentNode";

export const treeData = [
  {
    title: "Introduction to HTML",
    key: "0",
    className: "level-1",
    children: [
      {
        title: <TopicNode topic={"Topic 1"} />,
        key: "0-1",
      },
      {
        title: <TopicNode topic={"Topic 1"} />,
        key: "0-2",
      },
      {
        title: <TopicNode topic={"Topic 1"} />,
        key: "0-3",
      },
      {
        title: <TopicNode topic={"Topic 1"} />,
        key: "0-4",
      },
      {
        title: <TopicNode topic={"Topic 1"} />,
        key: "0-5",
      },
    ],
  },
  {
    title: "Assignments",
    key: "1",
    className: "level-1",
    children: [
      {
        title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
        key: "1-0",
      },
      {
        title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
        key: "1-2",
      },
      {
        title: <AssignmentNode topic={"Topic 1"} difficulty={"hard"} />,
        key: "1-3",
      },
      {
        title: <AssignmentNode topic={"Topic 1"} difficulty={"medium"} />,
        key: "1-4",
      },
      {
        title: <AssignmentNode topic={"Topic 1"} difficulty={"easy"} />,
        key: "1-5",
      },
    ],
  },
];
