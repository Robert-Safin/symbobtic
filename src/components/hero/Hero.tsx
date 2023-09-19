"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="relative max-w-[1480px] h-[680px] md:h-[1300px] mx-auto
    overflow-hidden
    "
      >
        {isLoaded && (
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
                <h2 className="relative heroHeader">
                  human
                  <div className="absolute w-full h-6 bg-highlight bottom-1 md:bottom-2 md:h-10 -z-10" />
                </h2>
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
          onLoadedData={() => setIsLoaded(true)}
        />
      </div>

      {isLoaded && <p
        className="hidden lg:block right-44 absolute bottom-40 text max-w-[250px] transition-all delay-0 duration-0 animate-fade-in-fourth

        "
        style={{
          transform: `translateY(${offsetY * -2.1}px)`,
          filter:
            offsetY > 1
              ? `blur(${Math.min(Math.max((offsetY - 1) / 20, 0), 50)}px)`
              : "blur(0px)",
        }}
      >
        scroll and find out more
      </p>}

      <p
        className="hidden lg:block right-40 absolute -bottom-20 text max-w-[250px]"
        style={{
          transform: `translateY(${offsetY * -2.1}px)`,
          opacity: `${offsetY / 200}`,
          filter:
            offsetY > 180
              ? `blur(${Math.min(Math.max((offsetY - 180) / 20, 0), 50)}px)`
              : "blur(0px)",
        }}
      >
        We use design to put people and their choices at the center.
      </p>
      <p
        className="hidden lg:block right-40  -bottom-[800px] absolute text max-w-[250px]"
        style={{
          transform: `translateY(${offsetY * -2.1}px)`,
          opacity: `${Math.min(Math.max((offsetY - 208) / 200, 0), 1)}`,
          filter:
            offsetY > 400
              ? `blur(${Math.min(Math.max((offsetY - 400) / 20, 0), 50)}px)`
              : "blur(0px)",
        }}
      >
        We create websites, brand identity and creative content that takes your
        customers by the hand and they bring them to you.
      </p>
    </>
  );
};

export default Hero;
