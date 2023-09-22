"use client";
import { Waypoint } from "react-waypoint";
import { FC, useEffect, useState } from "react";

interface Props {
  onVideoLoad: () => void;
}

const Hero: FC<Props> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoaded === false && (
        <div
          className="relative flex mt-[50%] scale-50 md:-top-20
        lg:-top-56
        xl:-top-96
        "
        >
          <div className="circles">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <div className="circle8"></div>
            <div className="circle9"></div>
            <div className="circle10"></div>
            <div className="circle11"></div>
            <div className="circle12"></div>
            <div className="circle13"></div>
            <div className="circle14"></div>
            <div className="circle15"></div>
          </div>
        </div>
      )}
      <div
        className={`relative max-w-[1480px] h-[680px] md:h-[1300px] mx-auto
    overflow-hidden
     ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {isLoaded && window.scrollY < 1200 && (
          <div
            className=" w-full px-4 sm:px-12
      mt-[110px] md:mt-[200px]"
          >
            <div className="relative">
              <h1
                className="heroHeader my-10 animate-fade-in-first lg:fixed lg:top-[150px]"
                style={
                  offsetY > 400 && window.innerWidth > 1000
                    ? { position: "absolute", top: "350px" }
                    : {}
                }
              >
                Symbobtic
              </h1>
              <h2
                className="heroHeader animate-fade-in-second lg:fixed lg:top-[400px]"
                style={
                  offsetY > 400 && window.innerWidth > 1000
                    ? { position: "absolute", top: "600px" }
                    : {}
                }
              >
                digital
              </h2>
              <h2
                className="heroHeader animate-fade-in-second lg:fixed lg:top-[500px]"
                style={
                  offsetY > 400 && window.innerWidth > 1000
                    ? { position: "absolute", top: "700px" }
                    : {}
                }
              >
                studio for
              </h2>
              <div
                className="w-fit animate-fade-in-second lg:fixed lg:top-[600px]"
                style={
                  offsetY > 400 && window.innerWidth > 1000
                    ? { position: "absolute", top: "800px" }
                    : {}
                }
              >
                <Waypoint
                  onEnter={() => setIsVisible(true)}
                  onLeave={() => setIsVisible(false)}
                >
                  <h2 className="relative heroHeader">
                    human
                    <div
                      className={`absolute w-1 h-6 bg-highlight bottom-1 md:bottom-2 md:h-10 -z-10  translate-all duration-700 delay-[2000ms]  ${
                        isVisible ? "w-[100%]" : "w-1"
                      }`}
                    />
                  </h2>
                </Waypoint>
              </div>
              <h2
                className="heroHeader animate-fade-in-second lg:fixed lg:top-[700px]"
                style={
                  offsetY > 400 && window.innerWidth > 1000
                    ? { position: "absolute", top: "900px" }
                    : {}
                }
              >
                designs
              </h2>
            </div>

            <div className="absolute flex flex-col space-y-4 my-12 lg:hidden">
              <p className="text max-w-[250px] ml-4 animate-fade-in-third">
                We use design to put people and their choices at the center.
              </p>
              <p className="text max-w-[250px] ml-4 animate-fade-in-third">
                We create websites, brand identity and creative content that
                takes your customers by the hand and they bring them to you.
              </p>
            </div>
          </div>
        )}
        <video
          className="absolute -z-20 top-0 object-fill w-full
        "
          playsInline
          muted
          autoPlay
          loop
          src="/video/symbobtic.mp4"
          onLoadedData={() => {
            props.onVideoLoad();
            setIsLoaded(true);
          }}
        />
      </div>
      <div className="relative  max-w-[1480px]  mx-auto -top-[350px]">
        {isLoaded  && (
          <p
            className="hidden lg:block right-44 absolute bottom-40 text max-w-[250px] transition-all   animate-pulse  animate-duration-[4000ms]
        "
            style={{
              transform: `translateY(${offsetY * -2.1}px)`,
              opacity: `0`,
              display: `${offsetY < 40 ? "block" : "none"}`,
            }}
          >
            scroll and find out more
          </p>
        )}

        <p
          className="hidden lg:block right-40 absolute -bottom-20 text max-w-[250px]"
          style={{
            transform: `translateY(${offsetY * -2.1}px)`,
            opacity: `${offsetY / 200}`,
          }}
        >
          We use design to put people and their choices at the center.
        </p>
        <p
          className="hidden lg:block right-40  -bottom-[800px] absolute text max-w-[250px]"
          style={{
            transform: `translateY(${offsetY * -2.1}px)`,
            opacity: `${Math.min(Math.max((offsetY - 208) / 200, 0), 1)}`,
          }}
        >
          We create websites, brand identity and creative content that takes
          your customers by the hand and they bring them to you.
        </p>
      </div>
      <div></div>
    </>
  );
};

export default Hero;
