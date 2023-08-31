import type { Metadata } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Aulia - Aulianza Landing Page",
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
        src="https://umami.aulianza.id/script.js"
        data-website-id="c2ee1939-526f-4607-9cfb-cc19817333cf"
      />
      <body className={sora.className}>
        <div className="max-w-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
