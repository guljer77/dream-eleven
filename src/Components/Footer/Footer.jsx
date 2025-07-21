import React from "react";
import Logo from "../../assets/images/logo2.png";

function Footer() {
  return (
    <div className="w-full bg-[#06091A] h-auto">
      <div className="pt-[120px] md:px-20 px-3 pb-10">
        <div className="flex items-center justify-center pb-[40px]">
          <img src={Logo} alt="" />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 text-white">
          <div>
            <h4 className="text-[16px] font-medium pb-3">About Us</h4>
            <p className="text-[14px] font-light">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h4 className="text-[16px] font-medium pb-3">Quick Link</h4>
            <ul className="pl-3">
              <li className="pb-2">
                <a href=""></a>Home
              </li>
              <li className="pb-2">
                <a href=""></a>Services
              </li>
              <li className="pb-2">
                <a href=""></a>About
              </li>
              <li className="pb-2">
                <a href=""></a>Contact
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[16px] font-medium pb-3">Subscribe</h4>
            <p className="text-[14px] font-light pb-5">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex items-center">
              <input
                className="bg-white text-black text-[14px] rounded-l-sm font-light px-2 py-[6px]"
                type="email"
                placeholder="Enter Your Email"
              />
              <input
                className="rounded-r-2xl cursor-pointer block bg-gradient-to-r text-[14px] font-light from-yellow-300 via-pink-300 to-rose-400 shadow-md px-3 py-[6.5px]"
                type="submit"
                value="Subscribe"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-100" />
      <div className="py-3 text-white">
        <p className="text-[14px] md:text-[16px] font-normal text-center">&copy;2025 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
