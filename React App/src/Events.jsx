import React, { Component } from "react";
import Chart from "react-apexcharts";

const data = [
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
];

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "scatter",
          type: "scatter",
        },
      },
      series: [
        {
          name: "series-1",
          data: data,
        },
      ],

      options: {
        markers: {
          radius: 112,
          colors: "#FF0032",
        },
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
            enabled: true,
            type: "xy",
          },
        },

        dataLabels: {
          enabled: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        // xaxis: {
        //   type: "datetime",
        // },
        yaxis: {
          max: 10,
          min: 0,
        },
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="scatter"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
