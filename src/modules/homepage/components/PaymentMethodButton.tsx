import Link from "next/link";

import Image from "@/common/components/Image";

interface PaymentMethodButtonProps {
  href: string;
  imageSrc: string;
  altText: string;
}

const PaymentMethodButton: React.FC<PaymentMethodButtonProps> = ({
  href,
  imageSrc,
  altText,
}) => (
  <Link href={href} target="_blank" className="w-full">
    <button className="flex justify-center border border-solid w-full px-5 py-3 rounded-xl hover:bg-gray-100">
      <Image src={imageSrc} alt={altText} width={100} height={50} />
    </button>
  </Link>
);

export default PaymentMethodButton;
