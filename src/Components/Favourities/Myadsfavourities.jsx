import React from 'react'
import "./Myadsfavourities.css"

import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import mobile from "../../assets/images/mobiles.png";
import appbanner from "../../assets/images/appbannerfoter.png";
import blackbaanner from "../../assets/images/blackbanner.png";

const Myadsfavourities = () => {
  return (
    <div>

        {/* <div className='main-div'>
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
                <FaRegCommentDots className="icon" size={28} />
                <FaRegBell className="icon" size={28} />
                
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
                </div> */}
        




{/* ads */}

<div className="related-ads">
  <div className="ad-card">
    <div>
<img src={mobile} alt="" />
    <h5>Samsung Galaxy Note 20 Ultra</h5>
    <h6 className="locat">DC Chowk, Rahim Yar Khan</h6>
        <p className="time">6 days ago</p>

    <p className="price">RS. 144500  </p>
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

    <p className="price">RS. 144500  </p>
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

    <p className="price">RS. 144500  </p>
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

    <p className="price">RS. 144500  </p>
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
  )
}

export default Myadsfavourities