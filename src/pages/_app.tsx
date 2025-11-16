import { type AppType } from "next/dist/shared/lib/utils";

import "@/styles/globals.css";
import "@/styles/locomotive-scroll.css";

import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo-black",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div lang={"en"} className={`${archivoBlack.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
