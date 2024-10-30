import { useEffect, useState } from "react";
import Player from "./Player";

export default function AllPlayer({ handleAddToPlayer, handleDecrementCoin }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./players.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data?.players))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-8 space-y-4 lg:space-y-0 lg:grid grid-cols-3 gap-6">
      {players.map((player) => (
        <Player
          key={player?.playerId}
          player={player}
          handleAddToPlayer={handleAddToPlayer}
          handleDecrementCoin={handleDecrementCoin}
        ></Player>
      ))}
    </div>
  );
}
