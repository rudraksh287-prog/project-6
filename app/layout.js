import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai",
  description: "This website is a crowd funding website for chai lovers",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-blue-100 bg-[radial-gradient(#a6d8d3_1px,transparent_1px)] [background-size:20px_20px] min-h-full flex flex-col">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-blue-100 bg-[radial-gradient(#a6d8d3_1px,transparent_1px)] [background-size:20px_20px]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
