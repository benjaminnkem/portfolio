import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const poppins = Poppins({
  weight: ["200", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="cursor1"></div>
        <div className="cursor2"></div>

        <Navbar />

        {children}
        <Analytics />
        <Footer></Footer>
      </body>
    </html>
  );
}
