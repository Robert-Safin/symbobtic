
import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import About from "@/components/about/About";

export default function Home() {
  return (
    <div className="">
      <Nav />


      <Hero />
      <About />
    </div>
  );
}
