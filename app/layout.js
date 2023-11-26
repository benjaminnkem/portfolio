import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import SmoothScroll from "@/components/Common/Shared/smooth-scroll";
import Gsap from "@/components/Common/Shared/gsap-plugin";
import CursorControl from "@/components/Common/Shared/cursor-control";
import Providers from "@/lib/utils/providers";
import { dmSans } from "@/lib/utils/fonts";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <Navbar />

          {children}
          <Footer />

          {/* Others */}
          <CursorControl />
          <Gsap />
          {/* <SmoothScroll /> */}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
