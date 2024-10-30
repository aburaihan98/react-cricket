import BannerImage from "../../assets/images/banner-main.png";
import BgShadow from "../../assets/images/bg-shadow.png";

export default function Hero({ handleClaimFreeCredit }) {
  return (
    <div className="w-11/12 m-auto bg-black rounded-xl">
      <div
        className="h-auto w-12/12 p-4 lg:p-12 rounded-xl"
        style={{ backgroundImage: `url(${BgShadow})` }}
      >
        <div>
          <img className="m-auto" src={BannerImage} alt="banner image" />
        </div>
        <h1 className="font-bold text-2xl lg:text-[40px] mt-6 mb-4 text-center text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="font-medium text-2xl mb-8 text-center text-[#FFFFFFB3]">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="text-center">
          <button
            onClick={() => handleClaimFreeCredit(6000000)}
            className="py-3.5 px-5 font-bold rounded-xl bg-gradient-to-r from-[#ed8ead] to-[#e4bf76] "
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}
