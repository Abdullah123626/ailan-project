import React from "react";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import line from "../../assets/images/line.png";
import redphone from "../../assets/images/redphoen.png";
import myadsiphone from "../../assets/images/myadsiphoen.png";
import yellowiphone from "../../assets/images/yellowiphone.png";
import blacks22ultra from "../../assets/images/blacks22ultra.png";
import appbanner from "../../assets/images/appbannerfoter.png";
import blackbaanner from "../../assets/images/blackbanner.png";
import "./Myads.css";

import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Myads = () => {
  return (
    <div>
      <div className="ml-25 mt-10 flex  gap-5">
        <h4 className="text-[#333333]"> My ads</h4>
        <h4 className="text-[#7D8398]">favourities</h4>
      </div>

      <img src={line} alt="" className="w-300 ml-24" />

      <div className="gap-5 mt-6 ml-18">
        <button className="category-btn bg-[#2BBEF9]">View all (4)</button>

        <button className="category-btn ml-2">Active Ads (3)</button>

        <button className="category-btn ml-2">Inactive (1)</button>

        <button className="category-btn ml-2">Pending Ads (0)</button>
      </div>

      <div className="flex gap-5">
        <div className="w-[620px] h-[43vh] bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 mt-10 ml-2">
          {/* Top Row */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>From 08 Aug 23 to 7 Sep 23</span>
            <span className="inline-block bg-green-500 text-black px-4 py-1 rounded-lg font-medium ">
              Active
            </span>
          </div>

          {/* Main Content */}
          <div className="flex gap-6 items-center">
            {/* Image */}
            <img
              src={redphone}
              className="w-28 h-28 rounded-xl object-cover"
              alt=""
            />

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-sky-400">
                Samsung S22 Ultra
              </h2>

              <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm">
                <span>📍</span>
                <span>Lahore District, Punjab, Pakistan</span>
              </div>

              <p className="text-2xl font-bold mt-2 text-black">Rs 110,00</p>
            </div>

            {/* Sold Button */}
            <button className="bg-sky-400 text-white px-10 py-3 rounded-xl font-semibold ">
              Sold
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="flex justify-between items-center border-t pt-4 mt-2 text-gray-400 gap-2 ">
            <div className="flex items-center gap-1 border px-6 py-2 rounded-lg">
              👁️ View :12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              📞 Call :12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              💬 Chat :12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              🔖 Saved :12
            </div>
          </div>
        </div>

        <div className="w-[620px] h-[43vh] bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 mt-10 ml-2">
          {/* Top Row */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>From 08 Aug 23 to 7 Sep 23</span>
            <span className="bg-green-500 text-black px-4 py-1 rounded-lg font-medium">
              Active
            </span>
          </div>

          {/* Main Content */}
          <div className="flex gap-6 items-center">
            {/* Image */}
            <img
              src={myadsiphone}
              className="w-28 h-28 rounded-xl object-cover"
              alt=""
            />

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-sky-400">
                Samsung S22 Ultra
              </h2>

              <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm">
                <span>📍</span>
                <span>Lahore District, Punjab, Pakistan</span>
              </div>

              <p className="text-2xl font-bold mt-2 text-black">Rs 110,00</p>
            </div>

            {/* Sold Button */}
            <button className="bg-sky-400 text-white px-10 py-3 rounded-xl font-semibold">
              Sold
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="flex justify-between items-center border-t pt-4 mt-2 text-gray-400">
            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              👁️ View : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              📞 Call : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              💬 Chat : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg ">
              🔖 Saved : 12
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-[620px] h-[43vh] bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 mt-10 ml-2">
          {/* Top Row */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>From 08 Aug 23 to 7 Sep 23</span>
            <span className="bg-green-500 text-black px-4 py-1 rounded-lg font-medium">
              Active
            </span>
          </div>

          {/* Main Content */}
          <div className="flex gap-6 items-center">
            {/* Image */}
            <img
              src={yellowiphone}
              className="w-28 h-28 rounded-xl object-cover"
              alt=""
            />

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-sky-400">
                Samsung S22 Ultra
              </h2>

              <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm">
                <span>📍</span>
                <span>Lahore District, Punjab, Pakistan</span>
              </div>

              <p className="text-2xl font-bold mt-2 text-black">Rs 110,00</p>
            </div>

            {/* Sold Button */}
            <button className="bg-sky-400 text-white px-10 py-3 rounded-xl font-semibold">
              Sold
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="flex justify-between items-center border-t pt-4 mt-2 text-gray-400">
            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              👁️ View : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              📞 Call : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              💬 Chat : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              🔖 Saved : 12
            </div>
          </div>
        </div>

        <div className="w-[620px] h-[43vh] bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 mt-10 ml-2">
          {/* Top Row */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>From 08 Aug 23 to 7 Sep 23</span>
            <span className="bg-green-500 text-black px-4 py-1 rounded-lg font-medium">
              Active
            </span>
          </div>

          {/* Main Content */}
          <div className="flex gap-6 items-center">
            {/* Image */}
            <img
              src={blacks22ultra}
              className="w-28 h-28 rounded-xl object-cover"
              alt=""
            />

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-sky-400">
                Samsung S22 Ultra
              </h2>

              <div className="flex items-center gap-2 text-gray-400 mt-1 text-sm">
                <span>📍</span>
                <span>Lahore District, Punjab, Pakistan</span>
              </div>

              <p className="text-2xl font-bold mt-2 text-black">Rs 110,00</p>
            </div>

            {/* Sold Button */}
            <button className="bg-sky-400 text-white px-10 py-3 rounded-xl font-semibold">
              Sold
            </button>
          </div>

          {/* Bottom Stats */}
          <div className="flex justify-between items-center border-t pt-4 mt-2 text-gray-400">
            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              👁️ View : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              📞 Call : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              💬 Chat : 12
            </div>

            <div className="flex items-center gap-2 border px-6 py-2 rounded-lg">
              🔖 Saved : 12
            </div>
          </div>
        </div>
      </div>

      {/* footter banner  */}

      <section className="footer-banners">
        <div className="footer-banner">
          <img src={appbanner} alt="" />
        </div>

        <div className="footer-banner">
          <img src={blackbaanner} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Myads;
