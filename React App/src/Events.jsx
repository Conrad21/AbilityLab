import React from "react";
import Plot from "react-plotly.js";

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(204, 204, 204, 0.95)",
    line: {
      color: "rgba(217, 217, 217, 1.0)",
      width: 1,
    },
    symbol: "square",
    size: 50,
  },
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

export default class PlotLyGraphic extends React.Component {
  state = {
    trace1,
    trace2,
    layout: {
      datarevision: 0,
      width: 580,
      height: 355,
      xaxis: {
        range: [0, 10],
        autorange: false,
      },
      yaxis: {
        range: [0, 10],
        autorange: false,
      },
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
