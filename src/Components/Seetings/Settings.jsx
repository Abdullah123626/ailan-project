import React from "react";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import "./Settings.css";
import blackbaanner from "../../assets/images/blackbanner.png";
import toggle from "../../assets/images/toggle.png";
import line from "../../assets/images/line.png";

const Settings = () => {
  return (
    <div>
      <div class="main ">
        <h3 class="h3text text-black"> My Ads Settings</h3>

        <div className="flex items-center justify-around w-[500px] mt-10 gap-40 ml-5">
          <h4 className="text-gray-800 font-[400] text-[18px]">
            Show my Phone Number in Ads
          </h4>

          {/* Toggle Button */}
          <div className="w-14 h-8 bg-blue-500 p-1 flex items-center cursor-pointer relative">
            <img src={toggle} alt="icon" />
          </div>
        </div>

        <img src={line} alt="" className="mt-20 h-1 w-[90%] ml-13" />

        <h3 class="h3text text-black "> Notifications</h3>

        <div className="flex items-center justify-around w-[500px] mt-10 gap-40 ml-5">
          <div>
            <h4 className="text-gray-800 font-[400] text-[18px]">
              Recommendations
            </h4>
            <h4 className="text-gray-800 font-[400] text-[12px]">
              Receive recommendations based on your activity{" "}
            </h4>
          </div>

          {/* Toggle Button */}
          <div className="w-14 h-8 bg-blue-500 p-1 flex items-center cursor-pointer relative">
            <img src={toggle} alt="icon" />
          </div>
        </div>

        <div className="flex items-center justify-around w-[500px] mt-10 gap-40 ml-5">
          <div>
            <h4 className="text-gray-800 font-[4000] text-[18px]">
              Chat Safety Tips
            </h4>
            <h4 className="text-gray-800 font-[400] text-[12px]">
              Receive safety tips based on your chat activity
            </h4>
          </div>

          {/* Toggle Button */}
          <div className="w-14 h-8 bg-blue-500 p-1 flex items-center cursor-pointer relative">
            <img src={toggle} alt="icon" />
          </div>
        </div>
      </div>

      <div className="footer-banner mt-30">
        <img src={blackbaanner} alt="" />
      </div>
    </div>
  );
};

export default Settings;
