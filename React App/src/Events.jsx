import React from "react";
import Plot from "react-plotly.js";
import { Steps } from "antd";

//---10 blocks
var Red = {
  name: "Red Tiles",
  x: [5, 9, 13, 5, 9, 13],
  y: [5, 5, 5, 9, 9, 9],
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(240, 52, 52, 1)",
    line: {
      color: "rgba(240, 52, 52, 1",
      width: 0.85,
    },
    symbol: "square",
    size: 38.5,
  },
};

var Green = {
  //Green
  name: "Green Tiles",
  x: [3, 7, 7, 11, 11, 15],
  y: [7, 3, 11, 11, 3, 7],
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 230, 64, 1)",
    line: {
      color: "rgba(0, 230, 64, 1)",
      width: 0.85,
    },
    symbol: "square",
    size: 38.2,
  },
};

var Grey = {
  //Green
  name: "Gray Tiles",
  x: [15],
  y: [7],
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(211, 211, 211, 1)",
    line: {
      color: "rgba(211, 211,211, 1)",
      width: 0.85,
    },
    symbol: "square",
    size: 38,
  },
};

//---------------------------------------------
//------6 blocks
// var Red = {
//   // x: [5, 9, 13],
//   // y: [3, 3, 3],
//   x: [9, 9, 9],
//   y: [3, 7, 11],
//   name: "Red Tiles",
//   mode: "markers",
//   type: "scatter",
//   marker: {
//     color: "rgba(240, 52, 52, 1)",
//     line: {
//       color: "rgba(240, 52, 52, 1",
//       width: 0.85,
//     },
//     symbol: "square",
//     size: 38.5,
//   },
// };

// var Green = {
//   // x: [3, 7, 11],
//   // y: [5, 5, 5],
//   x: [7, 7, 7],
//   y: [1, 5, 9],
//   mode: "markers",
//   type: "scatter",
//   marker: {
//     color: "rgba(0, 230, 64, 1)",
//     line: {
//       color: "rgba(0, 230, 64, 1)",
//       width: 0.85,
//     },
//     symbol: "square",
//     size: 38.2,
//   },
// };

//------------------------------------------------------------
var leftSteps = {
  name: "Hits",
  // x: [1, 3, 5, 5], //foot loaction
  // y: [7, 5, 11, 9],
  z: [1, 2, 3, 4], //step number

  x: [5, 9], //foot loaction
  y: [9, 9],
  //mode: "lines+markers",
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 1.5,
    },
    symbol: "circle-dot",
    size: 12,
    line: {
      color: "FFF",
    },
  },
};

var rightSteps = {
  x: [2, 3, 4, 1, 3, 5],
  y: [16, 3, 11, 7, 5, 11],
  z: [1, 2, 3, 4],
  name: "Misses",
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 1.5,
    },
    symbol: "x",
    size: 12,
  },
};

export default class PlotLyGraphic extends React.Component {
  state = {
    Green,
    Red,
    Grey,
    leftSteps,
    rightSteps,
    layout: {
      margin: {
        l: 80,
        r: 0,
        t: 3,
        b: 0,
      },
      datarevision: 0,
      legend: {
        pad: { t: 10, b: 1, r: 100 },
        bordercolor: "#111",
        font: {
          size: 10,
        },
        bgcolor: "#d3d3d1",
        title: "Poop",
        y: 0.5,
      },
      sliders: [
        {
          pad: { t: 20, b: 1 },
          currentvalue: {
            xanchor: "right",
            prefix: "Step#: ",
            font: {
              color: "#888",
              size: 17,
            },
          },
          range: [0, 18],
          steps: [
            {
              label: "1",
              method: "restyle",
              args: ["line.color", "Poop"],
              visible: true,
            },
            {
              label: "2",
              method: "restyle",
              args: ["line.color", "green"],
            },
            {
              range: [0, 18],
            },
            // {
            //   label: "3",
            //   method: "restyle",
            //   args: ["line.color", "blue"],
            // },
            // {
            //   label: "haha",
            //   method: "restyle",
            //   args: ["line.color", "blue"],
            // },
          ],
        },
      ],
      width: 550,
      height: 385,
      xaxis: {
        range: [0, 18],
        ticklen: 1,
        dtick: 2,
        dividerwidth: 50,
        dividercolor: "#111",
        tickcolor: "#000",
        gridcolor: "000",
        showgrid: true,
        gridwidth: 1.2,

        autorange: false,
        fixedrange: true,
      },
      yaxis: {
        dividerwidth: 50,
        ticklen: 1,
        tickwidth: 1,
        linewidth: 1,
        dtick: 2,
        range: [0, 14],
        gridwidth: 1.2,
        autorange: false,
        fixedrange: true,
        rangeslider: false,
        tickcolor: "#000",
        gridcolor: "000",
      },
    },
    revision: 0,
  };

  render() {
    return (
      <div>
        <Plot
          data={[
            this.state.Green,
            this.state.Red,
            this.state.leftSteps,
            this.state.rightSteps,
            this.state.Grey,
          ]}
          layout={this.state.layout}
          revision={this.state.revision}
          graphDiv="graph"
        />
      </div>
    );
  }
}
