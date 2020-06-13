import React, { Component } from "react";
import Chart from "react-apexcharts";

const Greendata = [
  [1, 6],
  [3, 6],
  [5, 6],
];

const Reddata = [
  [2, 3],
  [4, 3],
  [6, 3],
];

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "TEAM 1",
          data: Greendata,
          min: 10,
          max: 60,
        },
        {
          name: "TEAM 2",
          data: Reddata,
          min: 10,
          max: 60,
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "scatter",
          zoom: {
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
        fill: {
          colors: " #FF0032 ,#FF0032 ",
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          max: 12,
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
