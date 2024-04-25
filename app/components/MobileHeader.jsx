import Link from "next/link";
import Image from "next/image";
import MobileHeader from "@/app/assets/images/bg-sidebar-mobile.svg";
import MobileNavlinks from "./MobileNavlinks";

export default function Home() {
  return (
    <div>
      <Image
        src={MobileHeader}
        alt="mobile-header"
        className="w-full h-[25vh] object-cover"
      />
      <div className="absolute w-full top-8 flex justify-center">
        <MobileNavlinks />
      </div>
    </div>
  );
}
