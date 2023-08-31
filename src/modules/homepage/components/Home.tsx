import Breakline from "@/common/components/Breakline";
import Footer from "@/common/components/Footer";

import ButtonLink from "./ButtonLink";
import ChitChat from "./ChitChat";
import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";
import Socials from "./Socials";

const Home = () => {
  return (
    <div className="p-6 mb-2 space-y-6" data-aos="fade-down">
      <Hero />
      <Socials />
      <ButtonLink />
      <ChitChat />
      <Breakline />
      <Services />
      <Breakline />
      <Contact />
      <Breakline />
      <Footer />
    </div>
  );
};

export default Home;
