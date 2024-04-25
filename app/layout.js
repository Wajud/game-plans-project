import { Poppins } from "next/font/google";
import "./globals.css";
import MobileHeader from "@/app/components/MobileHeader";
import DesktopSideBar from "./components/DesktopNavlinks";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400"] });

export const metadata = {
  title: "Multi Form Project",
  description: "NextJs Multi Form Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} md:flex gap-20 `}>
        <div className="md:hidden">
          <MobileHeader />
        </div>
        <div className="hidden md:block w-[30%] h-[100vh]">
          <DesktopSideBar />
        </div>

        <div className="md:self-center md:w-[70%]">{children}</div>
      </body>
    </html>
  );
}
