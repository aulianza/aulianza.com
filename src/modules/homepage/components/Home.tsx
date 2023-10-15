import Breakline from "@/common/components/Breakline";

import Contact from "./Contact";
import Hero from "./Hero";
import Links from "./Links";
import Socials from "./Socials";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="p-6 space-y-5">
        <Socials />
        <Breakline />
        <Links />
        <Breakline />
        <Contact />
      </div>
    </>
  );
};

export default Home;
