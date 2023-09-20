"use client";
import Image from "next/image";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative mt-40 px-6">
      <div className="h-[1px] w-full bg-white" />
      <Waypoint onEnter={() => setIsVisible(true)}>
        <h1
          className={`serviceHeader font-inter py-20 transition-all duration-1000 ${
            isVisible
              ? "animate-fade-up animate-duration-1000 animate-delay-100"
              : ""
          }`}
        >
          blog
        </h1>
      </Waypoint>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col group px-12 md:px-0 group">
          <div className="relative">
            <div className="absolute w-full h-full  -z-10 group-hover:bg-highlight" />
            <Image
              src="/img/blog/blog1.png"
              width={1000}
              height={1000}
              alt=""
              className="w-full h-[245px] object-cover lg:h-[305px] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500"
            />
          </div>
          <div className="flex space-x-8 my-8">
            <p className="blogTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <p className="quoteText font-jost">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              quos, quod dicta illo ab pariatur soluta doloribus nihil similique
              maxime a suscipit itaque enim beatae consequuntur perferendis
              totam non maiores!
            </p>
            <div className="relative w-10 h-10 right-6 lg:right-8 pl-4">
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
        </div>
        <div className="flex flex-col group px-12 md:px-0 group">
          <div className="relative">
            <div className="absolute w-full h-full  -z-10 group-hover:bg-highlight" />
            <Image
              src="/img/blog/blog2.png"
              width={1000}
              height={1000}
              alt=""
              className="w-full h-[245px] object-cover lg:h-[305px] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500"
            />
          </div>
          <div className="flex space-x-8 my-8">
            <p className="blogTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="quoteText font-jost">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto explicabo voluptas sapiente nesciunt. Tempore
              voluptatum nobis perspiciatis unde odit harum! Illum dolorem
              itaque architecto corporis.
            </p>
            <div className="relative w-10 h-10 right-6 lg:right-8 pl-4">
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
        </div>
        <div className="flex flex-col group px-12 md:px-0 group">
          <div className="relative">
            <div className="absolute w-full h-full  -z-10 group-hover:bg-highlight" />
            <Image
              src="/img/blog/blog3.png"
              width={1000}
              height={1000}
              alt=""
              className="w-full h-[245px] object-cover lg:h-[305px] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500"
            />
          </div>
          <div className="flex space-x-8 my-8">
            <p className="blogTitle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque.
            </p>
            <p className="quoteText font-jost">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              voluptate laborum similique quo? Et, amet, est nulla velit,
              reiciendis qui deserunt numquam error impedit aliquid cupiditate
              voluptatem aliquam cumque architecto dolorum hic. Ullam,
              doloremque dignissimos.
            </p>
            <div className="relative w-10 h-10 right-6 lg:right-8 pl-4">
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
        </div>
        <div className="flex flex-col group px-12 md:px-0 group">
          <div className="relative">
            <div className="absolute w-full h-full  -z-10 group-hover:bg-highlight" />
            <Image
              src="/img/blog/blog4.png"
              width={1000}
              height={1000}
              alt=""
              className="w-full h-[245px] object-cover lg:h-[305px] group-hover:-translate-x-4 group-hover:-translate-y-4 transition-all duration-500"
            />
          </div>
          <div className="flex space-x-8 my-8">
            <p className="blogTitle">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="quoteText font-jost">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              velit ullam laudantium quod est quaerat aliquid accusantium sint
              amet perspiciatis?
            </p>
            <div className="relative w-10 h-10 right-6 lg:right-8 pl-4">
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
        </div>
      </div>
      <div className="w-full justify-center flex md:justify-start">
        <button className=" text-white text-2xl hover:bg-highlight border hover:border-highlight py-7 px-10 w-[270px] md:w-[450px] rounded-full my-20
        transition-all duration-500 delay-0
        ">
          +
        </button>
      </div>
      <div className="h-[1px] w-full bg-white" />
    </div>
  );
};

export default Blog;
