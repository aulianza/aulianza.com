import { BankAccountsProps } from "../types/bank";

export const BANK_ACCOUNTS: BankAccountsProps[] = [
  {
    number: "0431030216",
    holder: "Ryan Aulia",
    bank: "Bank BCA",
    type: "mastercard",
    logo: "/images/payment/bca.png",
    color: "#0066ae",
    className: "border-[#0066ae] hover:bg-[#0066ae] hover:text-white",
  },
  {
    number: "003701108940505",
    holder: "Ryan Aulia",
    bank: "Bank BRI",
    type: "mastercard",
    logo: "/images/payment/bri.png",
    color: "#005098",
    className: "border-[#005098] hover:bg-[#005098] hover:text-white",
  },
  {
    number: "4140023855",
    holder: "Ryan Aulia",
    bank: "Bank Permata",
    type: "visa",
    logo: "/images/payment/permata.png",
    color: "#6e9123",
    className: "border-[#6e9123] hover:bg-[#6e9123] hover:text-white",
  },
  {
    number: "1050018525703",
    holder: "Ryan Aulia",
    bank: "Bank Mandiri",
    type: "mastercard",
    logo: "/images/payment/mandiri.png",
    color: "#064c90",
    className: "border-[#064c90] hover:bg-[#064c90] hover:text-white",
  },
  // {
  //   number: "4692304190",
  //   holder: "Ryan Aulia",
  //   bank: "Bank BSI",
  //   type: "mastercard",
  //   logo: "/images/payment/bsi.png",
  //   color: "#00A39D",
  //   className: "border-[#00A39D] hover:bg-[#00A39D] hover:text-white",
  // },
];
