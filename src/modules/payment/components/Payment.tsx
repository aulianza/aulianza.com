import PageHeader from "@/common/components/PageHeader";

import BankTransfer from "./BankTransfer";

const Payment = () => {
  return (
    <section className="p-6 space-y-6">
      <PageHeader title="Bank Transfer (IDR)" />
      <BankTransfer />
    </section>
  );
};

export default Payment;
