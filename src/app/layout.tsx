import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Corben } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const corben = Corben({
  variable: "--font-corben",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Double Glazing Windows in Milton Keynes | Sightline Windows",
  description: "Sightline Windows offers professional double glazing and window installations in Milton Keynes. Contact us for a free quote.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <Script
          src="https://kit.fontawesome.com/9e8c3e5a45.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${corben.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
  
}
