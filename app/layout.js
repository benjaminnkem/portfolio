import "./globals.css";

export const metadata = {
  title: "Benjamin Nkem - Portfolio",
  description: "My name is Nkem Benjamin, and this is my personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
