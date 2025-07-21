import React from "react";
import { RiCoinsFill } from "react-icons/ri";
import Logo from "../../assets/images/logo.png";

function Navbar({money}) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-md md:px-20 px-5 py-3">
      <div className="flex items-center justify-between">
        <div>
          <a href="">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="flex items-center gap-5">
          <nav className="md:block hidden">
            <ul className="flex items-center space-x-[40px]">
              <li className="text-[16px] font-medium">
                <a href="">Home</a>
              </li>
              <li className="text-[16px] font-medium">
                <a href="">Fixture</a>
              </li>
              <li className="text-[16px] font-medium">
                <a href="">Teams</a>
              </li>
              <li className="text-[16px] font-medium">
                <a href="">Schedules</a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h4 className="text-[16px] border py-2 px-4 justify-center rounded-[3px] flex items-center border-gray-300 w-[180px]">
              {money} Coin
              <RiCoinsFill className="text-orange-400 text-[24px]" />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
