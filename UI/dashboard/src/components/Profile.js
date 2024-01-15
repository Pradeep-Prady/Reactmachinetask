import React from "react";

import profile from "../Assets/media.png";
import facebook from "../Assets/facebook.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";

export default function Profile() {
  return (
    <>
      <div className="w-full h-full p-2 md:p-5 flex items-center justify-center">
        <div className="w-[150px] glass md:w-full">
          <div>
            <img className=" w-full " src={profile} alt="profile" />
          </div>
          <div className="text-center my-2 ">
            <h2 className="text-[px] font-bold">John Doe</h2>
            <h2 className="text-[4px] font-semibold text-stone-500">CEO</h2>
          </div>
          <div className="flex items-center justify-center gap-3 md:gap-5 my-3">
            <img className="w-[25px]" src={facebook} alt="facebook" />
            <img className="w-[25px]" src={instagram} alt="instagram" />
            <img className="w-[25px]" src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </>
  );
}
