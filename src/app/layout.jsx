import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Mubashar Hassan | MERN Stack Developer",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body>
        <Navbar/>
        {children}
        <footer className="p-6 text-center font-medium text-gray-700 bg-white border-t">
          <p>© 2025 <Link href={'/'} className="text-orange-400 hover:underline ">Mubashar.Dev</Link> | Designed & Developed by Mubashar Hassan</p>
        </footer>
        <Toaster/>
      </body>
    </html>
  );
}
