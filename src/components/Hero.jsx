import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] m-8 bg-black rounded-xl flex flex-col shadow-2xl">
      <h1 className="text-[7rem] pl-4 font-bold text-white ">RENT EAZY</h1>
      <p className="text-4xl font-serif leading-[2.5rem] pl-20 text-gray-400">
        Rent Eazy is a user-friendly platform that simplifies the process of
        renting and listing properties. It connects landlords and renters with
        seamless navigation and secure transactions.
      </p>
      <div className="flex justify-between mt-8 px-40">
        <div className="text-gray-400 text-4xl my-auto px-40 text-center leading-[4rem] max-w-[46rem]">
          Now buy/rent a Property with just a single{" "}
          <span className="text-white text-5xl">CLICK.</span>
        </div>
        <img src="/images/pexels.jpg" alt="" className="w-[25rem] rounded-xl" />
      </div>
    </div>
  );
};

export default Hero;
