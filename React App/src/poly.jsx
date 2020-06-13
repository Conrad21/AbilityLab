import React from "react";
import Plot from "react-plotly.js";

export default class Event extends React.Component {
  state = {
    line1: {
      x: [-3, -2, -1],
      y: [1, 2, 3],
      name: "Line 1",
    },
    line2: {
      x: [1, 2, 3],
      y: [-3, -2, -1],
      name: "Line 2",
    },
    layout: {
      datarevision: 0,
    },
    revision: 0,
  };
  rand = () => parseInt(Math.random() * 10, 10);
  increaseGraphic = () => {
    const { line1, line2, layout } = this.state;
    line1.x.push(this.rand());
    line1.y.push(this.rand());
    line2.x.push(this.rand());
    line2.y.push(this.rand());
    this.setState({ revision: this.state.revision + 1 });
    layout.datarevision = this.state.revision + 1;
  };
  render() {
    return (
      <div>
        <Plot
          data={[this.state.line1, this.state.line2]}
          layout={this.state.layout}
          revision={this.state.revision}
          graphDiv="graph"
        />
      </div>
    );
  }
}
