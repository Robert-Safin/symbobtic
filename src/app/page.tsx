import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Plan from "@/components/plan/Plan";
import Clients from "@/components/clients/Clients";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Plan />
      <Clients />
    </div>
  );
}
