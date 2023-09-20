"use client";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const Plan = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full relative pl-20 my-20 pr-6 mb-52">
      <div className="absolute w-[32px] left-6 top-4 h-[1px] bg-white md:top-6" />
      <div className="hidden md:block absolute w-[calc(100%-570px)] right-6 top-4 h-[1px] bg-white md:top-6" />
      <Waypoint onEnter={() => setIsVisible(true)}>
        <h1
          className={`secondaryHeader mb-8 delay-100 ${
            isVisible
              ? "animate-fade-up animate-duration-1000 animate-delay-100"
              : ""
          }`}
        >
          we plan for the future.
        </h1>
      </Waypoint>

      <h1 className="text mb-24 max-w-[200px] md:max-w-[400px]">
        In chaotic moments, language and communication can make all the
        difference. There are our {""}
        <div className="relative inline-block">
          5 pillars.
          <div className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight md:h-3" />
        </div>
      </h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <div className="flex items-start">
          <Waypoint
            onEnter={() => setIsVisible1(true)}
            onLeave={() => setIsVisible1(false)}
          >
            <h1
              className="numberHeader w-28 md:w-48 transition-all duration-1000 delay-0"
              style={{
                opacity: isVisible1 ? 1 : 0,
              }}
            >
              01
            </h1>
          </Waypoint>

          <h1 className="text w-28 md:w-48">
            Design content as if you were inspiring the {""}
            <span className="relative text">
              future
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
          </h1>
        </div>

        <div className="flex items-start">
          <Waypoint
            onEnter={() => setIsVisible2(true)}
            onLeave={() => setIsVisible2(false)}
          >
            <h1
              className="numberHeader w-28 md:w-48 transition-all duration-1000 delay-500"
              style={{
                opacity: isVisible2 ? 1 : 0,
              }}
            >
              02
            </h1>
          </Waypoint>
          <h1 className="text w-28 md:w-48">
            <span className="relative text">
              Value
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            {""} those who read and enjoy your content.
          </h1>
        </div>

        <div className="flex items-start">
          <Waypoint
            onEnter={() => setIsVisible3(true)}
            onLeave={() => setIsVisible3(false)}
          >
            <h1
              className="numberHeader w-28 md:w-48 transition-all duration-1000 delay-1000"
              style={{
                opacity: isVisible3 ? 1 : 0,
              }}
            >
              03
            </h1>
          </Waypoint>
          <h1 className="text w-28 md:w-48">
            Use a {""}
            <span className="relative text">
              human
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            {""} voice, not a tone of voice.
          </h1>
        </div>

        <div className="flex items-start">
          <Waypoint
            onEnter={() => setIsVisible4(true)}
            onLeave={() => setIsVisible4(false)}
          >
            <h1
              className="numberHeader w-28 md:w-48 transition-all duration-1000 delay-[1500ms]"
              style={{
                opacity: isVisible4 ? 1 : 0,
              }}
            >
              04
            </h1>
          </Waypoint>
          <h1 className="text w-28 md:w-48">
            Uphold {""}
            <span className="relative text">
              ethics {""}
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            <span className="relative text">
              and
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            <span className="relative text">
              values.
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
          </h1>
        </div>

        <div className="flex items-start">
          <Waypoint
            onEnter={() => setIsVisible5(true)}
            onLeave={() => setIsVisible5(false)}
          >
            <h1
              className="numberHeader w-28 md:w-48 transition-all duration-1000 delay-[2000ms]"
              style={{
                opacity: isVisible5 ? 1 : 0,
              }}
            >
              05
            </h1>
          </Waypoint>
          <h1 className="text w-28 md:w-48">
            Guide actions, solve problems and {""}
            <span className="relative text">
              change
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
            <span className="relative text">
              {""} lives.
              <div
                className="absolute w-full h-1 bottom-1 -z-10 right-0 bg-highlight
          md:h-3"
              />
            </span>
          </h1>
        </div>
      </div>
      <div className="absolute w-[calc(100%-48px)]  h-[1px] bg-white right-6 -bottom-20" />
    </div>
  );
};

export default Plan;
