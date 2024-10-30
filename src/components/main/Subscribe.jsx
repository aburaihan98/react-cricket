import BgShadow from "../../assets/images/bg-shadow.png";

export default function Subscribe() {
  return (
    <div className="bg-white rounded-3xl">
      <div className="p-6 border rounded-3xl">
        <div
          className="py-20 w-full rounded-3xl"
          style={{
            backgroundImage: `url(${BgShadow})`,
          }}
        >
          <h2 className="font-bold text-3xl mb-4 text-center">
            Subscribe to our Newsletter
          </h2>
          <p className="font-medium text-xl mb-6 text-center text-[#131313B3]">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="lg:flex items-center gap-4 justify-center text-center">
            <input
              className=" lg:w-96 w-11/12 py-[18px] px-[30px] border rounded-2xl text-[#13131366]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="mt-4 lg:mt-0 font-bold py-[18px] px-[30px] bg-gradient-to-r from-[#ed8ead] to-[#e4bf76]  border rounded-2xl ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
