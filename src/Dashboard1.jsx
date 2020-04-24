import React, { Component } from "react";
import "./App.css";

export class Card extends Component {
  render() {
    <Layout>
      <Header style={{ padding: 10 }}>
        {/*<Avatar style={{ float: "right" }} src="./dp.png" /> */}
        <Title style={{ color: "white" }} level={3}>
          Ability Lab
        </Title>
      </Header>
      <Layout>
        {/*     <Sider>
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
        </Menu>
      </Sider>*/}
        <Layout>
          <Content style={{ padding: "0 100px" }}>
            <Breadcrumb style={{ margin: "20px 0", opacity: 0.1 }}>
              {/*  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>*/}
            </Breadcrumb>
            <div style={{ background: "	#497586", padding: 34, minHeight: 780 }}>
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
              {
                <img
                  src={"./sidewalk.png"}
                  width={500}
                  height={300}
                  opacity={0.1}
                />
              }
              {/* radio buttons */}
              <div>
                <div>
                  <input type="radio" name="difficulty" value="easy " /> - Easy
                </div>
                <div>
                  <input type="radio" name="difficulty" value="medium " /> -
                  Medium
                </div>
                <div>
                  <input type="radio" name="difficulty" value="hard " /> - Hard
                </div>
              </div>
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
    </Layout>;
  }
}

export default Dashboard1;
