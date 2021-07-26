import React, { useState } from "react";
import { Layout, Menu, Icon, Breadcrumb, Button, Card, Dropdown, } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import { Patient, HitsAvg, Detail, OtherData, OtherDetail } from "./Compenents/Patient.js";
import PatientDetails from './PatientDetails';
import Events from "./Compenents/Events.jsx";
import logo from "./AbilityLabLogo.jpeg";
import MatrixModal from "./Board/MatrixModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//components
const { Header, Sider, Content } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank"  rel="noopener noreferrer" // href="http://www.AbiltiyLab.com/"  
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

//var size1 = 605;
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
          type="dashed"  style={{ float: "right" }}  onClick={() => onSelect(name)} >
        {" "}
        View Full Profile {" "}
      </Button>
    );
  };
  const onClose = () => setVisible(false);


  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 1}}>
          {/*<Avatar style={{ float: "right" }} src="./dp.png" /> */}
          <Title style={{ color: "orange", height: 100 }} level={3}>
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

              <SubMenu title={
                  <span>
                    <Icon type="mail" />
                    <span>Sessions</span>
                  </span> }>
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
                </Breadcrumb>
                  <div style={{ background: "#d87a0f", float: "center", 
                  padding: 10, minHeight: 730, width: 1165,}}>
                <Card
                    bordered style={{  width: 785, height: 550, float: "left", }}>
                <Events />
                </Card>

               <img src={logo} alt="this is an thingy :3" style={{ width: 785, height: 150, position: "absolute",
               right: 0, left: 210 , top: 630, margin: 10,}} />
                {/* Patient info */}
                <Patient name="Name goes here" avatarSrc="./icon.png">
                  <HitsAvg hitsAvg=" .333">
                    <Detail hits="2" misses="4" />
                  <br></br>
            
                  </HitsAvg>
                  <OtherData Otherdata>
                    <OtherDetail  Walking Distance=" 3 meters"  other="Other data"/>
                  </OtherData>
                  <ViewProfileButton name="Name Goes Here" />
                </Patient>

                <Card
                  bordered style={{ width: 341, height: 150, float: "right", margin: 6}}
                  title="Custom Layout"  >
                <MatrixModal/>
                </Card>

              </div>{" "}
             </Content>
              <PatientDetails
                patient={selectedPatient}  visible={visible}  onClose={onClose} />         
            {/* <Footer style={{ textAlign: "center" }}>Ability Lab</Footer> */}
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
