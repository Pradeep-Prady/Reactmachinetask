import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import profileImg from "../Assets/Rectangle 10.png";
import axios from "axios";
import Graph from "./Graph";
import PieCharts from "./PieCharts";
import Table from "./Table";
import Profile from "./Profile";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Dashboard() {
  const [pieChartData, setPieChartData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pie-chart")
      .then((response) => {
        setPieChartData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/graph")
      .then((response) => {
        setGraphData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/table")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    
    <div className="w-full h-auto flex bg-[#E8EDFF]">
      <div className="w-full flex">
        <div className="w-2/12 hidden md:flex">
          <SideBar />
        </div>
        <div className="w-full md:w-10/12 h-full  md:px-10 pt-3">
          <div className="w-full md:h-[55%]">
            <div className="md:hidden">
              <div
                onClick={() => setShow(true)}
                className="px-3 md:hidden cursor-pointer"
              >
                <DoubleArrowIcon />
              </div>
            </div>
            <Dialog
              fullScreen={fullScreen}
              open={show}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <SideBar handleClose={handleClose} />
            </Dialog>
            <div className="flex items-center justify-between w-full px-2 md:px-5">
              <h2 className="text-[18px] md:text-[22px] font-semibold">
                Good Morning !🌞{" "}
              </h2>
              <div className="flex bg-white py-2 px-2 md:px-4 gap-3 rounded-xl">
                <div className="">
                  <h2 className="text-[14px] md:text-[16px] font-medium">
                    John Doe
                  </h2>
                  <p className="text-[12px] md:text-[14px] font-medium">
                    john@doe.com
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    className=" w-[40px]"
                    src={profileImg}
                    alt="profileImg"
                  />
                </div>
              </div>
            </div>
            <div className="md:flex px-5 py-3 gap-7">
              <div className="w-full md:w-7/12 h-full flex items-centr justify-cente">
                <Graph chartData={graphData} />
              </div>
              <div className="w-full md:w-5/12 h-full flex items-center justify-center">
                <PieCharts chartData={pieChartData} />
              </div>
            </div>
          </div>
          <div className="w-full md:h-[40%] md:flex items-start justify-center  gap-7">
            <div className="md:w-9/12 h-[90%]">
              <Table chartData={tableData} />
            </div>
            <div className="md:w-3/12">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
