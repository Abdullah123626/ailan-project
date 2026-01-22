import React from 'react'
import asaan from "../../assets/images/asaan.png";
import phone from "../../assets/images/phone.png";
import mobile from "../../assets/images/mobiles.png";

const Phones = () => {
  return (
    <div>
        
  <header classNameName="header">
    <div classNameName="left-section">
      {/* <img src={asaan} alt="asaan" className="logo"> */}
      <img src={asaan} alt="asaan" classNameName='logo' />

      <div classNameName="search-bar">
        {/* <input type="text" placeholder="Rahim Yar Khan" className="input location"> */}
        <input type="text" placeholder='Rahim Yar khan' classNameName='input location' />
        <div classNameName="divider"></div>
        {/* <input type="text" placeholder="Find cars, Mobile phones and more.." className="input search"> */}
        <input type="text" placeholder='Find cars, Mobile phones and more..' classNameName='input search' />
        <button classNameName="search-btn">
          <i classNameName="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>

    <div classNameName="right-section">
      <i classNameName="fa-regular fa-comment-dots icon"></i>
      <i classNameName="fa-regular fa-bell icon"></i>
      {/* <img src="data:image/jpeg;base64,/9j/4AAQSkZ..." alt="profile" className="profile-img"> */}
      <img src={phone} alt="profile" classNameName='profile-img' />
      <button classNameName="sell-btn">
        <i classNameName="fa-solid fa-plus"></i> Sell
      </button>
    </div>
  </header>

  <div classNameName="categories-row">
    <button classNameName="all-cat-btn">
      All Categories <i classNameName="fa-solid fa-chevron-down"></i>
    </button>

    <div classNameName="other-categories">
      <button classNameName="category-btn">Mobile Phones</button>
      <button classNameName="category-btn">Cars</button>
      <button classNameName="category-btn">Motorcycles</button>
      <button classNameName="category-btn">Houses</button>
      <button classNameName="category-btn">TV / Video / Audio</button>
      <button classNameName="category-btn">Tablets</button>
      <button classNameName="category-btn">Plots</button>
    </div>
  </div>




  <div classNameName="container">
    
    {/* <aside className="sidebar"> */}
    <aside classNameName='sidebar'>
  <p className="breadcrumb">Home</p>
  <h1>Mobiles in Pakistan</h1>

  <h3 classNameName="filter-title">Filters</h3>
  

  <h4 classNameName="section-title">CATEGORIES</h4>
  <p classNameName="all-cat">All categories</p>
  <h5 classNameName="sub-title">Mobiles</h5>
  <ul classNameName="list">
    <li>Mobile Phones <span>(236231)</span></li>
    <li>Accessories <span>(24770)</span></li>
    <li>Smart Watches <span>(9433)</span></li>
    <li>Tablets <span>(5418)</span></li>
  </ul>

  <h4 classNameName="section-title">LOCATIONS</h4>
  <select classNameName="location-select">
    <option>Pakistan</option>
  </select>
  <h5 classNameName="sub-title">Pakistan</h5>
  <ul classNameName="list">
    <li>Punjab <span>(177301)</span></li>
    <li>Sindh <span>(59875)</span></li>
    <li>Khyber Pakhtunkhwa <span>(19057)</span></li>
    <li>Islamabad Capital <span>(15804)</span></li>
    <li>Balochistan <span>(2211)</span></li>
  </ul>
  <a href="#" classNameName="view-more">View more</a>

  <h4 classNameName="section-title">Price</h4>
  {/* <input type="range" min="0" max="200000" className="price-range"> */}
  <input type="range" min="0" max="200000" classNameName='price-range'  />
  <div classNameName="price-row">
    <span>Price: $0 - $200000</span>
    <button classNameName="filter-btn">Filter</button>
  </div>

  <h4 classNameName="section-title">Brand</h4>
  <ul classNameName="list">
    <li>Apple iPhone <span>(75791)</span></li>
    <li>Samsung Mobile <span>(32518)</span></li>
    <li>Vivo <span>(21409)</span></li>
    <li>Infinix <span>(18998)</span></li>
    <li>OPPO <span>(18534)</span></li>
  </ul>
  <a href="#" classNameName="view-more">View more</a>

  <h4 classNameName="section-title">Condition</h4>
  <ul classNameName="list">
    <li>Used <span>(183349)</span></li>
    <li>New <span>(40314)</span></li>
    <li>Open Box <span>(13737)</span></li>
    <li>For Parts or Not Working <span>(1828)</span></li>
    <li>Refurbished <span>(524)</span></li>
  </ul>

  


    

</aside>
</div>
  <main classNameName="content">
      <div classNameName="products-header">
        <h2>Related to your Category Mobile Phones</h2>
        <div classNameName="sort-box">
          <span>Sort by:</span>
          <select>
            <option>Newly listed</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div classNameName="products-grid">
                <a href="details.html">
  <div classNameName="product-card">
    
    {/* <img src="./src/images/mobile1.png" alt=""> */}
<img src={mobile} alt="" />



    <h4>Iphone 12 Pro Max with box</h4>
    <p classNameName="locations">DC Chowk, Rahim Yar Khan</p>

    <div classNameName="price-box">
      <span classNameName="new-price">RS. 114,000</span>
    </div>

    <p classNameName="time">6 days ago</p>

    <div classNameName="btns">
      <button classNameName="Call">Call</button>
      <button classNameName="Chat">Chat</button>
    </div>

  </div>
</a>


         <a>
        <div classNameName="product-card">
<img src={mobile} alt="" />
      <h4>Samsung Galaxy Note 20 Ultra</h4>

          <p classNameName="Locations">DC Chowk, Rahim Yar Khan</p>
          <div classNameName="price-box">
            <span classNameName="new-price">₹32,999</span>
            <span classNameName="old-price">₹74,999</span>
          </div>
          <p classNameName="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>



  <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
          <img src={mobile} alt="" />
          <h4>Samsung Galaxy Note 20 Ultra</h4>
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>





          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
         <h4>Samsung Galaxy Note 20 Ultra</h4>
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>





          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <h4>Samsung Galaxy Note 20 Ultra</h4>
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>




          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <h4>Samsung Galaxy Note 20 Ultra</h4>
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>



          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>




          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
          <img src={mobile} alt="" />
                    <h4>Samsung Galaxy Note 20 Ultra</h4>
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>




          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>



          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>




          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <h4>Samsung Galaxy Note 20 Ultra</h4>
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>




          <a>
        <div className="product-card">
          <span className="discount">56% OFF</span>
<img src={mobile} alt="" />
          <p className="Locations">DC Chowk, Rahim Yar Khan</p>
          <div className="price-box">
            <span className="new-price">₹32,999</span>
            <span className="old-price">₹74,999</span>
          </div>
          <p className="time">6 days ago</p>
          <div className="btns">
            <button className="Call">Call</button>
            <button className="Chat">Chat</button>
          </div>
        </div>
        </a>











      </div>

    </main>
               <button className="reload">Load More</button>


    </div>
  )
}

export default Phones