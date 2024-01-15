import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const MyLineChart = ({ chartData }) => {
  const allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const months = allMonths;
  let data = Array(12).fill(0);

  chartData.forEach((item) => {
    const index = allMonths.indexOf(item.x);
    if (index !== -1) {
      data[index] = item.y;
    }
  });

  return (
    <div className="glass my-5 md:my-0">
      <div className=" sm:hidden">
        <LineChart
          series={[{ data: data, color: "blue" }]}
          width={280}
          height={350}
          xAxis={[{ scaleType: "point", data: months }]}
          interactions={false}
          style={{ width: "100%" }}
        />
      </div>

      <div className="hidden sm:flex md:hidden">
        <LineChart
          series={[{ data: data, color: "blue" }]}
          width={500}
          height={350}
          xAxis={[{ scaleType: "point", data: months }]}
          interactions={false}
          style={{ width: "100%" }}
        />
      </div>
      <div className="hidden md:flex">
        <LineChart
          series={[{ data: data, color: "blue" }]}
          width={600}
          height={350}
          xAxis={[{ scaleType: "point", data: months }]}
          interactions={false}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MyLineChart;
