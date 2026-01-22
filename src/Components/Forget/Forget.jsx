import React from 'react'
import asaan from "../../assets/images/asaan.png";
import transparent from "../../assets/images/transperantphone.png";
// import "./Verifications.css";

const Forget = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm flex flex-col items-center">

        <img src={asaan} alt="" className="w-20 h-8" />

        {/* <img src={transparent} alt="" className="w-20 h-20 mt-8" /> */}

        <h3 className="mt-6 text-[20px] font-[600]">Forget Account </h3>

        <p className="text-[12px] text-[#858997] font-[400] ">
Enter your email and password     </p>
        

        {/* Input Section */}
        <div className="w-[80%] mt-6">
          <p className="text-[12px] text-black font-[400] mb-1">
            Email
          </p>

          <div className="flex items-center border border-gray-300 rounded-[10px] px-3 py-2 focus-within:ring-2 focus-within:ring-gray-100 mt-3">
            {/* <span className="text-gray-500 mr-2">+92 </span> */}
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full focus:outline-none "
            />
          </div>
        </div>




        {/* password */}

        <div className="w-[80%] mt-6">
          <p className="text-[12px] text-black font-[400] mb-1">
            Password
          </p>

          <div className="flex items-center border border-gray-300 rounded-[10px] px-3 py-2 focus-within:ring-2 focus-within:ring-gray-100 mt-3">
            {/* <span className="text-gray-500 mr-2">+92 </span> */}
            <input
              type="text"
              placeholder="Enter Password"
              className="w-full focus:outline-none "
            />
          </div>
        </div>


        

<button className="Button" >Forget</button>
      </div>













    </div>
  )
}

export default Forget;
