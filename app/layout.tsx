import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/**
 * Hovedlayout for alle sidene, slik at de får samme oppbygning.
 * @param children - Innholdet på siden som endres når brukeren bytter side.
 * @returns Layouten med header, sideinnhold og footer.
 */

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
