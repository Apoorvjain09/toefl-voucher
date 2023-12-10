import type { Metadata } from "next";
import { Baloo_Bhai_2 } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const mainFont = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Selenium Education",
  description:
    "the best online learning place in the universe, with cool case studies, great mentors and graduates who are already working in the best companies in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(mainFont.className)}>
      <body>{children}</body>
    </html>
  );
}
