import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/global/header";
import Footer from "./components/global/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Just Tools",
  description:
    "A collection of tools used to help calulate costs or estimates for home projects.",
  keywords: ["CounterTop Calculator"],
  creator: "Justice Hemming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col justify-between bg-yellow-50">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
