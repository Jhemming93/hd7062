import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HD Tools Test",
  description: "Tools for me to use at work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
