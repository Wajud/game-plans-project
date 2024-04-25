import React from "react";
import Link from "next/link";

export const links = [
  {
    title: 1,
    details: "your info",
  },
  {
    title: 2,
    details: "select plan",
  },
  {
    title: 3,
    details: "add-ons",
  },
  {
    title: 4,
    details: "summary",
  },
];

const MobileNavlinks = () => {
  return (
    <ul className="flex justify-center gap-4">
      {links.map((link) => (
        <li className="w-8 h-8 text-center flex justify-center items-center text-white rounded-full border-2 border-white">
          <Link href="/">{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNavlinks;
