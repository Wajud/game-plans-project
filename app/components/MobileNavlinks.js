"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  {
    title: 1,
    details: "your info",
    href: "/",
  },
  {
    title: 2,
    details: "select plan",
    href: "/plans",
  },
  {
    title: 3,
    details: "add-ons",
    href: "/add-ons",
  },
  {
    title: 4,
    details: "summary",
    href: "/summary",
  },
];

const MobileNavlinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex justify-center gap-4">
      {links.map((link, index) => (
        <li
          key={index}
          className={`w-8 h-8 text-center flex justify-center items-center text-white rounded-full border-2 ${
            link.href === pathname
              ? "bg-blue-200 border-blue-200 text-black"
              : "bg-transparent"
          }`}
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavlinks;
