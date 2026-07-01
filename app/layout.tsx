import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  style: ["italic", "normal"],
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Yılan | Yazılım Mühendisi",
  description:
    "React Native, Python ve Yapay Zeka (Derin Öğrenme) alanlarında çözümler üreten yazılım mühendisi Hamza Yılan'ın kişisel portföyü.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d0f]">
        {children}
      </body>
    </html>
  );
}
