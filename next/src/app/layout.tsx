import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderMenu from "../_components/LayoutParts/HeaderMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Sample",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        <div>
          <div className="flex flex-col h-fit relative">
            <HeaderMenu />
            <div className="mx-auto" style={{ marginTop: '100px', width: '1000px' }}>
              {children} 
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
