import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const socials =  [
  { name: "LinkedIn", icon: "/LinkedIn.svg", url: ""},
  { name: "Instagram" , icon: "", url:""},
  { name: ""}

]

export const metadata = {
  title: "Caitlin Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white-950 text-black font-inter min-h-screen flex flex-col">
        {/* Navbar dengan glassmorphism effect */}
        <Navbar/>

        {/* Main content dengan flex-grow */}
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Caitlin. All rights reserved.
        </footer>
      </body>
    </html>
  );
}