import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import StarsBackground from "@/components/StarsBackground";
import CustomScrollbar from "@/components/CustomScrollbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Emparial | Real Estate & Architecture",
  description: "A vision for liveable, sustainable & affordable dwellings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased selection:bg-white selection:text-navy`}>
        <SmoothScroll>
          <CustomCursor />
          <CustomScrollbar />
          <StarsBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
