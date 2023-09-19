"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [enteredY, setEnteredY] = useState(0);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-row px-6 space-x-10 md:space-x-40 mb-20">
        <h1 className="serviceHeader font-inter">services</h1>
        <div className="flex flex-col lg:flex-row justify-between w-full pr-6">
          <div>
            <h1 className="serviceHeader mb-3 underline hover:text-highlight hover:decoration-highlight decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight">brand strategy</p>
            <p className="text mb-[6px] hover:text-highlight">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight">logo design</p>
            <p className="text mb-[6px] hover:text-highlight">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              corporate identity
            </p>
          </div>

          <div>
            <h1 className="serviceHeader mb-3 mt-8 lg:mt-0 underline hover:text-highlight hover:decoration-highlight decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight">brand strategy</p>
            <p className="text mb-[6px] hover:text-highlight">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight">logo design</p>
            <p className="text mb-[6px] hover:text-highlight">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              corporate identity
            </p>
          </div>

          <div>
            <h1 className="serviceHeader mb-3 mt-8 lg:mt-0 underline hover:text-highlight hover:decoration-highlight decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight">brand strategy</p>
            <p className="text mb-[6px] hover:text-highlight">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight">logo design</p>
            <p className="text mb-[6px] hover:text-highlight">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight">
              corporate identity
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full flex md:justify-end ">
        <Waypoint
          onEnter={(e) => {
            setIsVisible(true);
            console.log(e.viewportBottom);

            setEnteredY(e.viewportBottom);
          }}
        >
          <div className="relative h-[420px] w-full  md:h-[700px] md:mr-0 lg:w-[790px]  overflow-hidden">
            <Image
              src="/img/satellite.png"
              width={1000}
              height={1000}
              alt=""
              className="-z-10 absolute
              -top-28 md:-top-80

          transition-all delay-0 duration-0
          "
              style={{
                transform: isVisible
                  ? `translateY(${((offsetY - enteredY) / 100) * 10}px)`
                  : `translateY(0)`,
              }}
            />
          </div>
        </Waypoint>
        <h1 className="quoteHeader px-4 absolute top-14 left-6 md:top-20
        lg:max-w-[800px]
        ">
          Technology is the wizard`s wand that turns today`s dreams into {""}
          <span className="relative">
            <span>tomorrow`s {""}</span>
            <div
              className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-8 md:bottom-2
            "
            />
          </span>
          <span className="relative">
            <span>realities.</span>
            <div
              className="absolute w-full h-3 -z-10 bg-highlight bottom-1 right-0
            md:h-8 md:bottom-2
            "
            />
          </span>
        </h1>
        <p
          className="quoteText absolute top-[300px] right-10 max-w-[50px]
        md:top-[550px] md:right-24 md:max-w-[100px]
        "
        >
          Leon C. Megginson
        </p>
      </div>
    </>
  );
};

export default Services;
