import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Layout, Space, theme } from "antd";
import styled from "styled-components";
import {
  ArrowLeftOutlined,
  ArrowUpOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { BsBookmarkPlusFill } from "react-icons/bs";
import Description from "../../components/DescriptionSection/Description";
import ClassNotes from "../../components/ClassNotesSection/ClassNotes";
import useWindowSize from "../../hooks/useWindowSize";
import VideoPlayer from "../../components/Video/VideoPlayer";
import {
  FullContentLayout,
  MainContentLayout,
} from "../../styles/layout.styles";
import ModuleRightSidebar from "../../components/ModuleRightSidebar/ModuleRightSidebar";

const VideoV2 = () => {
  const { width } = useWindowSize();
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const { Content, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleCollapsed = () => setCollapsed(!collapsed);

  const mySiderStyle = {
    background: "transparent",
    zIndex: width < 992 ? 123456 : null,
    overflow: "auto",
    height: width < 992 ? "100vh" : "85vh",
    position: "fixed",
    right: width < 992 ? 0 : "20px",
    top: width < 992 ? 0 : "158px",
    scrollbarWidth: "none",
  };

  const rightSidebarWidth = width > 1200 || width < 992 ? "300px" : "250px";

  useEffect(() => {
    console.log(width);
    if (width >= 992) {
      setCollapsed(false);
    }
  }, [width]);

  return (
    <>
      <Helmet>
        <title>Video</title>
        <meta name="settings" content="settings" />
        <link rel="canonical" href="https://www.learn.devtown.in/setting" />
      </Helmet>
      <GoBackBtn
        widtth={width}
        type="link"
        size="large"
        onClick={() => navigate("/")}
      >
        <ArrowLeftOutlined /> Back To DashBoard
      </GoBackBtn>

      <FullContentLayout width={width}>
        {/* {width < 992 && (
            <ModuleSiderOpener handleCollapsed={handleCollapsed} />
          )} */}
        <MainContainer
          width={width}
          rightSidebarWidth={rightSidebarWidth}
          collapsed={collapsed}
        >
          <Header width={width}>
            <div className="inner-header">
              <Space size={12} align="center">
                <i>
                  <PlayCircleOutlined
                    style={{ fontSize: "40px", color: "#3F4B5E" }}
                  />
                </i>
                <Space direction="vertical" size={4}>
                  <p>Data Structure and Algorithms / Introduction to HTML</p>
                  <h1 className="test">Basic of Web Development</h1>
                </Space>
              </Space>
              <StyledBookmarkBtn
                type="link"
                icon={<BsBookmarkPlusFill size={20} />}
                iconPosition="end"
                className="btn-bookmark"
                size="large"
              >
                Add Bookmark
              </StyledBookmarkBtn>
            </div>
            <Space size={12} className="space-antd-btn" wrap={true}>
              <Button color="primary" type="text" size="large">
                Previous Lecture
              </Button>
              <Button type="text" size="large">
                Next Lecture
              </Button>
            </Space>
          </Header>

          <VideoPlayer />

          <StyledButtonBox>
            <div>
              <a className="btn" href="#description">
                Description
              </a>
              <a className="btn" href="#classNotes">
                Notes
              </a>
              <Button type="text" size="large">
                View Code <ArrowUpOutlined rotate={45} />{" "}
              </Button>
              <Button type="text" size="large">
                Code Rubiks
              </Button>
            </div>
            <Button size="large" className="ask-btn">
              ✋ Ask Doubt
            </Button>
          </StyledButtonBox>
          <Description />
          <ClassNotes />
        </MainContainer>

        {/* right sidebar to show modules */}
        <Sider
          collapsed={collapsed}
          collapsedWidth="0"
          width={rightSidebarWidth}
          style={mySiderStyle}
        >
          {width < 992 && !collapsed && (
            <div className="shaded-background" onClick={handleCollapsed}></div>
          )}
          <ModuleRightSidebar />
        </Sider>
      </FullContentLayout>
    </>
  );
};

export default VideoV2;

const GoBackBtn = styled(Button)`
  font-size: 18px;
  margin-left: ${(props) => (props.width >= 768 ? "24px" : "12px")};
`;

const MainContainer = styled(MainContentLayout)`
  /* adjusting middle bar size according to sidebar */
  margin-right: ${(props) =>
    props.collapsed || props.width < 992
      ? null
      : `calc(${props.rightSidebarWidth} + 14px)`};
  padding: 0;
  .ant-tabs-tab {
    color: #1d2026;
    font-family: Inter;
    font-weight: 500;
    line-height: 22px;
    padding: 20px !important;
  }
`;

const Header = styled.div`
  display: flex;
  padding: 24px 16px;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  border-radius: 16px 16px 0px 0px;
  border-bottom: 1px solid #e9eaf0;
  font-family: "DM Sans";
  align-items: ${(props) => (props.width >= 768 ? "center" : "flex-start")};
  flex-direction: ${(props) => (props.width >= 768 ? "row" : "column")};
  .inner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    p {
      color: #474747;
      font-size: 14px;
    }
    h1 {
      color: #1d2026;
      font-size: 24px;
      font-weight: 700;
    }
  }
  .space-antd-btn {
    button {
      color: #294169;
    }
    button:hover {
      color: white !important;
      background-color: #415b88 !important;
    }
    button:active {
      background-color: #294169 !important;
    }
  }
  /* padding: ${(props) => (props.width >= 1300 ? "20px 22px" : "20px 5px")}; */
`;

const StyledBookmarkBtn = styled(Button)`
  display: flex;
  align-items: center;
`;

const StyledButtonBox = styled.div`
  display: flex;
  border-top: 1px solid #e9eaf0;
  border-bottom: 1px solid #e9eaf0;
  margin: 0 16px;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
  .btn {
    width: 150px;
    padding: 20px;
    color: #1d2026;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    border: none;
    border-bottom: 3px solid white;
    cursor: pointer;
    &:focus,
    &:hover {
      border-bottom: 3px solid #0859de;
    }
  }
  .ask-btn {
    font-family: "DM Sans";
    color: #1d2026;
    font-size: 16px;
    font-weight: 400;
  }
  /* .link {
    display: flex;
    justify-content: center;
  }
  .link:last-child {
    background: linear-gradient(90deg, #0a5be0 0%, #ff4e72 104.46%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */
`;
