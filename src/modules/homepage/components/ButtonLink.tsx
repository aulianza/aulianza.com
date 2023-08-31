"use client";

import clsx from "clsx";
import { useState } from "react";
import { BiCoffee as CoffeeIcon, BiRocket as RocketIcon } from "react-icons/bi";

import BottomSheet from "@/common/components/BottomSheet";
import { LinkProps } from "@/common/types/link";

import BuyACoffee from "./BuyACoffee";

const LINKS: LinkProps[] = [
  {
    label: "Website & Portfolio",
    icon: <RocketIcon size={20} />,
    href: "https://aulianza.id",
    className: "bg-white",
    target: "_blank",
  },
  {
    label: "Buy me a Coffee",
    icon: <CoffeeIcon size={20} />,
    href: "#",
    className: "bg-violet-600 text-white",
    target: "_self",
  },
];

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
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center py-3">
        {LINKS?.map((item, index) => (
          <button
            key={index}
            className={clsx(
              "flex items-center justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 transition-all duration-300 w-full md:w-max shadow-sm",
              item.className,
            )}
            onClick={() => handleClick(item.href, item.target)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <BottomSheet
        key={isBottomSheetOpen ? "bottom-sheet-open" : "bottom-sheet-closed"}
        title="Buy me a Coffee"
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <BuyACoffee />
      </BottomSheet>
    </>
  );
};

export default ButtonLink;
