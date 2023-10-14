import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Aulia - Software Engineer",
  description: "My Personal Landing Page",
  icons: "/images/aulianza.webp",
  // openGraph: {
  //   images: "/images/aulianza.webp",
  //   url: "https://aulianza.com",
  //   siteName: "Ryan Aulia - Aulianza Landing Page",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://analytics.aulianza.com/script.js"
        data-website-id="c2ee1939-526f-4607-9cfb-cc19817333cf"
      />
      <body className={clsx(sora.className)}>
        <div className="max-w-[480px] mx-auto bg-white md:shadow-xl md:rounded-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
