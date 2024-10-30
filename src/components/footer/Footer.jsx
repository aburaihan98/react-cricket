import FooterLogo from "../../assets/images/logo-footer.png";

export default function Footer() {
  return (
    <div className="bg-[#06091A] pt-[100px] lg:pt-[200px] relative ">
      <div className="w-11/12 m-auto">
        <div className="mb-16 pt-9">
          <img className="m-auto" src={FooterLogo} alt="footer logo" />
        </div>
        <div className="lg:flex justify-between  space-y-8 lg:space-y-0">
          <div className="text-white">
            <h6 className="font-semibold mb-3 lg:mb-4 text-lg ">About Us</h6>
            <p className="text-[#FFFFFF99]">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>
          <div className="text-white">
            <h6 className="font-semibold mb-3 lg:mb-4 text-lg ">Quick Links</h6>
            <ul className=" list-disc list-inside text-[#FFFFFF99]">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="text-white ">
            <h6 className="font-semibold mb-3 lg:mb-4 text-lg ">Subscribe</h6>
            <p className="text-[#FFFFFF99] mb-5">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex justify-center items-center">
              <input
                className=" py-3.5 px-6 lg:px-[30px] border rounded-s-2xl text-[#13131366]"
                type="text"
                placeholder="Enter your email"
              />
              <button className="font-bold py-3.5 px-6 lg:px-[30px] bg-gradient-to-r from-[#ed8ead] to-[#e4bf76]  border rounded-e-2xl ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="py-8 mt-[72px] text-center text-[#FFFFFF99] border-t">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
}
