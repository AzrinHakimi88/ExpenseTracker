import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideBar";
import BottomNav from "@/components/bottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-blue-800'>
        <div className="xl:flex xl:flex-row md:flex  md:flex-row  sm:flex-col min-w-fit">
          <SideBar/>
          {children}
          <BottomNav/>
        </div>
        </body>
    </html>
  );
}