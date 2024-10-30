import { useState } from "react";
import { toast } from "react-toastify";
import AllPlayer from "./AllPlayer";
import Selected from "./Selected";
import Subscribe from "./Subscribe";

export default function Main({ coin, handleDecrementCoin }) {
  const [selected, setSelected] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // add player
  const handleAddToPlayer = (player, biddingPrice) => {
    // coin validation
    if (coin >= biddingPrice) {
      const findded = selectedPlayers.find(
        (findPlayer) => findPlayer?.playerId === player?.playerId
      );
      // exist player validation
      if (findded) {
        toast.error("Player already selected", {
          position: "top-center",
        });
      } else {
        // 6 player validation
        if (selectedPlayers?.length > 5) {
          toast.error("Six player already added", {
            position: "top-center",
          });
        } else {
          setSelectedPlayers([...selectedPlayers, player]);
          toast.success(`Cong rates !! ${player?.name} is now in your squad`, {
            position: "top-center",
          });
        }
      }
    } else {
      toast.error("Not enough  mony to buy this player. Claim some Credit", {
        position: "top-center",
      });
    }
  };

  // delete player
  const handleDeletePlayer = (deletePlayer) => {
    const remainingPlayer = selectedPlayers.filter(
      (player) => player?.playerId !== deletePlayer?.playerId
    );

    toast.warning("Player removed", {
      position: "top-center",
    });

    setSelectedPlayers(remainingPlayer);
  };

  return (
    <>
      <div className="w-11/12 m-auto mt-24 ">
        {/* Available Players */}
        <section className="">
          <div className="flex justify-between  items-center mb-8">
            {selected ? (
              <h3 className="font-bold text-xl lg:text-3xl">
                Available Players
              </h3>
            ) : (
              <h3 className="font-bold text-xl lg:text-3xl">
                Selected Player ({selectedPlayers?.length}/6)
              </h3>
            )}
            <div>
              <button
                onClick={() => setSelected(true)}
                className={`py-3.5 px-2 lg:px-[30px]  bg-[${
                  selected ? "#E7FE29" : "#FFFFFF"
                }] border rounded-s-xl ${selected ? "font-bold" : ""}`}
              >
                Available
              </button>
              <button
                onClick={() => setSelected(false)}
                className={`py-3.5 px-2 lg:px-[30px]  bg-[${
                  selected ? "#FFFFFF" : "#E7FE29"
                }]  border rounded-e-xl ${selected ? "" : "font-bold"}`}
              >
                Selected ({selectedPlayers?.length})
              </button>
            </div>
          </div>
          {selected ? (
            <AllPlayer
              handleAddToPlayer={handleAddToPlayer}
              handleDecrementCoin={handleDecrementCoin}
            ></AllPlayer>
          ) : (
            <Selected
              selectedPlayers={selectedPlayers}
              handleSelected={() => setSelected(true)}
              handleDeletePlayer={handleDeletePlayer}
            ></Selected>
          )}
        </section>
        {/* Subscribe to our Newsletter */}
        <section className="z-10 relative -bottom-[100px] lg:-bottom-[200px]">
          <Subscribe></Subscribe>
        </section>
      </div>
    </>
  );
}
