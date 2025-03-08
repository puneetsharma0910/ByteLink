import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



const poppins = Poppins({
  variable: "--font-poppins",
   weight : ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ByteLink- Your link shortener",
  description: "ByteLink is a link shortener that makes your links shorter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased  bg-blue-50  ` }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
