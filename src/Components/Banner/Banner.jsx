import React from "react";
import "../Banner/Banner.css";
import Image from "../../assets/images/banner2.png";

function Banner({addMoney}) {
  return (
    <div className="mt-[96px] bg-black">
      <div className="banner-image flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img className="" src={Image} alt="" />
          </div>
          <div>
            <h2 className="text-white md:text-[40px] font-bold text-[20px] py-3">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h2>
            <p className="text-white/80 pb-3 text-[16px] md:text-[24px] font-medium">
              Beyond Boundaries Beyond Limits
            </p>
            <button onClick={addMoney} className="bg-yellow-400 text-[15px] font-normal cursor-pointer px-5 py-2 rounded-[3px]">Claim Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
