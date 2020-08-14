import { Radio } from "antd";
import React from "react";
import { Layout, Menu, Icon, Breadcrumb, Button, Card, Dropdown } from "antd";

export default class button extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Card
          title="Difficulty Selection "
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
          bordered
          style={{
            width: 300,
            height: 120,
            margin: 10,
            marginTop: 2,
            marginBottom: 0,
          }}
        >
          <did></did>
          <Radio value={1}>Easy</Radio>
          <Radio value={2}>Medium </Radio>
          <Radio value={3}>Hard</Radio>
        </Card>
      </Radio.Group>
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
