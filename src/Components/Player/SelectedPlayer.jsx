import React from "react";
import { FaTrash } from "react-icons/fa";

function SelectedPlayer({ newSelect, deletePlayer }) {
  return (
    <div className="flex items-center justify-between border border-gray-300 mb-3 py-2 px-3 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <div>
          <img className="w-[60px] h-[60px]" src={newSelect.image} alt="" />
        </div>
        <div>
          <h4>Players Name: {newSelect.name}</h4>
          <h6 className="text-[14px] font-light">Batting Possition: {newSelect.hand}</h6>
        </div>
      </div>
      <div>
        <span onClick={()=>deletePlayer(newSelect)} className="cursor-pointer w-[30px] h-[30px]"><FaTrash className="text-[20px]" /></span>
      </div>
    </div>
  );
}

export default SelectedPlayer;
