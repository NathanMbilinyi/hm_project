import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.habarimaalumtv.co.tz"),
  title: {
    default: "Habari Maalum TV | Habari, Ukweli, Uhalisia",
    template: "%s | Habari Maalum TV",
  },
  description:
    "Habari Maalum TV ni kituo cha televisheni kinachotoa habari, mahojiano, burudani na vipindi mbalimbali vya kijamii na maendeleo kutoka Tanzania na ulimwengu.",
  keywords: [
    "Habari Maalum TV",
    "Habari Tanzania",
    "Televisheni Tanzania",
    "Vipindi vya TV",
    "Dar es Salaam TV",
  ],
  openGraph: {
    title: "Habari Maalum TV | Habari, Ukweli, Uhalisia",
    description:
      "Habari, mahojiano, burudani na matukio muhimu kutoka Tanzania na ulimwengu.",
    url: "https://www.habarimaalumtv.co.tz",
    siteName: "Habari Maalum TV",
    locale: "sw_TZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Habari Maalum TV",
    description:
      "Habari, mahojiano, burudani na matukio muhimu kutoka Tanzania na ulimwengu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sw">
      <body className={`${poppins.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
