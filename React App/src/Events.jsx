import React, { Component } from "react";
import { cloneDeep } from "lodash";
import { render } from "react-dom";
import * as agCharts from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import WalkingData from "./WalkingData.js";

const boardtyoe = 1;

//7X9
const Ylines = { values: "0:20:5" };
const Xlines = { values: "-1:16:2" };
const data = [];
const data2 = [];

//4X8
// const Ylines = { values: "0:10:4" };
// const Xlines = { values: "-1:16:2" };
// const data2 = [[8.5, 2]];
// const data = [
//   [0, 6],
//   [2, 3],
//   [4, 6],
//   [6, 2],
//   [8, 5],
//   [12, 6],
//   [14, 3],
//   [16, 6],
//   [18, 2],
//   [20, 6],
//   [22, 2],
// ];

var WalkingData1 = [
  {
    x: 1,
    y: 6,
  },
  {
    x: 2.5,
    y: 2.5,
  },
  {
    x: 3.5,
    y: 3.5,
  },
  {
    x: 4.5,
    y: 2.5,
  },
  {
    x: 5.5,
    y: 3.5,
  },
  {
    x: 6.5,
    y: 2.5,
  },
  {
    x: 1,
    y: 0,
  },
];

//---------------------------------------
//handle board type
function changeboardtype(props) {
  if (boardtyoe == 1) {
    Ylines = { values: "0:10:4" };
  } else if (boardtyoe == 2) {
    Ylines = { values: "0:20:5" };
  }
}

//handle what type of graph

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        title: { text: "Walking Data" },

        data: WalkingData1,
        series: [
          {
            type: "scatter",
            xKey: "x",
            yKey: "y",

            showInLegend: false,
            marker: {
              shape: "square",
              minSize: 12,
              size: 55,
            },
          },
        ],

        axes: [
          {
            type: "number",
            position: "bottom",
            size: 55,
            tick: { count: 5, width: 2 },
            gridStyle: [
              {
                stroke: "rgba(219, 219, 219, 2)",
                lineDash: [1, 2],
              },
            ],
          },
          {
            type: "number",
            tick: { count: 5 },
            position: "left",
          },
        ],
      },
    };
  }

  componentDidMount() {}

  render() {
    return <AgChartsReact options={this.state.options} />;
  }
}

export default Events;
