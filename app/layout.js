import Script from "next/script";
import CursorControl from "./components/CursorControl";
import "./globals.css";
import "remixicon/fonts/remixicon.css"

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
        {children}

        <Script src="/js/intersectAnimation.js"></Script>
      </body>
    </html>
  );
}
