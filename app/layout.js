import CursorControl from "./components/CursorControl";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="cursor1"></div>
        <div className="cursor2"></div>

        <CursorControl />
        <Navbar />

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
