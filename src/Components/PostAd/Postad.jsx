import React from "react";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import bluecar from "../../assets/images/bluecar.png";
import keyhand from "../../assets/images/keyhand.png";
import purplecamera from "../../assets/images/purplecamera.png";
import redbiek from "../../assets/images/redbiek.png";
import pinktractor from "../../assets/images/pinkktractor.png";
import blueservice from "../../assets/images/blueservice.png";
import yelowbag from "../../assets/images/yelowbag.png";
import greendog from "../../assets/images/greendog.png";
import silverchair from "../../assets/images/silverchair.png";
import greensuit from "../../assets/images/greensuit.png";
import lightbooks from "../../assets/images/lightbooks.png";
// import "./Postsell.css";

import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Postad = () => {
  const naviagte = useNavigate()
  return (
    <div>
      <div class="header-wrap">
        <div class="top-bar ml-12">
          <FaArrowLeft className="cursor-pointer text-[16px] text-black" />

          <div class="image-row">
            <img src={asaan} alt="picture" />
          </div>
        </div>

        <h3 className="text-black ml-105 font-bold">Post your Ad</h3>

        <div class="div"></div>
      </div>

      <div class="main   ">
        <h3 class="h3 text-black">Choose A Category</h3>
        <div className="w-[45%] h-[50px] bg-[#EFEFFD] rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/purple.png" class="profile-img" alt=""> */}
            {/* <img src="./src/images/purple.png" class="profile-img" alt=""> */}
            <img src={phone} alt="" className="profile-img" />

            <span class="banner-text text-black" onClick={()=>{
              naviagte("/AD")

            }}>Mobiles</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src={bluecar} class="profile-img" alt=""> */}
            <img src={bluecar} alt="" className="profile-img" />
            <span class="banner-text text-black">Vechiles</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/house.png" class="profile-img" alt=""> */}
            <img src={pinktractor} alt="" className="profile-img" />
            <span class="banner-text text-black ">Property For Sale</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/keyhand.png" class="profile-img" alt="">
             */}
            <img src={keyhand} alt="" className="profile-img" />
            <span class="banner-text text-black">Property For Rent</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/purplecamera.png" class="profile-img" alt=""> */}
            <img src={purplecamera} alt="" className="profile-img" />
            <span class="banner-text text-black">
              Electronics & Home Appliances
            </span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/redbiek.png" class="profile-img" alt=""> */}
            <img src={redbiek} alt="" className="profile-img" />
            <span class="banner-text text-black">Bikes</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/pinkktractor.png" class="profile-img" alt=""> */}
            <img src={pinktractor} alt="" className="profile-img" />
            <span class="banner-text text-black">
              Business, Industrial & Agriculture
            </span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/blueservice.png" class="profile-img" alt=""> */}
            <img src={blueservice} alt="" className="profile-img" />
            <span class="banner-text text-black">Services</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/yelowbag.png" class="profile-img" alt=""> */}
            <img src={yelowbag} alt="" className="profile-img" />
            <span class="banner-text text-black">Jobs</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/greendog.png" class="profile-img" alt=""> */}
            <img src={greendog} alt="" className="profile-img" />
            <span class="banner-text text-black">Animals</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/silverchair.png" class="profile-img" alt=""> */}

            <img src={silverchair} alt="" className="profile-img" />
            <span class="banner-text text-black">Furniture & Home Decor</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/greensuit.png" class="profile-img" alt=""> */}
            <img src={greensuit} alt="" className="profile-img" />
            <span class="banner-text text-black">Fashion & Beauty</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/lightbooks.png" class="profile-img" alt=""> */}
            <img src={lightbooks} alt="" className="profile-img" />
            <span class="banner-text text-black">Books, Sports & Hobbies</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>

        <div className="w-[45%] h-[50px] bg-white rounded-[10px] flex items-center justify-between px-[10px] my-[10px] ml-[20px] cursor-pointer shadow-[0_0.5px_5px_rgba(0,0,0,0.1)]">
          <div class="flex items-center gap-3">
            {/* <img src="./src/images/yelowbag.png" class="profile-img" alt=""> */}
            <img src={yelowbag} alt="" className="profile-img" />
            <span class="banner-text text-black">Kids</span>
          </div>

          <AiOutlineRight className="right-arrow text-black" />
        </div>
      </div>
    </div>
  );
};

export default Postad;
