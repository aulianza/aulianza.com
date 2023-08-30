import { FiArrowLeft } from "react-icons/fi";

import Image from "./Image";

const Qris = ({ onBack }: { onBack: () => void }) => {
  const downloadQrisImage = () => {
    const link = document.createElement("a");
    link.href = "/images/qris-aulianza.png";
    link.download = "qris-aulianza.png";
    link.click();
  };

  return (
    <>
      <Image src="/images/qris-long.png" alt="QRIS" width={300} height={50} />
      <Image src="/images/qris.svg" alt="QRIS" width={500} height={500} />
      <div className="flex w-full px-3 gap-3">
        <button
          onClick={onBack}
          className="flex w-auto items-center justify-center gap-x-2 p-3 rounded-full hover:gap-x-3 transition-all duration-300 border-2 border-neutral-500 hover:border-neutral-900"
        >
          <FiArrowLeft size={24} />
        </button>
        <button
          onClick={downloadQrisImage}
          className="flex flex-grow items-center justify-center gap-x-2 py-3 px-5 rounded-xl hover:gap-x-3 transition-all duration-300 bg-neutral-900 text-white"
        >
          Download QRIS Image
        </button>
      </div>
    </>
  );
};

export default Qris;
