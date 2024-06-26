import type { Metadata } from "next";
import { Cormorant , Playfair } from "next/font/google";

import "./globals.css";
// const cormorant = Cormorant({
//   weight: ["300","400","700"],
//   subsets: ["latin"],
// });

const playfair = Playfair({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Hotels",
  description: "Saas Software as services hotel template information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className}`}>
        {children}
      </body>
    </html>
  );
}
