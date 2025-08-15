import { useState } from "react";
import { HomeIcon, BellIcon, UserIcon, CogIcon, QuestionMarkCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { imageIcons } from "@/utils/stores";
import Image from "next/image";


export default function Subnavbarsm() {
  const [active, setActive] = useState<number | null>(null);

  const navItems = [
    { icon: <Image src={imageIcons.home} className="h-5 w-5" alt="Home" />, text: "Dashboard" },
    { icon: <Image src={imageIcons.box} className="h-5 w-5" alt="Box" />, text: "Listings" },
    { icon: <Image src={imageIcons.user} className="h-5 w-5" alt="User" />, text: "Users" },
    { icon: <Image src={imageIcons.pages} className="h-5 w-5" alt="Pages" />, text: "Request" },
    { icon: <Image src={imageIcons.scroll} className="h-5 w-5" alt="Scroll" />, text: "Applications" },
  ];

  return (
 <div className="flex bg-white overflow-x-auto sm:grid sm:grid-cols-6 gap-2 items-center no-scrollbar">
    {navItems.map((item, index) => (
      <button
        key={index}
        onClick={() => setActive(index)}
        className={`inline-flex items-center space-x-1 px-3 py-2 rounded cursor-pointer transition w-fit shrink-0
          ${active === index ? "bg-gray-200" : "hover:bg-gray-100"}`}
      >
        {/* Icon */}
        <span
          className={`text-gray-700 ${active === index ? "font-bold" : ""}`}
        >
          <span className="block text-lg sm:text-xl">{item.icon}</span>
        </span>

        {/* Text */}
        <span
          className={`text-sm text-gray-700 ${active === index ? "font-bold" : "font-medium"}`}
        >
          {item.text}
        </span>
      </button>
    ))}

    {/* Search input */}
    <div className="flex items-center border rounded px-2 py-1 shrink-0 sm:w-full w-48">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search listings, users here..."
        className="ml-2 outline-none border-none text-sm text-gray-700 w-full"
      />
    </div>
  </div>

  );
}
