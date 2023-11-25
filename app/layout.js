import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import SmoothScroll from "@/components/Common/Shared/smooth-scroll";
import Gsap from "@/components/Common/Shared/gsap-plugin";
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
        <Footer />

        {/* Others */}
        {/* <CursorControl /> */}
        <Gsap />
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
