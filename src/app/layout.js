import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Home/Footer";
import { Toaster } from "react-hot-toast";
import HeroThemeProviders from "./providers/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "HeroRide | Premium Car Rentals",
  description: "Find and book affordable dream cars for your next trip. Explore our fleet of luxury, sport, and daily rides.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // data-theme='dark'
      // class='dark'
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <HeroThemeProviders>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <Toaster />
        </HeroThemeProviders>
      </body>
    </html>
  );
}
