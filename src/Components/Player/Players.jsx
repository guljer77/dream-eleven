import React, { useState } from "react";
import Player from "./Player";
import SelectedPlayer from "./SelectedPlayer";

function Players({ players, singlePlayer, select, deletePlayer }) {
  const [tab, setTab] = useState("available");
  return (
    <div className="py-20">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-[20px] font-bold md:text-[28px]">
            {
              tab === "available" ? "Available Players":`Selected Players ${select.length} / 6`
            }
          </h4>
        </div>
        <div>
          <button
            className={`px-4 py-2 ${
              tab === "available"
                ? "bg-yellow-500 text-black"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setTab("available")}
          >
            Available
          </button>
          <button
            className={`px-4 py-2 ${
              tab === "selected"
                ? "bg-yellow-500 text-black"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setTab("selected")}
          >
            Selected {select.length}
          </button>
        </div>
      </div>
      <div className="pt-4">
        {tab === "available" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {players.map(player => (
              <Player key={player.id} player={player} singlePlayer={singlePlayer} />
            ))}
          </div>
        ) : (
          <div>
            {
              select.map(newSelect => (<SelectedPlayer key={newSelect.id} newSelect={newSelect} deletePlayer={deletePlayer} />))
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Players;
