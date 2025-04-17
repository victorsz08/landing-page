import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/layout";
import { GoogleAnalytics } from '@next/third-parties/google'

const GAR_ID = process.env.NEXT_PUBLIC_GA_ID || "";
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
        className={`${poppins.className} bg-gray-950 antialiased overscroll-contain scroll-smooth`}
      >
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId={GAR_ID} />
    </html>
  );
}
