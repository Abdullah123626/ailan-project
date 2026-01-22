import React, { useCallback, useEffect, useState } from "react";
// import asaan from "./assets/images/asaan.png"; // adjust path & extension
import animals from "../../assets/images/animals.png"; // adjust path & extension
import asaan from "../../assets/images/asaan.png";
import banner from "../../assets/images/Banner.png";
import phone from "../../assets/images/phone.png";
import vechiles from "../../assets/images/vechles.png";
import property from "../../assets/images/property.png";
import rent from "../../assets/images/rent.png";
import camera from "../../assets/images/camera.png";
import bikes from "../../assets/images/bikes.png";
import tractor from "../../assets/images/tractor.png";
import services from "../../assets/images/services.png";
import jobs from "../../assets/images/jobs.png";
import homedecor from "../../assets/images/homedecor.png";
import fashion from "../../assets/images/fashion.png";
import bookkss from "../../assets/images/bookkss.png";
import kids from "../../assets/images/kids.png";
import mobile from "../../assets/images/mobiles.png";
import fotterbaner from "../../assets/images/fotterbanner.png";
import appbanner from "../../assets/images/appbannerfoter.png";
import blackbaanner from "../../assets/images/blackbanner.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import { FaChevronDown } from "react-icons/fa";

import "./Landingpage.css";
import axios from "axios";
import { BACKENDURL } from "../../services/variables";
import { use } from "react";

const Landingpage = () => {
  
  const [avaiablePhones,setAvailablePhones]=useState([]);
  const navigate = useNavigate()

  // const fetchAvailablePhones= async()=>{
  //   try {
  //     const response=await axios.get(BACKENDURL+ "/products/view-all/mobilephones");
  //     console.log(response)
  //   } catch (error) {
      
  //   }
  // }

  // const fetchAvailablePhones = useCallback(async ()=>{
  //   try{
  //     const reponse = await axios.get(BACKENDURL+"/product/view-all/mobilephons")
  //     setAvailablePhones(reponse?.data?.data)
  //   }
  //   catch(error){
  //     console.log(error)
      
  //   }
  // },[])


   const fetchMobilePhones = useCallback(async () => {
        try {
            const response = await axios.get(BACKENDURL + "/products/view-all/mobilephones");
            setAvailablePhones(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    }, [])


    console.log("DATA , ",avaiablePhones);




useEffect(()=>{
  fetchMobilePhones()
},[fetchMobilePhones])

  return (
    <div className="main-div">
      <div className="Header">
        <div className="left-section">
          <img src={asaan} alt="asaan" className="logo" />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Rahim yar khan "
              className="input location"
            />
            <div className="divider"></div>
            <input
              type="text"
              placeholder="Find cars,Mobile phones and more.."
              className="input search"
            />
            <button className="search-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>

          <div className="right-section">
            <FaRegCommentDots className="icon" size={20} />
            <FaRegBell className="icon" size={20} />

            <img src={phone} alt="" className="profile-img" />
              <button className="sell-btn" onClick={()=>{
                navigate("/Postad")
              }}>
                <i className="fa-solid fa-plus"></i> Sell
              </button>
          </div>
        </div>
      </div>

      <div className="categories-row">
        <button className="all-cat-btn">All Categories</button>

        <div className="other-categories">
          <button className="category-btn" onClick={(()=>{
            navigate("/ProfilePage")
          })}>Mobile Phones</button>
          <button className="category-btn" onClick={()=>{
            navigate("/Adsdetails")
          }}>Cars</button>
          <button className="category-btn" onClick={()=>{
            navigate("/ProfilePage")
          }}>Motorcycles</button>
          <button className="category-btn" onClick={()=>{
            navigate("/Chat")
          }}>Houses</button>
          <button className="category-btn" onClick={()=>{
            navigate("/Postad")
          }}>TV / Video / Audio</button>
          <button className="category-btn" onClick={()=>{
            navigate("/Myads")
          }}>Tablets</button>
          <button className="category-btn" onClick={()=>{
            navigate("/Error")
          }}>Plots</button>

  <button className="category-btn" onClick={()=>{
            navigate("/Settings")
          }}>settings</button>


            <button className="category-btn" onClick={()=>{
            navigate("/Help")
          }}>Help</button>

            <button className="category-btn" onClick={()=>{
            navigate("/Termsandconditions")
          }}>Terms and conditions</button>


 <button className="category-btn" onClick={()=>{
            navigate("/Privacypolicy")
          }}>Privacy policy</button>


          
 <button className="category-btn" onClick={()=>{
            navigate("/AD")
          }}>AD</button>


           <button className="category-btn" onClick={()=>{
            navigate("/Profile")
          }}>Profile</button>


        </div>
      </div>

      <div className="banner-container">
        <img src={banner} alt="" className="banner-img" />
      </div>

      <h3 className="all-categories-title">All Categories</h3>

      <section className="categories-section">
        <div className="categories-row">
          <a href="mobiles.html" className="category-item">
            <img src={phone} alt="" />
            <h4>Mobiles</h4>
          </a>

          <div className="category-item">
            <img src={vechiles} alt="" /> <h4>Vechiles</h4>
          </div>
          <div className="category-item">
            <img src={property} alt="Proprty " />
            <h4>Property for sale </h4>
          </div>
          <div className="category-item">
            <img src={rent} alt="" />
            <h4>Property for rent</h4>
          </div>
          <div className="category-item">
            <img src={camera} alt="" />
            <h4>Electronics & Home Appliances</h4>
          </div>
          <div className="category-item">
            <img src={bikes} alt="" />
            <h4>Bikes</h4>
          </div>
          <div className="category-item">
            <img src={tractor} alt="" />
            <h4>Business, Industrial & Agriculture</h4>
          </div>
          <div className="category-item">
            <img src={services} alt="" />
            <h4>Services</h4>
          </div>
        </div>
        <div className="categories-row">
          <div className="category-item">
            <img src={jobs} alt="" />
            <h4>Jobs</h4>
          </div>
          <div className="category-item">
            <img src={animals} alt="" />

            <h4>Animals</h4>
          </div>
          <div className="category-item">
            <img src={homedecor} alt="" />
            <h4>Furniture & Home Decor</h4>
          </div>
          <div className="category-item">
            <img src={fashion} alt="" />
            <h4>Fashion & Beauty</h4>
          </div>
          <div className="category-item">
            <img src={bookkss} alt="" />
            <h4>Books, Sports & Hobbies</h4>
          </div>
          <div className="category-item">
            <img src={kids} alt="" />

            <h4>Kids</h4>
          </div>
        </div>
      </section>

      <h3 className="category-title">Mobile Phones</h3>

     
     
     <div className="ad-cards-container flex flex-wrap justify-center gap-4 py-5 px-2.5">
  {avaiablePhones?.map((product, index) => {
    return (
      <div
      onClick={()=>{
        navigate("/Adsdetails",{state:{productId:product.id}})
      }}




        key={index}
        className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5"
      >
        <img
          src={product?.product_display_image}
          alt={product?.product_name}
          className="w-full h-31 object-cover rounded-[4px]"
        />
        <div className="py-2.5 px-3">
          <h3 className="text-sm font-[600] text-[#333] mb-0.5">
            {product?.product_name}
          </h3>
          <p className="text-sm font-[600] text-[#1e6bff] mb-0.5">
            {product?.product_price}
          </p>
          <p className="text-sm text-[#777] mb-0.5">
            {product?.product_location}
          </p>
          <p className="text-sm text-[#777] mb-0.5">2 hours ago</p>
        </div>
      </div>
    );
  })}
</div>










       {/* <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

         <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

         <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>



      <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

        <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>



        <div className="w-50 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>
        

         <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div>

         <div className="w-60 h-70 mt-2 border border-gray-200 rounded-[12px] overflow-hidden bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)] cursor-pointer transition-[transform,box-shadow] duration-200 p-2.5">

          <img src={mobile} alt="" className="w-full h-31 object-cover rounded-[4px]"  />
          <div className=" py-2.5 px-3">
            <h3 className=" text-sm font-[600] text-[#333] mb-0.5">iPhone 16 Plus</h3>
            <p className=" text-sm font-[600] text-[#1e6bff] mb-0.5  ">160,000</p>
            <p className="text-sm text-[#777] mb-0.5">Karachi, Pakistan</p>
            <p className=" text-sm text-[#777] mb-0.5">2 hours ago</p>
          </div>
        </div> */}



      








      <section className="partners-section">
        <h3>Our Partners</h3>
        <div className="partners-banner">
          <img src={fotterbaner} alt="" />{" "}
        </div>
      </section>

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

export default Landingpage;
