import PageHeader from "@/common/components/PageHeader";

import BankTransfer from "./BankTransfer";

const Payment = () => {
	return (
		<section className="px-6 pb-6 space-y-2 w-screen md:min-w-[480px] md:max-w-[480px]">
			<PageHeader title="Bank Transfer (IDR)" />
			<BankTransfer />
		</section>
	);
};

export default Payment;
