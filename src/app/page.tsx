"use client";
import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Plan from "@/components/plan/Plan";
import Clients from "@/components/clients/Clients";
import Quote from "@/components/quote/Quote";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="max-w-[1480px] mx-auto">
      {isLoaded && <Nav />}
      <Hero onVideoLoad={() => setIsLoaded(true)} />
      {isLoaded && (
        <>
          <About />
          <Services />
          <Plan />
          <Clients />
          <Quote />
          <Blog />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
