import React, { useState } from "react";
//import logo from "./AbilityLabLogo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
//import Card from "react-bootstrap/Card";
import "./App.css";
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button, Card, Dropdown, } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import { Patient, HitsAvg, Detail, OtherData, OtherDetail } from "./Patient";
//import CareerDetails from "./CareerDetails";
import PatientDetails from "./PatientDetails";
import Events from "./Events.jsx";
import logo from "./AbilityLabLogo.jpeg";
import MatrixModal from "./MatrixModal";

var ZingChart = require("zingchart-react").core;
const { Header, Footer, Sider, Content } = Layout;

//components
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
          <Title style={{ color: "orange" }} level={3}>
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
                    <Icon type="link" />
                    <span>Change Walk Type</span>
                  </span>}>

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
                }>

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
            <Content style={{ padding: "0 10px" }}>
              <Breadcrumb style={{ margin: "10px 0", opacity: 0.1 }}>
                {/*  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>*/}
              </Breadcrumb>
              <div
                style={{
                  background: "	#d87a0f",
                  float: "center",
                  padding: 10,
                  minHeight: 730,
                  width: 1165,
                }}
              >
                      <Card
                    bordered
                    style={{
                      width: 700,
                      height: 515,
                      float: "left",
                      margin: 10,
                    }}
                  >
                    <Events />
                  </Card>


                   <img  src={logo}
                  style={{
                    width: 700,  height: 159,
                    //  float: "left",
                    position: "absolute",
                    right: 0, left: 218,  bottom: 1, top: 605,
                    margin: 12,
                  }}
                />
                {/* Patient info */}
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
                <div>
                <Card
                  bordered
                  style={{ width: 330, height: 170, float: "left", margin: 10 }}
                  title="Custom Layout"
                  bordered={true}
                 >
                <MatrixModal/>
                </Card>
                </div>  
              </div>{" "}
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
