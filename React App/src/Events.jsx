import React from "react";
import Plot from "react-plotly.js";

data1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: "lines",
  type: "scatter",
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: "lines+markers",
  type: "scatter",
};

var data = [trace1, trace2, trace3];

export default class PlotLyGraphic extends React.Component {
  state = {
    trace1: {
      x: data1.x,
      y: data1.y,
      mode: "markers",
      type: "scatter",
    },
    trace2: {
      x: [2, 3, 4, 5],
      y: [16, 5, 11, 9],
      mode: "lines",
      type: "scatter",
    },

    layout: {
      datarevision: 0,
      width: 580,
      height: 355,
    },
    revision: 0,
  };

  render() {
    return (
      <div>
        <Plot
          data={[this.state.trace1, this.state.trace2]}
          layout={this.state.layout}
          revision={this.state.revision}
          graphDiv="graph"
        />
      </div>
    );
  }
}
