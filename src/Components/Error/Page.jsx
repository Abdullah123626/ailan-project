import React from 'react'
import error from "../../assets/images/eror.png";
import appbanner from "../../assets/images/appbannerfoter.png";
import blackbaanner from "../../assets/images/blackbanner.png";
import phone from "../../assets/images/phone.png";
import asaan from "../../assets/images/asaan.png";
import "./Page.css"

import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";


const Page = () => {
  return (
    <div>

 <div className='main-div'>
            <div className='Header'>
                <div className='left-section'>
                    
        
                    <img src={asaan} alt="asaan" className='logo' />
                    <div className='search-bar'>
                        <input type="text" placeholder='Rahim yar khan ' className='input location' />
                        <div className='divider'></div>
                        <input type="text" placeholder='Find cars,Mobile phones and more..' className='input search' />
                          <button className="search-btn">
          <FaSearch className="search-icon" />
                </button>
        
        
                    </div>
        
        <div className="right-section">
        <FaRegCommentDots className="icon" size={20} />
        <FaRegBell className="icon" size={20} />
        
        <img src={phone} alt="" className="profile-img" />
             <a href="sell.html">
          <button className="sell-btn">
            <i className="fa-solid fa-plus"></i> Sell
          </button>
        </a>
        
            </div>
                </div>
        
            
          </div>
        
        
        
        
        
        
          <div className="categories-row">
          <button className="all-cat-btn">
          All Categories 
          </button>
        
          <div className="other-categories">
            <button className="category-btn">Mobile Phones</button>
            <button className="category-btn">Cars</button>
            <button className="category-btn">Motorcycles</button>
            <button className="category-btn">Houses</button>
            <button className="category-btn">TV / Video / Audio</button>
            <button className="category-btn">Tablets</button>
            <button className="category-btn">Plots</button>
          </div>
        </div>
        </div>






<img src={error} alt="Error Img" className='mt-30 ml-110 w-120 h-50 mb-20' />




 <section className="footer-banners"> 
  <div className="footer-banner">
<img src={appbanner} alt="" /> 
 </div>

  <div className="footer-banner">
<img src={blackbaanner} alt="" /> 
 </div>
</section>


    </div>
  )
}

export default Page