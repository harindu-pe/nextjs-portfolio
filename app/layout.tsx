import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// theme provider
import ThemeProvider from "@/components/shared/ThemeProvider";

// toaster
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Harindu - Web Developer",
  description:
    "Elevate your online presence with visually stunning performant websites.",
  icons: {
    icon: "/icon.png", // /public path
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
