"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { PiLinkBreakDuotone as LinkIcon } from "react-icons/pi";

import BottomSheet from "@/common/components/BottomSheet";
import { LINKS } from "@/common/constant/links";

import BuyACoffee from "./BuyACoffee";

const ButtonLink = () => {
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleClick = (url: string, target: string | undefined) => {
    if (url !== "#") {
      window.open(url, target);
    } else {
      setBottomSheetOpen(true);
    }
  };

  return (
    <>
      <div
        className="flex items-center gap-2 px-3"
        data-aos="flip-down"
        data-aos-duration="1000"
      >
        <LinkIcon size={24} />
        <h2 className="font-medium text-neutral-600">Links</h2>
      </div>
      <div className="flex flex-col w-full gap-y-3">
        {LINKS?.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.href, item.target)}
            className="relative inline-flex items-center justify-start py-4 pl-4 pr-14 overflow-hidden font-medium text-neutral-800 transition-all duration-150 ease-in-out rounded-lg hover:pl-12 hover:pr-6 bg-white group border shadow-sm"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay={index * 100}
          >
            <span
              className={clsx(
                "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-150 ease-in-out group-hover:h-full",
                item.className,
              )}
            ></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute left-0 pl-4 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <div className="flex items-center gap-3">
              <span className="group-hover:hidden">{item.icon}</span>
              <span className="relative w-full text-[15px] md:text-base text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                {item.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <BottomSheet
        key={isBottomSheetOpen ? "bottom-sheet-open" : "bottom-sheet-closed"}
        title="Buy me a Cup of Coffee"
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <BuyACoffee />
      </BottomSheet>
    </>
  );
};

export default ButtonLink;
