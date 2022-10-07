import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="bg-rose-600 text-white flex justify-center align-middle px-10 py-5 font-serif 2xl:max-w-7xl 2xl:mx-auto ">
        <div className=" text-xl  my-auto w-[30%] basis-2/3 grow max-w-xl">
          <h1 className=" font-bold text-2xl md:text-3xl lg:text-5xl mb-3">
            Welcome to River Walk
          </h1>
          <p className="md:text-2xl">
            The most chilled place to meet friends and catch up on your tech
            news.
          </p>
          <p className="mt-2 md:text-2xl">
            Join the community by the river today.
          </p>
        </div>
        <div>
          <p className="hidden sm:block text-[15rem] md:text-[20rem] basis-1/3 grow">
            RW
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
