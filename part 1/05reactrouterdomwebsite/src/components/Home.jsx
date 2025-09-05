import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 pb-[40px] px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-[400px] space-y-8 lg:space-y-0 mt-[5%] w-full max-w-7xl">
        <div className="image order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1648737966636-2fc3a5fffc8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Laptop"
            className="w-full max-w-[500px] h-[250px] md:h-[400px] object-cover rounded-lg"
          />
        </div>

        <div className="writting flex flex-col items-center lg:items-end text-center lg:text-right order-1 lg:order-2">
          <h2 className="text-[32px] md:text-[48px] text-black font-bold mb-4">
            LOREM IPSUM
          </h2>

          <button
            type="button"
            className="px-6 md:px-10 py-2 rounded-lg
             bg-red-600 text-white font-[500] leading-6
              active:opacity-50 cursor-pointer hover:bg-red-700 transition-colors"
          >
            Download Now
          </button>
        </div>
      </div>

      <div className="card flex flex-col space-y-[20px] md:space-y-[40px] justify-center items-center mt-[100px] md:mt-[200px]">
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Not Found"
          className="w-full max-w-[384px] h-[200px] md:h-[271.781px] object-cover rounded-lg"
        />
        <h2 className="text-[28px] md:text-[48px] font-[500] leading-8 md:leading-12 text-center px-4">
          Lorem Ipsum Yojo
        </h2>
      </div>
    </div>
  );
};

export default Home;
