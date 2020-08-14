import { Radio } from "antd";
import React from "react";
import { Layout, Menu, Icon, Breadcrumb, Button, Card, Dropdown } from "antd";
import logo from "./AbilityLabLogo.jpeg";

export default class ALicon extends React.Component {
  render() {
    return (
      <img
        src={logo}
        style={{
          width: 833,
          height: 120,
          float: "right",
          margin: 7,
          marginLeft: 5,
        }}
      />
    );
  }
}

{
  /* <Card
  bordered
  style={{
    width: 330,
    height: 160,
    float: "left",
    margin: 10,
    marginBottom: 100,
  }}
  title="Difficulty"
  bordered={true}
>
  <input type="radio" name="difficulty" value="easy" /> - Easy
  <div>
    <input type="radio" name="difficulty" value="medium " /> - Medium
    {/* <Button type="dashed" size={12}>
                      Test Button
                    </Button> 
  </div>
  <div>
    <input type="radio" name="difficulty" value="hard " /> - Hard
  </div>
</Card>
*/
}
