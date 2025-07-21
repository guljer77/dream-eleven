import React from "react";
import { FaFlag, FaUser } from "react-icons/fa";

function Player({ player, singlePlayer }) {
  return (
    <div className="border border-gray-300 shadow-md rounded-[5px] p-3">
      <img className="rounded-[5px]" src={player.image} alt="" />
      <div className="pt-3 flex items-center gap-3">
        <span>
          <FaUser />
        </span>
        <h4>{player.name}</h4>
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[14px] font-light text-gray-500">
          <span>
            <FaFlag />
          </span>
          <h6>{player.country}</h6>
        </div>
        <div>
          <h4 className="text-[14px] text-black font-medium bg-gray-200 w-[120px] text-center rounded-sm h-auto px-3 py-[4px]">
            {player.position}
          </h4>
        </div>
      </div>
      <hr className="border-t block border-gray-300 " />
      <h4 className="py-4 text-[16px] font-medium text-gray-500">Batting Position: {player.hand}</h4>
      <div className="py-3 flex items-center justify-between">
        <div>
          <h6 className="text-[14px] font-medium">Price: {player.price}</h6>
        </div>
        <div>
          <button onClick={()=> singlePlayer(player)} className="cursor-pointer border border-gray-300 px-3 py-1.5 rounded-sm text-[14px]">Choose Player</button>
        </div>
      </div>
    </div>
  );
}

export default Player;
