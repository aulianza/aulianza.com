import React, { useState } from "react";

import Image from "@/common/components/Image";
import Qris from "@/common/components/Qris";

import PaymentMethodButton from "./PaymentMethodButton";

const BuyACoffee: React.FC = () => {
  const [showQris, setShowQris] = useState(false);

  const handleShowQris = () => {
    setShowQris(!showQris);
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center space-y-3">
      {!showQris ? (
        <div className="flex flex-col w-full justify-center items-center space-y-3">
          <button
            className="flex justify-center border border-solid w-full px-5 py-3 rounded-xl hover:bg-gray-100"
            onClick={handleShowQris}
          >
            <Image
              src="/images/qris-logo.webp"
              alt="QRIS"
              width={70}
              height={50}
            />
          </button>
          <PaymentMethodButton
            href="https://www.paypal.com/paypalme/aulianza01"
            imageSrc="/images/paypal.webp"
            altText="PayPal"
          />
          <PaymentMethodButton
            href="https://wise.com/share/ryana1181"
            imageSrc="/images/wise.webp"
            altText="Wise"
          />
        </div>
      ) : (
        <Qris onBack={handleShowQris} />
      )}
    </div>
  );
};

export default BuyACoffee;
