import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const PieCharts = ({ chartData }) => {
  const seriesData = chartData.map((dataItem, index) => ({
    id: index,
    value: dataItem.value,
    label: dataItem.label,
  }));

  return (
    <div className="flex items-center justify-center w-full h-full glass">
      <PieChart
        series={[
          {
            data: seriesData,
            innerRadius: 30,
            outerRadius: 120,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -180,
            endAngle: 180,
            cx: 120,
            cy: 150,
          },
        ]}
        width={400}
        height={350}
      >
        {(props) => (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            {props.legend}
          </div>
        )}
      </PieChart>
    </div>
  );
};

export default PieCharts;
