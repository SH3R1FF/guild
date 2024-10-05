import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400','500','600','700'], 
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Guild",
  description: "Guild is a platform for project showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>
      <html lang="en">
        <head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        </head>
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
