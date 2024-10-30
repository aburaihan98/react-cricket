import { AiOutlineDollar } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../../assets/images/logo.png";

export default function Navbar({ coin, handleNavItems }) {
  return (
    <div className="sticky top-0 backdrop-blur-3xl z-20">
      <div className="w-11/12 m-auto pt-6 lg:pt-12 pb-6 flex justify-between items-center ">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div className="flex items-center gap-6 lg:gap-12">
          <div className=" hidden lg:block">
            <ul className=" flex items-center gap-12 text-[#131313B3]">
              <li>Home</li>
              <li>Fixture</li>
              <li>Teams</li>
              <li>Schedules</li>
            </ul>
          </div>
          <button className="font-semibold py-4 px-5 text-xl border rounded-xl flex justify-center items-center gap-3">
            <p>{coin} Coin</p>
            <div className="w-6 h-6 text-2xl bg-[#f29d0a] text-white rounded-full">
              <AiOutlineDollar />
            </div>
          </button>
          <div onClick={handleNavItems} className="text-3xl lg:hidden">
            <RiMenu3Fill />
          </div>
        </div>
      </div>
    </div>
  );
}
