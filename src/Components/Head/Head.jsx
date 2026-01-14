import React, { useEffect, useState } from 'react'
import "./Head.css"
import phone from "../../assets/images/phone.png";
import asaan from "../../assets/images/asaan.png";

import { FaSearch } from "react-icons/fa";
import { FaRegCommentDots, FaRegBell } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import mobile from "../../assets/images/mobiles.png";
import appbanner from "../../assets/images/appbannerfoter.png";
import blackbaanner from "../../assets/images/blackbanner.png";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { BACKENDURL } from '../../services/variables';


const Head = () => {

const location = useLocation();
const productId = location?.state?.productId;
const [singlePhone, setSinglePhone] = useState([]);

const FetchMobiles = async()=>{
  try {
const reponse = await axios.get(BACKENDURL+`/product/view-one${productId}`)    
setSinglePhone(reponse?.data?.data)
  } catch (error) {
    console.log(error)
    
  }
}


useEffect(()=>{
if(
  productid
)

FetchMobiles()
},[])





  return (
    <div className='main-div'>

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





 <div className="product-page">
  <div className="gallery">
<img src={singlePhone?.product_owners?.owner_image} alt="" className='main-img' />
    <div className="thumbs">
<img src={mobile} alt="" />  
<img src={mobile} alt="" />
<img src={mobile} alt="" />
<img src={mobile} alt="" />
    </div>
  </div>

  <div className="product-info">
    <h1>Samsung Galaxy Note 20 Ultra</h1>
    <h2 className="price">Rs. 1,44,500</h2>
    <p className="time">6 days ago</p>

    <div className="seller-box">
      <div className="seller">
<img src={phone} alt="" />        <div>
          <h4>Usman Saeed</h4>
          <p>Member since Aug 2017</p>
          <a href="#">See profile</a>
        </div>
      </div>

      <button className="btn phone">Show phone number</button>
<a href="chat.html">
  <button className="btn chat">Chat</button>
</a>
    </div>

    <div className="locate">
      <h4>Location</h4>
      <p>Dharampura, Lahore</p>

      <div className="Add">
      <small>Ad ID 1071950120</small>
      <p class="Report">Report this add</p>

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
    <h3>Details</h3>
    <p>
      Samsung Fold 2, Note 20 Ultra available.  
      PTA approved and non-PTA. SIM time available.  
      Excellent condition. Original accessories included.
    </p>
  </div>
</div>


    </div>


<h3 className="section-title">Related Ads</h3>

<div className="related-ads">
  <div class="ad-card">
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

export default Head