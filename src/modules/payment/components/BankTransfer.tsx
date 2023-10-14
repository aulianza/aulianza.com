import { BANK_ACCOUNTS } from "@/common/constant/bank";

import AccountCard from "./AccountCard";

const BankTransfer = () => {
  return (
    <div className="space-y-4" data-aos="fade-down" data-aos-duration="1000">
      {BANK_ACCOUNTS?.map((item, index) => (
        <AccountCard key={index} {...item} />
      ))}
    </div>
  );
};

export default BankTransfer;
