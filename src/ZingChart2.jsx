import React, { Component } from "react";
import ZingChart from "zingchart-react";

var d2 = {
  values: [4],
};

class ZingChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        type: "bar",
        series: [
          {
            values: [d2],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div>
        <ZingChart data={this.state.config} />
      </div>
    );
  }
}

export default ZingChart2;
