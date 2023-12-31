import { Providers } from "@/providers";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Audiophile",
  description: "Generated by create next app",
  keywords: "audiophile, ecommerce, headphones, speakers, earphones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${manrope.className} w-full h-screen scroll-bar overflow-x-hidden`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
