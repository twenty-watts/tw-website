// app/layout.tsx
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PageTransition from "@/app/components/PageTransition";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twenty Watts – AI for Energy Innovation",
  description: "Harnessing AI to revolutionize energy insights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#050A30] text-white font-inter">
        {/* Navigation Header */}
        <Header />

        {/* Page transitions applied here */}
        <PageTransition>
          <main>{children}</main>
        </PageTransition>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}