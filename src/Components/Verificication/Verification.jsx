import React from 'react'
import asaan from "../../assets/images/asaan.png";
import transparent from "../../assets/images/transperantphone.png";
import "./Verifications.css";

const Verification = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm flex flex-col items-center">

        <img src={asaan} alt="" className="w-20 h-8" />

        <img src={transparent} alt="" className="w-20 h-20 mt-8" />

        <h3 className="mt-6 text-[20px] font-[600]">Verification</h3>

        <p className="text-[12px] text-[#858997] font-[400] mt-2">
          We will send you a One time Password
        </p>
        <p className="text-[12px] text-[#858997] font-[400]">
          on your Phone Number
        </p>

        {/* Input Section */}
        <div className="w-[80%] mt-6">
          <p className="text-[12px] text-black font-[400] mb-1">
            Mobile Phone Number
          </p>

          <div className="flex items-center border border-gray-300 rounded-[10px] px-3 py-2 focus-within:ring-2 focus-within:ring-gray-100 mt-3">
            <span className="text-gray-500 mr-2">+92 </span>
            <input
              type="tel"
              placeholder="XXXXXX"
              className="w-full focus:outline-none "
            />
          </div>
        </div>

<button className="Button" >Get Otp</button>
      </div>













    </div>
  )
}

export default Verification;
