import Breakline from "@/common/components/Breakline";
import Footer from "@/common/components/Footer";

import ButtonLink from "./ButtonLink";
import Contact from "./Contact";
import Hero from "./Hero";
import Socials from "./Socials";

const Home = () => {
  return (
    <>
      <Hero />
      <Socials />
      <Breakline />
      <ButtonLink />
      <Breakline />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
