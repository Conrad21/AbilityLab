import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
//import Card from "react-bootstrap/Card";
import "./App.css";
import {
  Layout,
  Avatar,
  Menu,
  Icon,
  Breadcrumb,
  Button,
  Card,
  Dropdown,
} from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";

import { Patient, HitsAvg, Detail, OtherData, OtherDetail } from "./Patient";

//import CareerDetails from "./CareerDetails";

import PatientDetails from "./PatientDetails";
import Events from "./Events.jsx";
import ZingChart2 from "./ZingChart2.jsx";
var ZingChart = require("zingchart-react").core;
const { Header, Footer, Sider, Content } = Layout;

const answers = 610;

// const handleGameType {
//   console.log("Game type ");

// };

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="http://www.alipay.com/"
      >
        3/21/20, Session 1
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        // href="http://www.taobao.com/"
      >
        3/21/20, Session 2
      </a>
    </Menu.Item>
    <Menu.Item>
      {" "}
      <a
        target="_blank"
        rel="noopener noreferrer" //href="http://www.tmall.com/">
      >
        3/21/20, Session 2
      </a>
    </Menu.Item>
  </Menu>
);

var size1 = 605;

function App() {
  const [selectedPatient, setSelectedPatient] = useState("");
  const [visible, setVisible] = useState(false);
  const onSelect = (name) => {
    setSelectedPatient(name);
    setVisible(true);
  };
  const ViewProfileButton = ({ name }) => {
    return (
      <Button
        type="dashed"
        style={{ float: "right" }}
        onClick={() => onSelect(name)}
      >
        {" "}
        View Full Profile >>{" "}
      </Button>
    );
  };

  const onClose = () => setVisible(false);

  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          {/*<Avatar style={{ float: "right" }} src="./dp.png" /> */}
          <Title style={{ color: "white" }} level={3}>
            Ability Lab
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>A Tab</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="Some Tabs" title="Walk type">
                  <Menu.Item key="Dashboard 1"> Walk1 </Menu.Item>
                  <Menu.Item key="Dashboard 2"> Walk2 </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>

              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>Sessions</span>
                  </span>
                }
              >
                <Menu.ItemGroup key="Sessions">
                  <Menu.Item key="Dashboard 1">
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" href="#">
                        Select Session <Icon type="down" />
                      </a>
                    </Dropdown>
                  </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 100px" }}>
              <Breadcrumb style={{ margin: "20px 0", opacity: 0.1 }}>
                {/*  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>*/}
              </Breadcrumb>

              <div
                style={{
                  background: "	#497586",
                  padding: 34,
                  minHeight: 630,
                  width: 1050,
                }}
              >
                {/* Patient info */}
                <Patient name="Name goes here" avatarSrc="./icon.png">
                  <HitsAvg hitsAvg=" .817">
                    <Detail hits="1000" misses="183" />
                    <br></br>
                  </HitsAvg>
                  <OtherData Otherdata>
                    <OtherDetail distance=" 100 meters" other="Other data" />
                  </OtherData>
                  <ViewProfileButton name="Name Goes Here" />
                </Patient>

                {/* DashBoard Image */}
                <div>
                  <Card
                    bordered
                    style={{
                      width: answers,
                      height: 410,
                      float: "left",
                      margin: 10,
                    }}
                  >
                    <backgroundImage
                      src={"./sidewalk.png"}
                      width={500}
                      height={200}
                    />
                    <Events />
                  </Card>
                </div>
                {/* radio buttons */}
                <div></div>
                <Card
                  bordered
                  style={{ width: 300, height: 150, float: "left", margin: 7 }}
                  title="Difficulty"
                  bordered={true}
                >
                  <input type="radio" name="difficulty" value="easy " /> - Easy
                  <div>
                    <input type="radio" name="difficulty" value="medium " /> -
                    Medium
                  </div>
                  <div>
                    <input type="radio" name="difficulty" value="hard " /> -
                    Hard
                  </div>
                </Card>

                {/* <Card
                  bordered
                  style={{ width: 300, height: 150, float: "left", margin: 7 }}
                  title="Passed Sessions"
                  bordered={true}
                >
                  <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                      Select Session <Icon type="down" />
                    </a>
                  </Dropdown>
                </Card> */}
              </div>
            </Content>
            <PatientDetails
              patient={selectedPatient}
              visible={visible}
              onClose={onClose}
            />

            <Footer style={{ textAlign: "center" }}>Ability Lab</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
