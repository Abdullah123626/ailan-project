import React from "react";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import "./Help.css";
import blackbaanner from "../../assets/images/blackbanner.png";
import sendmessage from "../../assets/images/sendmessage.png";

const Help = () => {
  return (
    <div>
      <div class="main ">
        <h3 class="h3text text-black"> Help</h3>

        <div class="inputsdiv ">
          <div>
            <h5 class="h5 ">Name</h5>
            {/* <input type="text" placeholder="Enter title" className="firstinp">
        
        */}
            <input type="text" placeholder="Type Here " className="firstinp " />
          </div>
          <div>
            <h5 class="h5 ">Email</h5>

            {/* <input type="text" placeholder="Enter Brand" class="secondinp"> */}
            <input type="text" placeholder="Type Here " className="secondinp" />
          </div>
        </div>

        <h5 class="h5 ml-12">Phone Number</h5>

        {/* <input type="text" placeholder="Enter Brand" class="secondinp"> */}
        <input type="text" placeholder="Type Here " className="third-inp" />

        <h5 class="h5 ml-12">Message</h5>

        <div class="desc-wrap">
          <textarea id="description" placeholder="Write a message"></textarea>
        </div>

        <p className="ml-90 text-[#333333] text-[10px] ">0/200</p>

        <button className="category-btn ml-10 mt-5">Send Messages</button>

        {/* <img src={sendmessage} alt="" /> */}
      </div>

      <div className="footer-banner mt-30">
        <img src={blackbaanner} alt="" />
      </div>
    </div>
  );
};

export default Help;
