import { DM_Sans, Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Baddies Bokklubb",
  description: "Bøker er bedre når vi leser dem sammen.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nb" className={`${dmSans.variable} ${inter.variable}`}>
      <body id="top">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
