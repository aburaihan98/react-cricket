import { MdOutlineDelete } from "react-icons/md";

export default function Selected({
  selectedPlayers,
  handleSelected,
  handleDeletePlayer,
}) {
  return (
    <>
      <div>
        {selectedPlayers?.map((player) => (
          <div
            key={player?.playerId}
            className="p-6 border rounded-2xl flex justify-between items-center mb-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-20 h-20">
                <img
                  className="w-full h-full rounded-full"
                  src={player?.image}
                  alt={player?.name}
                />
              </div>
              <div>
                <h6 className="font-semibold text-2xl mb-3">{player?.name}</h6>
                <p className="text-[#13131399]">{player?.battingType}</p>
              </div>
            </div>
            <button
              onClick={() => handleDeletePlayer(player)}
              className="text-[#F14749] text-3xl"
            >
              <MdOutlineDelete />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleSelected}
        className="p-0.5 border border-[#131313] rounded-2xl mt-6"
      >
        <div className="py-3.5 px-5  rounded-2xl bg-[#E7FE29] font-bold">
          Add More Player
        </div>
      </button>
    </>
  );
}
