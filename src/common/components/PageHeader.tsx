"use client";

import { useRouter } from "next/navigation";
import { FiArrowLeft as BackIcon } from "react-icons/fi";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex items-center gap-4 bg-white py-5">
      <button
        onClick={() => router.push("/")}
        className="flex w-auto items-center justify-center gap-x-2 p-2 rounded-full hover:gap-x-3 transition-all duration-300 border-2 border-neutral-500 hover:border-neutral-900"
      >
        <BackIcon size={22} />
      </button>
      <div className="text-lg font-sora font-medium">{title}</div>
    </div>
  );
};

export default PageHeader;
