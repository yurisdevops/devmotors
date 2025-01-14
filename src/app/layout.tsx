import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada",
  description: "Especialista em carros clássicos",
  keywords: [
    "oficina",
    "carros",
    "carros clássicos",
    "manuntencao",
    "alinhamento",
    "pintura",
    "troca de oleo",
    "oficina de carros",
  ],
  openGraph: {
    title: "DevMotors - Sua oficina especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 24 }}>
          Todos os direitos reservados DevMotors @
          {`${new Date().getFullYear()}`}{" "}
        </p>
      </body>
    </html>
  );
}
