import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Home from "./page";
import About from "./Pages/web_contant/about";
import Index from "./Pages/web_contant";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DigiProc",
  description: "DigiProc is a digital procurement platform that helps companies streamline and automate supplier management, especially for smaller, often-overlooked suppliers.",
  keywords: "DigiProc, digital procurement, supplier management, procurement automation, supplier optimization",
  openGraph: {
    title: "DigiProc - Streamlined Digital Procurement",
    description: "Optimize your procurement process with DigiProc's automated supplier management platform.",
    url: "https://www2.digiproc.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigiProc - Streamlined Digital Procurement",
    description: "DigiProc's platform helps companies automate and optimize supplier management, focusing on cost savings, compliance, and sustainability.",
    site: "@yourTwitterHandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
