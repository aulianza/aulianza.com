"use client";

import { clsx } from "clsx";

import { LinkProps } from "@/common/types/link";

interface LinkItemProps extends LinkProps {
  index: number;
  onClick: (href: string, target: string) => void;
}

const LinkItem = ({
  index,
  label,
  icon,
  href,
  target = "",
  className,
  onClick,
}: LinkItemProps) => {
  return (
    <a
      onClick={() => onClick(href, target)}
      className="relative inline-flex items-center justify-start py-4 pl-4 pr-14 overflow-hidden font-medium text-neutral-800 transition-all duration-150 ease-in-out rounded-lg hover:pl-12 hover:pr-6 bg-white group border shadow-sm cursor-pointer"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-delay={index * 100}
      data-umami-event={`Click Link : ${label}`}
      href="javascript:;"
    >
      <span
        className={clsx(
          "absolute bottom-0 left-0 w-full h-0.5 transition-all duration-150 ease-in-out group-hover:h-full",
          className,
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
        <span className="group-hover:hidden">{icon}</span>
        <span className="relative w-full text-[15px] md:text-base text-left transition-colors duration-200 ease-in-out group-hover:text-white">
          {label}
        </span>
      </div>
    </a>
  );
};

export default LinkItem;
