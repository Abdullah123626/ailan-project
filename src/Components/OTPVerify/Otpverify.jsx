import React from 'react'
import asaan from "../../assets/images/asaan.png";
import transparent from "../../assets/images/transperantphone.png";
import "./Otpverify.css";

const Otpverify = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm flex flex-col items-center">

        <img src={asaan} alt="" className="w-20 h-8" />

        <img src={transparent} alt="" className="w-20 h-20 mt-8" />

        <h3 className="mt-6 text-[20px] font-[600]">Verification</h3>

        <p className="text-[12px] text-[#858997] font-[400] mt-2">
Enter the Code from the SMS we 
        </p>
        <p className="text-[12px] text-[#858997] font-[400]">
sent to +92 3003303033
        </p>


<p className="text-[12px] text-blue-500 font-[400] mt-5">2:32</p>
        {/* Input Section */}


<div className="flex gap-3 justify-center mt-3">
  {[...Array(6)].map((_, index) => (
    <input
      key={index}
      type="text"
      maxLength="1"
      className="w-10 h-10 text-center border-2 border-blue-500 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  ))}
</div>



<p className="text-[12px] text-[#858997] font-[400] mt-4">
  Don’t receive the OTP? <span className="text-blue-500 cursor-pointer">Resend</span>
</p>
        

<button className="Button " >Submit</button>
      </div>













    </div>
  )
}

export default Otpverify;
