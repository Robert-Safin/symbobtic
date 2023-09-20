"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [enteredY, setEnteredY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(false);

  const [offsetY, setOffsetY] = useState(0);

  const [quoteVisible, setQuoteVisible] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex flex-row px-6 space-x-10 md:space-x-40 mb-20">
        <Waypoint onEnter={() => setHeaderVisible(true)}>
          <h1
            className={`serviceHeader font-inter  transition-all ${
              headerVisible
                ? "animate-fade-up animate-duration-1000 animate-delay-100"
                : ""
            }`}
          >
            services
          </h1>
        </Waypoint>
        <div className="flex flex-col lg:flex-row justify-between w-full pr-6">
          <div>
            <h1 className="serviceHeader mb-3 underline  decoration-4">
              brand design
            </h1>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              brand strategy
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              brand & rebranding
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              logo design
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              visual identity
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              packaging design
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              corporate identity
            </p>
          </div>

          <div>
            <h1 className="serviceHeader mb-3 mt-8 lg:mt-0 underline  decoration-4">
              web design
            </h1>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              UX/UI design
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              art direction
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              development
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              microinteractions
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              content design
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              audit SEO
            </p>
          </div>

          <div>
            <h1 className="serviceHeader mb-3 mt-8 lg:mt-0 underline  decoration-4">
              copywriting
            </h1>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              SEO optimization
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              revisioning
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              landing pages
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              company profile
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              creative slogans
            </p>
            <p className="text mb-[6px] hover:text-highlight transition-all duration-500">
              ecommerce
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
        <Waypoint
          onEnter={() => setQuoteVisible(true)}
          onLeave={() => setQuoteVisible(false)}
        >
          <h1
            className={`quoteHeader px-4 absolute top-14 left-6 md:top-20
            transition-all duration-[1500ms] delay-300
        lg:max-w-[800px] ${quoteVisible ? "blur-none" : "blur-lg"}
        ${quoteVisible? "opacity-100" : "opacity-0"}

        `}
          >
            Technology is the wizard&apos;s wand that turns today&apos;s dreams
            into {""}
            <span className="relative">
              <span>tomorrow&apos;s {""}</span>
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
        </Waypoint>
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
