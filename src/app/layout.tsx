import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import "leaflet/dist/leaflet.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distrito el Golf",
  description: "Landing inicial para la Fundacion Distrito el Golf en Las Condes, Santiago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="pb-16 md:pb-0">
        <Header />
        {children}
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
