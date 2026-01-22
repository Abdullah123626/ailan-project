import React from "react";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import "./Profile.css";
import blackbaanner from "../../assets/images/blackbanner.png";
import usman from "../../assets/images/usman.png";
import line from "../../assets/images/line.png";

const Profile = () => {
  return (
    <div>
      <div className="w-[75%] h-[230vh] border border-[rgb(185,185,185)] rounded-[10px] mx-auto my-[10px] mt-[2%] ml-[12%]">
        {/* profile */}
        <p className="text-[14px] font-[600] mt-10 ml-10">Profile</p>

        <div className="flex items-center gap-6 ml-10 mt-10">
          {/* Profile Image */}
          <img
            src={usman}
            alt="Profile"
            className="w-30 h-30 rounded-full object-cover border"
          />

          {/* Button + Text */}
          <div className="flex flex-col">
            <button className="bg-blue-500 text-black px-5 py-2 rounded-lg hover:bg-blue-600 transition">
              Upload
            </button>

            <p className="text-[10px] text-gray-500 mt-1">
              JPG, JPEG, PNG Min: 400px, Max: 1024px{" "}
            </p>
          </div>
        </div>

        {/* input */}
        <div className="flex ">
          {/* Left Side: Name Input */}
          <div className="mt-10 ml-10 w-[50%]">
            <p className="text-black text-[14px] font-[400]">Name</p>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-[90%] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            />
          </div>

          {/* Right Side: Info Box */}
          <div className="w-[25%] h-[16vh] border border-[rgb(185,185,185)] rounded-[5px] mt-[6.5%]">
            <h3 className="text-[11px] font-[500] ml-5 mt-3">
              Why it is important
            </h3>

            <p className="text-[10px] font-[300] ml-5 mt-1 text-[#333333]">
              Classified is built on trust. Help other people get to know you.
              Tell them about the things you like. Share your favorite brands,
              books, movies, shows, music, food. And you will see the results…
            </p>
          </div>
        </div>

        {/* date of birth  */}
        <div className="mt-10 ml-10">
          <p className="text-black text-[14px] font-[400] mb-2">
            Date of Birth
          </p>

          <div className="flex gap-4">
            {/* Date */}
            <input
              type="text"
              placeholder="DD"
              className="w-[120px] border border-gray-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />

            {/* Month */}
            <input
              type="text"
              placeholder="MM"
              className="w-[120px] border border-gray-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />

            {/* Year */}
            <input
              type="text"
              placeholder="YYYY"
              className="w-[120px] border border-gray-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
            />
          </div>
        </div>

        {/* gennder */}
        <div className="mt-10 ml-10 w-[50%]">
          <p className="text-black text-[14px] font-[400]">Gender</p>

          <input
            type="text"
            name="name"
            placeholder="select your gender"
            className="w-[90%] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          />
        </div>

        {/* description */}
        <div className="mt-10 ml-10 w-[50%]">
          <p className="text-black text-[14px] font-[400] mb-2">Description</p>

          <textarea
            rows="4"
            placeholder="About me (Optional)"
            className="w-[90%] border border-gray-300 rounded-[5px] px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* line */}

        <img src={line} alt="line" className="mt-15 w-[80%] ml-20" />

        {/* contact information  */}

        <div className="ml-10 mt-10">
          <h4 className="font-[600] text-[14px] mb-2">Your Mobile Number</h4>

          <div className="flex items-center w-[46.5%] border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
            {/* Country Code */}
            <span className="px-3 py-2 bg-gray-100 text-sm text-gray-700 border-r">
              +92
            </span>

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Enter phone number"
              maxLength={10}
              className="flex-1 px-3 py-2 text-sm focus:outline-none "
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>
        </div>

        <p className="text-[9px] mt-1 ml-51">
          {" "}
          This is the number for buyers contacts, reminders, and other
          notifications.
        </p>

        {/* 2nd input  */}
        <div className="mt-4 ml-10 w-[50%]">
          <input
            type="text"
            name="name"
            placeholder="name.connect@gmail.com"
            className="w-[90%] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          />

          <p className="text-[9px] mt-1 ml-42">
            {" "}
            We won't reveal your email to anyone else nor use it to send you
            spam .
          </p>
        </div>

        {/*second line */}

        <img src={line} alt="line" className="mt-15 w-[80%] ml-20" />

        {/* optional info */}
        <h3 className="text-[14px] font-[600] mt-10 ml-10">
          Optional Information
        </h3>

        <div className="mt-10 ml-10 w-[45%]">
          <div className="flex justify-between items-start">
            {/* Left Side: Text */}
            <div>
              <h3 className="text-[14px] font-[500]">Facebook</h3>
              <h3 className="text-[10px] font-[400] text-[#858997] mt-1">
                Sign in with Facebook and discover your trusted connections to
                buyers
              </h3>
            </div>

            {/* Right Side: Button */}
            <div className="inline-block px-6 py-2 border border-[#2BBEF9] text-[#2BBEF9] bg-white rounded-full text-center cursor-pointer hover:bg-[#f0faff] transition text-[10px]">
              Connect
            </div>
          </div>
        </div>

        {/* 2nd*/}

        <div className="mt-3 ml-10 w-[45%]">
          <div className="flex justify-between items-start">
            {/* Left Side: Text */}
            <div>
              <h3 className="text-[14px] font-[500]">Google</h3>
              <h3 className="text-[10px] font-[400] text-[#858997] mt-1">
                Connect your OLX account to your Google account for simplicity
                and ease{" "}
              </h3>
            </div>

            {/* Right Side: Button */}
            <div className="inline-block px-6 py-2 border border-[#2BBEF9] text-[#2BBEF9] bg-white rounded-full text-center cursor-pointer hover:bg-[#f0faff] transition text-[9px]">
              Disconnect
            </div>
          </div>
        </div>

        {/* buttons rrow  */}

        <div className="flex flex-col gap-4 mt-14  ml-10">
          {/* Save Changes Button */}
          <button className="bg-[#2BBEF9] text-black px-6 py-2 rounded-full hover:bg-blue-600 transition w-[20%] text-[13px]">
            Save Changes
          </button>

          {/* Discard Button */}
          <button className="bg-white text-[#2BBEF9] border border-[#2BBEF9] px-6 py-2 rounded-full hover:bg-[#f0f8ff] transition w-[20%] text-[13px]">
            Discard
          </button>
        </div>
      </div>

      {/* 2nd div  */}
      <div className="w-[75%] h-[24vh] border border-[rgb(185,185,185)] rounded-[10px] mx-auto my-[10px] mt-[1%] ml-[12%]">
        <h3 className="text-[16px] font-[600] mt-6 ml-10">
          Delete this account
        </h3>

        <h3 className="text-[12px] font-[400] mt-4 ml-10 text-[#414141]">
          Are you sure you want to delete your account?
        </h3>

        <button className="bg-white text-[#2BBEF9] border border-[#2BBEF9] px-6 py-2 rounded-full hover:bg-[#f0f8ff] transition w-[20%] text-[12px] mt-2 ml-10">
          Yes, delete my account{" "}
        </button>
      </div>

      {/* fotter banner  */}
      <div className="footer-banner mt-8">
        <img src={blackbaanner} alt="" />
      </div>
    </div>
  );
};

export default Profile;
