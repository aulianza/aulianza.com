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

  return <main className="p-6 md:my-3 space-y-5">{children}</main>;
};

export default PageWrapper;
