import Breakline from "@/common/components/Breakline";

import Contact from "./Contact";
import Hero from "./Hero";
import Links from "./Links";
import Socials from "./Socials";

const Home = () => {
  return (
    <>
      <Hero />
      <Socials />
      <Breakline />
      <Links />
      <Breakline />
      <Contact />
    </>
  );
};

export default Home;
