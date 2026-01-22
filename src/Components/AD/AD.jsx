import React from "react";
import asaan from "../../assets/images/asaan.png";
import tablets from "../../assets/images/tablests.png";
import toggle from "../../assets/images/toggle.png";
import "./AD.css";


import { FaArrowLeft } from "react-icons/fa";

const AD = () => {
  return (
    <div className="Main-div">
      <div class="header-wrap">
        <div class="top-bar">
          <FaArrowLeft size={18} color="black" style={{ cursor: "pointer" }} />

          <div class="image-row">
            <img src={asaan} alt="asaan" className="logo" />
          </div>
        </div>

        <h3 className="text-[16px] font-bold ml-70">Post your Ad</h3>

        <div className="div"></div>
      </div>

      <div class="main">
        <div class="first">
          <h3 class="h3">Selected Category</h3>
          <div class="second">
            <img src={tablets} alt="" />
          </div>
        </div>

        <h3 class="h3text"> Include Details Of Your Add</h3>

        <div class="inputsdiv">
          <div>
            <h5 class="h5">Add Title</h5>
            {/* <input type="text" placeholder="Enter title" className="firstinp">
        
        */}
            <input
              type="text"
              placeholder="Enter Title "
              className="firstinp"
            />
          </div>
          <div>
            <h5 class="h5">Brand</h5>

            {/* <input type="text" placeholder="Enter Brand" class="secondinp"> */}
            <input
              type="text"
              placeholder="Enter Brand"
              className="secondinp"
            />
          </div>
        </div>

        <div class="description">
          <div>
            <h4 class="description-text">Description</h4>

            <div class="desc-wrap">
              <textarea
                id="description"
                placeholder="Enter description"
              ></textarea>
            </div>
          </div>

          <div class="conditions">
            <h4 class="condition-text">Conditions</h4>
            <div class="condition-row">
              <button class="condition-btn">New</button>
              <button class="condition-btn">Open Box</button>
              <button class="condition-btn">Used</button>
            </div>
            <div class="buttons">
              <button class="condition-btn mr-2">Refurbished</button>
              <button class="condition-btn  "> Not working parts</button>
            </div>
          </div>
        </div>

        <h4 class="set-price">
          Set A Prrice
          <div class="rupesinp">
            <h5 class="h5">Price</h5>
            {/* <input type="text" placeholder="Enter Price In Rupees" class="thirdinp"> */}
            <input
              type="text"
              placeholder="Enter Price In Rupees"
              className="thirdinp"
            />
          </div>
        </h4>

        <h5 class="h5Images">Images</h5>
        <div class="profiles">
          <div class="profile dotted">
            <span class="icon">📷</span>
          </div>

          <div class="profile filled">
            <span class="icon">+</span>
          </div>
        </div>

        <h4 class="ml-6 mt-14 font-[600]">
          Your Ads Location
          <div class="rupesinp">
            <h5 class="h5">Location</h5>
            {/* <input type="text" placeholder="Enter Location" class="thirdinp"> */}
            <input
              type="text"
              placeholder="Enter Location"
              className="thirdinp"
            />
          </div>
        </h4>

        <h4 class="ml-6 mt-10 font-[600]">
          Review Yore Details
          <div class="rupesinp">
            <h5 class="h5">Name</h5>
            {/* <input type="text" placeholder="Taimoor A" class="thirdinp"> */}
            <input type="text" placeholder="Taimoor A" className="thirdinp" />
          </div>
        </h4>

        <h4 class="ml-6 mt-10 font-[600]">
          Your Mobile Number
          <div class="">
           

            <div class="phone-input-wrapper">
              <span class="country-code">+92</span>
              <input
                type="tel"
                class="phone-input"
                placeholder="Enter phone number"
                maxlength="10"
                oninput="this.value = this.value.replace(/[^0-9]/g, '')"
              />
            </div>
          </div>
        </h4>

        <div className="flex items-center justify-around w-[420px] mt-10">
          <h4 className="text-gray-800 font-medium text-sm">
            Show My Phone Number In ads
          </h4>

          {/* Toggle Button */}
          <div className="w-14 h-8 bg-blue-500 p-1 flex items-center cursor-pointer relative">
            <img src={toggle} alt="icon" />
          </div>
        </div>

        <button class="post-btn">Post Now</button>
      </div>
    </div>
  );
};

export default AD;
