"use client";

import Image from "@/common/components/Image";

const Hero = () => {
  return (
    <header className="pt-5 space-y-4 flex flex-col items-center justify-center">
      <div
        className="p-1 rounded-full border border-2"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Image
          src="/images/aulianza.webp"
          alt="Ryan Aulia"
          width={100}
          height={100}
          rounded="rounded-full"
          className="lg:hover:scale-105"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center space-y-3"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex gap-2 items-center text-center">
          <h1 className="text-2xl font-medium">Ryan Aulia</h1>
        </div>
        <p className="text-center text-neutral-700 text-[15px] md:text-base mx-1.5 leading-relaxed">
          Seasoned software engineer especially in frontend side, with a passion
          for creating pixel-perfect web experiences.
        </p>
      </div>
    </header>
  );
};

export default Hero;
