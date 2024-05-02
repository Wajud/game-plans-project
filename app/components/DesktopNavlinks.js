"use client";
import { links } from "@/app/components/MobileNavlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
const DesktopSideBar = () => {
  const pathname = usePathname();
  return (
    <div className="relative z-20 top-[2vh] left-4 w-full h-[96vh] rounded-xl bgDesktop">
      <ul className="px-6 pl-8 pt-12 flex flex-col gap-6 ">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="flex gap-4 items-center">
              <p
                className={`w-8 h-8 text-center flex justify-center items-center text-white text-sm font-semibold rounded-full border-2  ${
                  link.href === pathname
                    ? "bg-blue-200 border-blue-200 text-black"
                    : "bg-transparent"
                }`}
              >
                {link.title}
              </p>
              <div>
                <p className="uppercase text-gray-400 font-semibold text-sm -mb-1">
                  step {link.title}
                </p>
                <p className="uppercase font-semibold text-white tracking-wider">
                  {link.details}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopSideBar;
