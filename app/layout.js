import Script from "next/script";
import CursorControl from "./components/CursorControl";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

export const metadata = {
  title: "Benjamin Nkem - Portfolio",
  description: "My name is Nkem Benjamin, and this is my personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="cursor1"></div>
        <div className="cursor2"></div>

        <CursorControl />
        <div className="mx-auto w-11/12 md:w-[1024px]">{children}</div>

        <Script src="/js/intersectAnimation.js"></Script>
      </body>
    </html>
  );
}
