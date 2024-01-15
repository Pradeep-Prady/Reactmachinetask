import React, { useState } from "react";

import briefcase from "../Assets/Briefcase.png";
import startboard from "../Assets/StatBoard.png";

import shoutdown from "../Assets/Shutdown.png";

import dashboard from "../Assets/Circled Menu.png";
import support from "../Assets/Support.png";
import plugins from "../Assets/Puzzle.png";
import help from "../Assets/Help.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function SideBar({ handleClose }) {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const menus = [
    {
      name: "Dashboard",
      img: dashboard,
    },
    {
      name: "Support",
      img: support,
    },
    {
      name: "Plugins",
      img: plugins,
    },
    {
      name: "Help",
      img: help,
    },
  ];

  return (
    <div className="bg-[#20263A] w-full h-full">
      <div className="flex flex-col items-center h-full justify-between">
        <div className="w-full md:hidden flex items-center justify-end ">
          <div
            className=" text-white p-5 cursor-pointer"
            onClick={() => handleClose(false)}
          >
            <DoubleArrowIcon />
          </div>
        </div>

        <div className="m-5 p-5 flex flex-col items-center justify-center gap-2">
          <img src={briefcase} alt="briefcase" />
          <img src={startboard} alt="startboard" />
        </div>
        <div className="flex items-center justify-end w-full">
          <div className="w-full items-end flex flex-col">
            {menus.map((menu) => (
              <div
                key={menu.name}
                onClick={() => setActiveSection(menu.name)}
                className={`flex gap-3 my-5 bg-[#1A1F30] hover:text-black hover:bg-[#ffffff] rounded-l-lg cursor-pointer w-10/12 p-4 font-medium text-[px] ${
                  activeSection === menu.name
                    ? "bg-[#ffffff] text-black"
                    : "bg-[#1A1F30] text-white"
                }`}
              >
                <img className="w-[30px]" src={menu.img} alt={menu.name} />
                <h2>{menu.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white cursor-pointer flex items-center justify-center">
          <div className=" font-medium text-red-500 flex gap-2  items-center py-5">
            <h2>Logout</h2>
            <img className="w-[20px]" src={shoutdown} alt="shoutdown" />
          </div>
        </div>
      </div>
    </div>
  );
}
