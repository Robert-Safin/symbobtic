"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [enteredY, setEnteredY] = useState(0);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative mb-20 ">
      <Waypoint
        onEnter={(e) => {
          setIsVisible(true);
          console.log(e.viewportBottom);

          setEnteredY(e.viewportBottom);
        }}
      >
        <div className="relative lg:flex lg:justify-start w-full h-[420px] md:h-[590px] lg:w-[720px] overflow-hidden">
          <Image
            src="/quote.png"
            width={1000}
            height={1000}
            alt=""
            className="object-cover -top-36 md:-top-48 absolute transition-all delay-0 duration-0"
            style={{
              transform: isVisible
                ? `translateY(${((offsetY - enteredY) / 100) * 10}px)`
                : `translateY(0)`,
            }}
          />
        </div>
      </Waypoint>

      <h1 className=" quoteHeader top-24 absolute right-6 z-40 text-right max-w-[430px] md:max-w-[1200px] lg:left-20">
        Man cannot discover new oceans unless he has the courage to {""}
        <span className="relative">
          lose {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-8 md:bottom-2"
          />
        </span>
        <span className="relative">
          sight {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 left-0
            md:h-8 md:bottom-2"
          />
        </span>
        <span className="relative">
          of {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 left-0
            md:h-8 md:bottom-2"
          />
        </span>
        <span className="relative">
          the {""}
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 left-0
            md:h-8 md:bottom-2"
          />
        </span>
        <span className="relative">
          shore.
          <div
            className="absolute w-full h-3 -z-10 bg-highlight bottom-1 left-0
            md:h-8 md:bottom-2"
          />
        </span>
      </h1>

      <p className="text bottom-24 left-12 absolute z-10">Arthur C. Clarke</p>
    </div>
  );
};

export default Quote;
