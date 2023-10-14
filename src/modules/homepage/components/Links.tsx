"use client";

import { useState } from "react";
import { PiLinkBreakDuotone as LinkIcon } from "react-icons/pi";

import BottomSheet from "@/common/components/BottomSheet";
import { LINKS } from "@/common/constant/links";

import BuyACoffee from "./BuyACoffee";
import LinkItem from "./LinkItem";

const Links = () => {
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
          <LinkItem key={index} onClick={handleClick} {...item} />
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

export default Links;
