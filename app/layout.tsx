import type { Metadata } from "next";
import { Archivo_Black, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Malek | CS Student & Systems Explorer",
  description: "Portfolio of Malek - CS Student & Systems Explorer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="min-h-screen selection:bg-black selection:text-[#FFDE17]">
        {/* <CustomCursor />  */}
        {children}
      </body>
    </html>
  );
}