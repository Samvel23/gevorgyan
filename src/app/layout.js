import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"], // normal and bold
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"], // normal and bold
});

export const metadata = {
  title: "Gevorgyan Legal Consulting",
  description:
    "Providing expert legal consulting services for immigration, translation, and business setup.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lora.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
