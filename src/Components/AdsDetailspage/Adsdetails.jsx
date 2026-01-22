import React, { useEffect, useState } from "react";
import "./Adsdetails.css";
import phone from "../../assets/images/phone.png";
import asaan from "../../assets/images/asaan.png";

import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import mobile from "../../assets/images/mobiles.png";
import appbanner from "../../assets/images/appbannerfoter.png";
import blackbaanner from "../../assets/images/blackbanner.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKENDURL } from "../../services/variables";

const Adsdetails = () => {
  // const location = useLocation();
  // const productId = location?.state?.productId;
  // const [singlePhone, setSinglePhone] = useState([]);

  // const FetchMobiles = async()=>{
  //   try {
  // const reponse = await axios.get(BACKENDURL+`/product/view-one${productId}`)
  // setSinglePhone(reponse?.data?.data)
  //   } catch (error) {
  //     console.log(error)

  //   }
  // }

  // useEffect(()=>{
  // if(
  //   productid
  // )

  // FetchMobiles()
  // },[])

  const location = useLocation();
  const productId = location.state?.productId;

  const [details, setDetails] = useState([]);
  // const [related, setRelated] = useState(second)

  const FetchMobiles = async () => {
    try {
      const reponse = await axios.get(
        BACKENDURL + `/products/view-one/${productId}`,
      );

      console.log("response ", reponse);
      setDetails(reponse?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId) {
      FetchMobiles();
    }
  }, []); //

  const navigate = useNavigate();

  return (
    <div className="main-div">
      <div className="main-div"></div>

      <div className="product-page">
        <div className="gallery">
          <img
            src={details?.product_display_image}
            alt=""
            className="main-img"
          />
          <div className="thumbs">
            {details?.product_images?.map((image) => {
              return (
                <div className="w-32 h-32 rounded-b-lg rounded-t-lg bg-gray-100">
                  <img src={image} alt="" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="product-info">
          <h1 className="h1">{details?.product_name}</h1>
          <h2 className="price">Rs. {details?.product_price}</h2>
          <p className="time">{details?.created_at}</p>

          <div className="seller-box">
            <div className="seller">
              <img src={details?.product_owners?.owner_image} alt="" />{" "}
              <div>
                <h4 className="h1">{details?.product_owners?.owner_name}</h4>
                <p>{details?.product_owners?.created_at} </p>
                <h2
                  onClick={() => {
                    navigate("/ProfilePage", {
                      state: { owner: details?.product_owners },
                    });
                  }}
                  className="text-black"
                >
                  See Profile
                </h2>
              </div>
            </div>

            <button className="btn phone">Show phone number</button>
            <a href="chat.html">
              <button
                className="btn chat"
                onClick={() => {
                  navigate("/Chat");
                }}
              >
                Chat
              </button>
            </a>
          </div>

          <div className="locate ">
            <h4>Location</h4>
            <p>Dharampura, Lahore</p>

            <div className="Add mb-26 ">
              <small>Ad ID 1071950120</small>
              <p className="Report">Report this add</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Page-content">
        <div className="details-row">
          <div className="info-box">
            <div className="info-item">
              <span>Brand</span>
              <strong>Infinix</strong>
            </div>

            <div className="info-item">
              <span>Condition</span>
              <strong>New</strong>
            </div>

            <div className="info-item">
              <span>Price</span>
              <strong>Rs. 29,000</strong>
            </div>
          </div>

          <div className="desc-box">
            <h3 className="font-[6f00]">Details</h3>
            <p>
              Samsung Fold 2, Note 20 Ultra available. PTA approved and non-PTA.
              SIM time available. Excellent condition. Original accessories
              included.
            </p>
          </div>
        </div>
      </div>

      <h3 className="section-title">Related Ads</h3>

      <div className="related-ads">
        <div className="ad-card">
          <div>
            <img src={mobile} alt="" />
            <h5>Samsung Galaxy Note 20 Ultra</h5>
            <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
            <p className="time">6 days ago</p>

            <p className="price">RS. 144500 </p>
            <div className="actions">
              <button className="call">Call</button>
              <button className="chat">Chat</button>
            </div>
          </div>
        </div>

        <div className="ad-card">
          <div>
            <img src={mobile} alt="" />
            <h5>Samsung Galaxy Note 20 Ultra</h5>
            <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
            <p className="time">6 days ago</p>

            <p className="price">RS. 144500 </p>
            <div className="actions">
              <button className="call">Call</button>
              <button className="chat">Chat</button>
            </div>
          </div>
        </div>

        <div className="ad-card">
          <div>
            <img src={mobile} alt="" />
            <h5>Samsung Galaxy Note 20 Ultra</h5>
            <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
            <p className="time">6 days ago</p>

            <p className="price">RS. 144500 </p>
            <div className="actions">
              <button className="call">Call</button>
              <button className="chat">Chat</button>
            </div>
          </div>
        </div>

        <div className="ad-card">
          <div>
            <img src={mobile} alt="" />
            <h5>Samsung Galaxy Note 20 Ultra</h5>
            <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
            <p className="time">6 days ago</p>

            <p className="price">RS. 144500 </p>
            <div className="actions">
              <button className="call">Call</button>
              <button className="chat">Chat</button>
            </div>
          </div>
        </div>
      </div>

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

export default Adsdetails;
