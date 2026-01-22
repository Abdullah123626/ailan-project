import { useLocation, useSearchParams } from "react-router-dom";
import "./ProfilePage.css";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import usman from "../../assets/images/usman.png";
import { FiShare2 } from "react-icons/fi";
import line from "../../assets/images/line.png";
import yaris from "../../assets/images/yaris.png";
import houses from "../../assets/images/houses.png";
import mobile from "../../assets/images/mobiles.png";
import axios from "axios";
import { BACKENDURL } from "../../services/variables";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const location = useLocation();

  console.log("data", location);

  const personsdetails = async () => {
    try {
      const response = await axios.get(BACKENDURL);
      setData(response?.data?.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    personsdetails();
  }, []);

  return (
    <div>
      <div className="main-div"></div>

      {/* profile part  */}

      <div className="flex ml-16">
        <div className="min-h-screen bg-black flex flex-col items-center justify-start pt-16 text-white">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 ">
            <img
              src={usman}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="mt-6 text-xl font-semibold text-black">
            Published ads – 2
          </h2>

          <div className="mt-6 flex items-center gap-3 bg-white text-black px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition border border-black">
            <FiShare2 className="w-5 h-5" />

            <span className="font-medium">Share user profile</span>
          </div>

          <div className="mt-6 text-blue-500 flex gap-2">
            <span className="cursor-pointer hover:underline">Report User</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Block User</span>
          </div>
        </div>

        {/* usman saeed right sides texts and cards  */}
        <div>
          <h3 className="text-black ml-10 mt-15 font-bold text-[30px]">
            {location?.state?.owner?.owner_name}
          </h3>

          <img src={line} alt="" className="w-200 h-0.5 ml-10 mt-10" />

          <p className="mt-3 text-black text-[20px] ml-10 font-semibold">
            Ads Posted by{" "}
            <span className="font-bold">
              {location?.state?.owner?.owner_name}
            </span>
          </p>

          {/* ads row  */}
          <div className="related-ads">
            <div className="ad-card">
              <div>
                <img src={yaris} alt="" />
                <h5 className="font-semibold text-[18x] mt-1">
                  Toyota Yaris 2020 model
                </h5>
                <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
                <p className="time">6 days ago</p>

                <p className="price">RS. 2344500 </p>
                <div className="actions">
                  <button className="call">Call</button>
                  <button className="chat">Chat</button>
                </div>
              </div>
            </div>

            <div className="ad-card">
              <div>
                <img src={houses} alt="" />
                <h5 className="font-semibold text-[18x] mt-1">
                  5 Marla house for sale
                </h5>
                <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
                <p className="time">6 days ago</p>

                <p className="price">RS. 1444500 </p>
                <div className="actions">
                  <button className="call">Call</button>
                  <button className="chat">Chat</button>
                </div>
              </div>
            </div>

            <div className="ad-card">
              <div>
                <img src={mobile} alt="" />
                <h5 className="font-semibold text-[18x] mt-1">
                  Samsung Galaxy Note 20 Ultra
                </h5>
                <h6 className="locat ">DC Chowk, Rahim Yar Khan</h6>
                <p className="time">6 days ago</p>

                <p className="price">RS. 144500 </p>
                <div className="actions">
                  <button className="call">Call</button>
                  <button className="chat">Chat</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
