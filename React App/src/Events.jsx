import React from "react";
import Plot from "react-plotly.js";
import { Steps } from "antd";

//---10 blocks
var Red = {
  name: "Red Tiles",
  x: [15, 27, 39, 15, 27, 39],
  y: [15, 15, 15, 27, 27, 27],
  mode: "markers",
  type: "scatter",
  showlegend: false,
  marker: {
    color: "rgba(240, 52, 52, 1)",
    line: {
      color: "rgba(240, 52, 52, 1",
      width: 0.85,
    },
    symbol: "square",
    size: 41,
  },
};

var Green = {
  //Green
  name: "Green Tiles",
  x: [9, 21, 21, 33, 33, 45],
  y: [21, 9, 33, 33, 9, 21],
  showlegend: false,
  mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 230, 64, 1)",
    line: {
      color: "rgba(0, 230, 64, 1)",
      width: 0.85,
    },
    symbol: "square",
    size: 41,
  },
};

var Lines = 1;

// var Grey = {
//   //Green
//   name: "Gray Tiles",
//   x: [15],
//   y: [7],
//   mode: "markers",
//   type: "scatter",
//   marker: {
//     color: "rgba(211, 211, 211, 1)",
//     line: {
//       color: "rgba(211, 211,211, 1)",
//       width: 0.85,
//     },
//     symbol: "square",
//     size: 38,
//   },
// };

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

//------------------------------------------------------Left
var hitLeft = {
  name: "Hit Left",
  // x: [1, 3, 5, 5], //foot loaction
  // y: [7, 5, 11, 9],
  z: [1], //step number
  x: [9, 16, 21, 31, 41, 47, 41, 33, 27, 24],
  y: [21, 27, 32, 34, 29, 22, 13, 8, 14, 18],

  mode: "markers",
  // mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 0, 0, 1)",
    size: 22,
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 2.5,
    },
    symbol: "x-open",
    size: 12,
  },
};

var missLeft = {
  name: "Miss Left",
  // x: [1, 3, 5, 5], //foot loaction
  // y: [7, 5, 11, 9],

  x: [3, 5, 13, 26, 38, 44, 44, 37, 29, 20], //foot loaction
  y: [14, 18, 23, 33, 33, 26, 17, 11, 11, 20],
  mode: "markers",
  //mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 2.5,
    },
    symbol: "circle-open",
    size: 12,
  },
};
//--------------------------------------------------------- Right
var hitRight = {
  x: [13, 28, 39, 37, 43, 33, 37, 41],
  y: [17, 28, 25, 15, 21, 11, 27, 23],
  z: [1, 2, 3, 4],
  name: "Hit Right",
  mode: "markers",
  // mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 1.9,
    },
    symbol: "x",
    size: 12,
  },
};

var missRight = {
  x: [5, 9, 17, 21, 17, 34, 15, 40, 30, 27, 22, 32],
  y: [11, 15, 23, 27, 23, 29, 20, 19, 15, 19, 22, 13],
  z: [1, 2, 3, 4],
  name: "Miss Right",
  mode: "markers",
  // mode: "markers",
  type: "scatter",
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 2,
    },
    symbol: "circle",
    size: 12,
  },
};

//------------------------------------------------------connected lines
var rightMarkers = {
  x: [5, 9, 13, 15, 17, 21, 28, 34, 37, 39, 41, 43, 40, 37, 33, 32, 30, 27, 22],
  y: [
    11,
    15,
    17,
    20,
    23,
    27,
    28,
    29,
    27,
    25,
    23,
    21,
    19,
    15,
    11,
    13,
    15,
    19,
    22,
  ],
  mode: "lines",
  // mode: "markers",
  type: "scatter",
  showlegend: false,
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 1.9,
    },
    symbol: "x",
    size: 12,
  },
};

var leftMarkers = {
  x: [
    3,
    5,
    9,
    13,
    16,
    21,
    26,
    31,
    38,
    41,
    44,
    47,
    44,
    41,
    37,
    33,
    29,
    27,
    24,
    20,
  ],
  y: [
    14,
    18,
    21,
    23,
    27,
    32,
    33,
    34,
    33,
    29,
    26,
    22,
    17,
    13,
    11,
    8,
    11,
    14,
    18,
    20,
  ],
  mode: "lines",
  // mode: "markers",
  type: "scatter",
  showlegend: false,
  marker: {
    color: "rgba(0, 0, 0, 1)",
    line: {
      color: "rgba(0, 0,0, 1)",
      width: 2,
    },
    symbol: "circle",
    size: 12,
  },
};

//-------------------------------------------------------------fucntion
var sliderSteps = [];
var i = 1;
for (i = 1; i < 21; i++) {
  sliderSteps.push({
    label: i,
    method: "animate",
    args: [
      ["red"],
      {
        mode: "immediate",
        frame: { redraw: false, duration: 500 },
        transition: { duration: 500 },
      },
    ],
    data: {
      y: [3, 2, 1],
      "marker.color": "green",
    },
  });
}

//----------------------------------------------------------------------
export default class PlotLyGraphic extends React.Component {
  state = {
    Green,
    Red,
    hitRight,
    hitLeft,
    missRight,
    missLeft,
    rightMarkers,
    leftMarkers,
    layout: {
      margin: {
        l: 35,
        r: 30,
        t: 3,
        b: 0,
      },
      datarevision: 0,
      legend: {
        pad: { t: 10, b: 1, r: 100 },

        bordercolor: "#111",
        font: {
          size: 12,
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
              color: "#00",
              size: 17,
            },
          },

          steps: sliderSteps,
        },

        {},
      ],
      updatemenus: [
        {
          y: 0.28,
          x: 1.33,
          buttons: [
            {
              method: "restyle",
              args: ["visible", [true]],
              label: "Step Group 1",
            },
            {
              method: "restyle",
              args: ["visible", [true, true, false, false, false, false]],
              label: "Step Group 2",
            },
            {
              method: "restyle",
              args: ["visible", [true, true, false, false, false, false]],
              label: "Step Group 3",
            },
          ],
        },

        {
          buttons: [
            {
              //  args: ["colorscale", "Viridis"],
              ///args: ["mode", "markers"],
              method: "restyle",
              args: [
                "visible",
                [true, true, true, true, true, true, true, true],
              ],
              label: "Lines",
              method: "restyle",
            },
            {
              args: [
                "visible",
                [true, true, true, true, true, true, false, false],
              ],
              label: "None",
              method: "restyle",
            },
          ],
          direction: "left",
          pad: { r: 222, t: 253, l: 332 },
          showactive: true,
          type: "buttons",
          x: 0.15,
          xanchor: "left",
          //y: button_layer_1_height,
          yanchor: "top",
          active: 1,
          bgcolor: "#aaaaaa",
          bordercolor: "#FFFFFF",
        },
      ],
      width: 545,
      height: 400,
      xaxis: {
        range: [0, 54],
        ticklen: 1,
        dtick: 6,
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
        dtick: 6,
        range: [0, 42],
        gridwidth: 1.2,
        autorange: false,
        fixedrange: true,
        rangeslider: false,
        tickcolor: "#000",
        gridcolor: "000",
        rangeslider: {},
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
            this.state.missRight,
            this.state.missLeft,
            this.state.hitRight,
            this.state.hitLeft,
            this.state.rightMarkers,
            this.state.leftMarkers,
          ]}
          layout={this.state.layout}
          revision={this.state.revision}
          graphDiv="graph"
        />
      </div>
    );
  }
}
