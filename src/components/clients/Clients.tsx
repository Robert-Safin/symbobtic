"use client";
import Image from "next/image";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="px-6 mb-6 ">
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:space-x-40">
        <Waypoint onEnter={() => setIsVisible(true)}>
          <h1
            className={`serviceHeader font-inter mb-20  transition-all duration-1000 ${
              isVisible
                ? "animate-fade-up animate-duration-1000 animate-delay-100"
                : ""
            }`}
          >
            clients
          </h1>
        </Waypoint>
        <div className="">
          <div className="flex flex-col py-4 group h-[100px] hover:h-[210px] md:hover:h-[550px] translate-all ease-out duration-1000 border-b overflow-hidden">
            <div className="flex flex-row justify-between items-center">
              <p className="text w-80">UrbanEcho Blueprint</p>
              <div className="hidden md:flex w-full ml-20">
                <p className="text group-hover:text-highlight">copyrighting</p>
              </div>
              <div className="relative w-10 h-10 md:right-4">
                <div
                  className="absolute w-10 h-2 bg-white top-4 rotate-0
          translate-all duration-500 group-hover:rotate-45 group-hover:bg-highlight
          "
                />
                <div
                  className="absolute rotate-90 w-10 h-2 bg-white top-4
          translate-all duration-500 group-hover:-rotate-45 group-hover:bg-highlight
          "
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Image
                src="/img/clients/client1.png"
                width={1000}
                height={1000}
                alt="client"
                className="h-[150px] md:w-[720px] md:h-[440px] mt-4 object-cover opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] delay-500 "
              />
            </div>
          </div>
          <div className="flex flex-col py-4 group h-[100px] hover:h-[210px] md:hover:h-[550px] translate-all ease-out duration-1000 border-b overflow-hidden">
            <div className="flex flex-row justify-between items-center">
              <p className="text w-80">PaperWing</p>
              <div className="hidden md:flex w-full ml-20">
                <p className="text group-hover:text-highlight">
                  brand, copywriting, SEO, social media, web design
                </p>
              </div>
              <div className="relative w-10 h-10 md:right-4">
                <div
                  className="absolute w-10 h-2 bg-white top-4 rotate-0
          translate-all duration-500 group-hover:rotate-45 group-hover:bg-highlight
          "
                />
                <div
                  className="absolute rotate-90 w-10 h-2 bg-white top-4
          translate-all duration-500 group-hover:-rotate-45 group-hover:bg-highlight
          "
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Image
                src="/img/clients/client3.png"
                width={1000}
                height={1000}
                alt="client"
                className="h-[150px] md:w-[720px] md:h-[440px] mt-4 object-cover opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] delay-500 "
              />
            </div>
          </div>
          <div className="flex flex-col py-4 group h-[100px] hover:h-[210px] md:hover:h-[550px] translate-all ease-out duration-1000 border-b overflow-hidden">
            <div className="flex flex-row justify-between items-center">
              <p className="text w-80">ZenithWave Labs</p>
              <div className="hidden md:flex w-full ml-20">
                <p className="text group-hover:text-highlight">
                  copywriting, social media, web design
                </p>
              </div>
              <div className="relative w-10 h-10 md:right-4">
                <div
                  className="absolute w-10 h-2 bg-white top-4 rotate-0
          translate-all duration-500 group-hover:rotate-45 group-hover:bg-highlight
          "
                />
                <div
                  className="absolute rotate-90 w-10 h-2 bg-white top-4
          translate-all duration-500 group-hover:-rotate-45 group-hover:bg-highlight
          "
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Image
                src="/img/clients/client2.png"
                width={1000}
                height={1000}
                alt="client"
                className="h-[150px] md:w-[720px] md:h-[440px] mt-4 object-cover opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] delay-500 "
              />
            </div>
          </div>
          <div className="flex flex-col py-4 group h-[100px] hover:h-[210px] md:hover:h-[550px] translate-all ease-out duration-1000 border-b overflow-hidden">
            <div className="flex flex-row justify-between items-center">
              <p className="text w-80">EcoChic Threads</p>
              <div className="hidden md:flex w-full ml-20">
                <p className="text group-hover:text-highlight">
                  brand, copywriting
                </p>
              </div>
              <div className="relative w-10 h-10 md:right-4">
                <div
                  className="absolute w-10 h-2 bg-white top-4 rotate-0
          translate-all duration-500 group-hover:rotate-45 group-hover:bg-highlight
          "
                />
                <div
                  className="absolute rotate-90 w-10 h-2 bg-white top-4
          translate-all duration-500 group-hover:-rotate-45 group-hover:bg-highlight
          "
                />
              </div>
            </div>
            <div className="w-full flex justify-end">
              <Image
                src="/img/clients/client4.png"
                width={1000}
                height={1000}
                alt="client"
                className="h-[150px] md:w-[720px] md:h-[440px] mt-4 object-cover opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] delay-500 "
              />
            </div>
          </div>
          <div className="w-full justify-center flex md:justify-start">
            <button className=" text-white text-2xl hover:bg-highlight border hover:border-highlight py-7 px-10 w-[270px] md:w-[450px] rounded-full my-20">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
