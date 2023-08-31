import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan Aulia - Aulianza Landing Page",
  description: "My Personal Landing Page",
  icons: "/images/aulianza.png",
  // openGraph: {
  //   images: "/images/aulianza.png",
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
      <body className={sora.className}>
        <div className="max-w-xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
