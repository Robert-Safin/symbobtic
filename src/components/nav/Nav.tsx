"use client";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="w-full h-[74px]
    border-b border-white px-5
    flex justify-between items-center fixed top-0 z-50 bg-white bg-opacity-5
    backdrop-blur-[6px]
    md:w-[100%]
    md:max-w-[1480px]
    md:border md:h-[120px]
    md:mt-10
    md:scale-95

    "
    >
      <div className="flex items-center space-x-12">
        <h1 className="bannerLogo">Symbobtic</h1>

        <div className="hidden md:flex space-x-6">
          <h1 className="navLinks">brand design</h1>
          <h1 className="navLinks">web design</h1>
          <h1 className="navLinks">copyrighting</h1>
        </div>
      </div>

      {!menuOpen && (
        <p className="menuBurger" onClick={() => setMenuOpen(!menuOpen)}>
          menu
        </p>
      )}
      {menuOpen && (
        <p className="menuBurger" onClick={() => setMenuOpen(!menuOpen)}>
          close
        </p>
      )}
      {menuOpen && (
        <div
          className="absolute w-full top-[74px] md:top-[120px] z-50 right-0
        h-[calc(100vh-74px)] md:h-[calc(100vh-120px)] bg-black bg-opacity-90 p-5
        animate-fade-down animate-duration-700"
        >
          <div className="flex items-center w-full border-b border-ghostGray pb-1  lg:w-[800px] lg:ml-10  ">
            <input
              type="text"
              placeholder="search"
              className="bg-white bg-opacity-0 w-full placeholder:text-ghostGray text-white"
            />
            <BsSearch className="text-white" />
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-40 lg:px-10">
            <div className="flex flex-col space-y-4 my-10">
              <p className="text-ghostGray">navigate</p>
              <h2 className="menuLinks">home</h2>
              <h2 className="menuLinks">blog</h2>
              <h2 className="menuLinks">contact us</h2>
              <h2 className="menuLinks">newsletter</h2>
            </div>
            <div className="flex flex-col space-y-4 my-10">
              <p className="text-ghostGray">our services</p>
              <h2 className="menuLinks">brand design</h2>
              <h2 className="menuLinks">web services</h2>
              <h2 className="menuLinks">copyrighting</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
