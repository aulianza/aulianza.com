"use client";

import { useState } from "react";
import { FaRegEnvelopeOpen as EmailIcon } from "react-icons/fa";
import { PiConfettiDuotone as ContactIcon } from "react-icons/pi";

import SectionHeader from "@/common/components/SectionHeader";

const Contact = () => {
  const bgImage = "url('/images/bg-gradient-2.svg')";

  const [copiedEmail, setCopiedEmail] = useState("");

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);

    setTimeout(() => {
      setCopiedEmail("");
    }, 1000);
  };

  return (
    <section className="space-y-5">
      <SectionHeader icon={<ContactIcon size={24} />} title="Get in touch" />
      <div
        className="bg-[#94d7c5] text-neutral-900 border p-8 rounded-xl space-y-5 bg-no-repeat bg-right"
        style={{ backgroundImage: bgImage }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <EmailIcon size={24} className="text-neutral-800" />
        <div className="space-y-3">
          <div className="font-medium text-lg md:text-xl">Drop me an Email</div>
          <div
            className="hover:underline text-neutral-800 text-lg md:text-lg cursor-pointer"
            onClick={() => handleEmailClick("aulianza.dev@gmail.com")}
          >
            {copiedEmail ? "Copied!" : "aulianza.dev@gmail.com"}
          </div>
        </div>
        <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
          Expect my rapid and eager reply – your message won't be kept waiting!
        </p>
      </div>
    </section>
  );
};

export default Contact;
