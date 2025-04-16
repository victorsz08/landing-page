import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/layout";


const poppins = Poppins({
  weight: ["100",  "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Geraldo Neto | Treinador",
  description: "Treino 100% individual para alcançar seus objetivos sem ENROLAÇÃO!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-gray-950 antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
