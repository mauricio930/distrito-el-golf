import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Distrito el Golf",
  description:
    "Demo visual de Distrito el Golf, el pase digital para descubrir beneficios, actividades y comercios del barrio El Golf.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
