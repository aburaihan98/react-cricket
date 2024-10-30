import { FaFlag } from "react-icons/fa6";

export default function Player({
  player,
  handleAddToPlayer,
  handleDecrementCoin,
}) {
  const { name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;

  return (
    <div className="p-6 border rounded-2xl shadow-lg">
      <div className="mb-6 h-[240px]">
        <img
          className="w-full h-full rounded-2xl"
          src={image}
          alt="viratkohli"
          border="0"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div>
          <img src="https://img.icons8.com/ios11/30/user-male.png" alt="icon" />
        </div>
        <h4>{name}</h4>
      </div>
      <div className="flex justify-between items-center pb-4 border-b mb-4">
        <div className="flex items-center gap-3 text-[#4e4d4db3]">
          <FaFlag />
          <h4 className="">{country}</h4>
        </div>
        <button className="py-[9px] px-4 bg-[#1313130D] border rounded-xl">
          {role}
        </button>
      </div>
      <h5 className="font-bold mb-4">Rating</h5>
      <div className="flex justify-between items-center mb-3">
        <h6 className="font-semibold text-[#131313B3]">{battingType}</h6>
        <h6 className="text-[#131313B3]">{bowlingType}</h6>
      </div>
      <div className="flex justify-between items-center mb-3">
        <h6 className="font-semibold text-[#131313B3]">
          Price: ${biddingPrice}
        </h6>
        <button
          onClick={() => {
            handleAddToPlayer(player, biddingPrice),
              handleDecrementCoin(biddingPrice);
          }}
          className="py-[9px] px-4 border rounded-xl bg-slate-300 hover:bg-[#E7FE29]  font-bold"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
}
