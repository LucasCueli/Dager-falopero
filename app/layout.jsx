import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: '--font-jetbrainsMono'});

export const metadata = {
  title: "Dager-falopero",
  description: "Generated by Lucas Cueli = '5l0wk1ll'.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}>
        <Header />  
        <PageTransition>
        <StairTransition />
        </PageTransition>
        {children}
      </body>
    </html>
  );
}
