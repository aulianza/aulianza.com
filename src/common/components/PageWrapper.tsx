"use client";

import AOS from "aos";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      disable: "mobile",
      once: true,
    });
  }, []);

  return <main className="pb-0">{children}</main>;
};

export default PageWrapper;
