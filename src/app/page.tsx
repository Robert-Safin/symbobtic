import Nav from "@/components/nav/Nav";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Plan from "@/components/plan/Plan";
import Clients from "@/components/clients/Clients";
import Quote from "@/components/quote/Quote";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

const Home = async () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Plan />
      <Clients />
      <Quote />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
