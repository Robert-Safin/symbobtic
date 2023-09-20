"use client";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative mb-48">
      <div className="absolute h-[1px] w-[calc(70px)] bg-white left-6 top-4 md:top-6" />
      <div className="hidden md:block absolute h-[1px] w-[calc(100%-620px-110px)] bg-white right-6 top-4 md:top-6" />

      <div className="flex flex-col ml-20 my-20 md:my-40 px-10 max-w-[700px]">
        <Waypoint onEnter={() => setIsVisible(true)}>
          <h1
            className={`secondaryHeader mb-8 transition-all delay-100 duration-1000 ${
              isVisible
                ? "animate-fade-up animate-duration-1000 animate-delay-100"
                : ""
            }`}
          >
            the big things, like the small ones, <br /> everything fascinates
            us.
          </h1>
        </Waypoint>

        <p className="text mb-4 max-w-[500px]">
          every day we have the ambition to {""}
          <span className="relative">
            <span>simplify {""}</span>
            <span
              className="absolute w-full h-1 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
            />
          </span>
          <span className="relative">
            <span>complexity.</span>
            <span
              className="absolute w-full h-1 -z-10 bg-highlight bottom-1 right-0
            md:h-2 md:bottom-2"
            />
          </span>
        </p>

        <p className="text mb-4 max-w-[500px]">
          we don`t provide standard answers for just any problem, but only the
          solution designed specifically for you.
        </p>
        <p className="text mb-4 max-w-[500px]">
          we believe in ideas that can embrace a strategic vision.
        </p>
        <p className="text mb-4 max-w-[500px]">
          we pledge our actions and execute with unwavering follow-through.
        </p>
      </div>
      <div className="absolute h-[1px] w-[calc(100%-48px)] right-6 bg-white -bottom-28" />
    </div>
  );
};

export default About;
