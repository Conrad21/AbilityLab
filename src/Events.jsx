import React, { Component } from "react";
import ZingChart from "zingchart-react";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      plot: {
        clusterOffset: 0.1,
      },

      config: {
        type: "scatter",
        "scroll-x": {},
        "scroll-y": {},
        scale: {
          sizeFactor: 0.5,
          height: 10,
          width: 10,
        },
        scaleX: {
          // "zooming":true,
          // "zoom-to":[3,7],
          values: "-1:16:2",
          guide: {
            visible: true,
          },
          refValue: 1,
          refLine: {
            visible: true,
            lineWidth: 3,
            lineColor: "#424242",
          },
          markers: [
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [-1, 1],
              valueRange: true,
              gradientColors: "red white",
              gradientStops: ".5 .1",

              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [1, 3],
              valueRange: true,
              gradientColors: "white green",
              gradientStops: ".5 .5",
              fillType: "linear",
              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [3, 5],
              valueRange: true,
              gradientColors: "red white",
              gradientStops: ".5 .1",

              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [5, 7],
              valueRange: true,
              gradientColors: "white green",
              gradientStops: ".5 .5",
              fillType: "linear",
              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [7, 9],
              valueRange: true,
              gradientColors: "red white",
              gradientStops: ".5 .1",

              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [9, 11],
              valueRange: true,
              gradientColors: "white green",
              gradientStops: ".5 .5",
              fillType: "linear",
              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [11, 13],
              valueRange: true,
              gradientColors: "red white",
              gradientStops: ".5 .1",

              alpha: 0.5,
            },
            {
              // use gradients to fill quadrants vertically
              type: "area",
              range: [13, 15],
              valueRange: true,
              gradientColors: "white green",
              gradientStops: ".5 .5",
              fillType: "linear",
              alpha: 0.5,
            },
          ],
        },
        legend: {},
        scaleY: {
          values: "0:10:4",
          guide: {
            lineStyle: "solid",
            lineColor: "Black",
            lineWidth: "2px",
          },
        },
        plot: {
          "bar-width": "50%",
        },
        series: [
          {
            text: "X:  Miss",

            "legend-marker": {
              type: "cross",
              "background-color": "#fce9e9",
              "border-color": "Black",
              "border-width": 2,
            },
            values: [[10, 3]],

            marker: {
              type: "cross",
              lineColor: "Black",
              lineWidth: "3px",
              size: "10px",
            },
          },

          {
            "legend-marker": {
              type: "cross",
              "background-color": "#fce9e9",
              "border-color": "Black",
              "border-width": 12,
            },
            values: [
              [0, 6],
              [2, 3],
              [4, 6],
              [6, 2],
              [8, 5],
              [12, 6],
              [14, 3],
              [16, 6],
              [18, 2],
              [20, 6],
              [22, 2],
            ],
            text: "O: Hit",
            marker: {
              type: "circle",
              backgroundColor: "none",
              borderColor: "Black",
              borderWidth: "3px",
              size: "10px",
            },
          },
        ],

        // images: [
        //   {
        //     src:
        //       "https://app.zingsoft.com/api/file/NR5A5K6S/Planet_Express.png",
        //     x: "50%",
        //     y: "50%",
        //     "background-color": "#008000",
        //     opacity: 20
        //   }
        // ]
      },
    };
    this.chart = React.createRef();
    this.chartDone = this.chartDone.bind(this);
    this.nodeInfo = this.nodeInfo.bind(this);
  }
  render() {
    const listOfEventListeners = ["complete", "node_mouseover"];

    const events = Array.from(listOfEventListeners.entries()).map(
      ([index, value]) => {
        return <li key={index}>{value}</li>;
      }
    );

    return (
      <div>
        <ZingChart
          ref={this.chart}
          data={this.state.config}
          complete={this.chartDone}
          node_mouseover={this.nodeInfo}
          height={355}
          width={580}
        />
      </div>
    );
  }
  chartDone() {
    this.setState({});
  }

  nodeInfo(result) {
    delete result.ev;
    this.setState({});
  }
}

export default Events;
