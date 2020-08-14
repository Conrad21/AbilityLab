import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Title from "antd/lib/typography/Title";
import { Layout, Menu, Icon, Breadcrumb, Button, Card, Dropdown } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Patient, HitsAvg, Detail, OtherData, OtherDetail } from "./Patient";
import PatientDetails from "./PatientDetails";
import Events from "./Events.jsx";
import DiffButt from "./DiffButton.js";
//-------------------------------------------------------------------------------------------------------------
const { Header, Footer, Sider, Content } = Layout;
const answers = 610;
var size1 = 605;
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

//--------------------------------------------------------------------------------------------------

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
        <Header style={{ height: 40, padding: 3 }}>
          {/*<Avatar style={{ float: "right" }} src="./dp.png" /> */}
          <Title style={{ color: "orange" }} level={2}>
            Ability Lab
          </Title>
        </Header>
        <Layout>
          {/* //-------------------------------------------------------------------------------sidebar */}
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode="inline">
              <Menu.Item key="Dashboard">Dashboard</Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="link" />
                    <span>Change Walk Type</span>
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
            {/* //-------------------------------------------------------------------------------center */}
            <Content style={{ padding: "0 5px" }}>
              <Breadcrumb style={{ margin: "5px 0", opacity: 0.1 }}>
                {/*  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>*/}
              </Breadcrumb>
              <div
                style={{
                  background: "	#d87a0f",
                  float: "center",
                  padding: 4,
                  minHeight: 710,
                  width: 1165,
                }}
              >
                {/* Patient info card */}
                <Patient name="Name goes here" avatarSrc="./icon.png">
                  <HitsAvg hitsAvg=" .333">
                    <Detail hits="2" misses="4" />
                    <br></br>
                  </HitsAvg>
                  <OtherData Otherdata>
                    <OtherDetail
                      Walking
                      Distance=" 3 meters"
                      other="Other data"
                    />
                  </OtherData>
                  <ViewProfileButton name="Name Goes Here" />
                </Patient>
                {/*--------------------------Chart buttons */}
                <div>
                  <Card
                    bordered
                    style={{
                      float: "right",
                      margin: 10,
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                  >
                    <Events />
                  </Card>
                </div>
                {/*---------------------------Radio buttons */}
                <DiffButt />
                <div></div>
              </div>{" "}
            </Content>

            <Footer style={{ textAlign: "center" }}>Ability Lab</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
