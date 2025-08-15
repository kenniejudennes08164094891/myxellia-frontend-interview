import { useState } from "react";
import { HomeIcon, BellIcon, UserIcon, CogIcon, QuestionMarkCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { imageIcons } from "@/utils/stores";
import Image from "next/image";


export default function Subnavbar() {
  const [active, setActive] = useState<number | null>(null);

  const navItems = [
    { icon: <Image src={imageIcons.home} className="h-5 w-5" alt="Home" />, text: "Dashboard" },
    { icon: <Image src={imageIcons.box} className="h-5 w-5" alt="Box" />, text: "Listings" },
    { icon: <Image src={imageIcons.user} className="h-5 w-5" alt="User" />, text: "Users" },
    { icon: <Image src={imageIcons.pages} className="h-5 w-5" alt="Pages" />, text: "Request" },
    { icon: <Image src={imageIcons.scroll} className="h-5 w-5" alt="Scroll" />, text: "Applications" },
  ];

  return (
      <nav className="bg-white shadow px-4 sm:px-6 lg:px-12 py-4">
          <div className="grid grid-cols-7 gap-2 items-center">
              {navItems.map((item, index) => (
                  <button
                      style={{ width: '150px' }}
                      key={index}
                      onClick={() => setActive(index)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded cursor-pointer transition
          ${active === index ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  >
        <span className={`text-gray-700 ${active === index ? "font-bold" : ""}`}>
          {item.icon}
        </span>
                      <span
                          className={`text-sm text-gray-700 ${active === index ? "font-bold" : "font-medium"}`}
                      >
          {item.text}
        </span>
                  </button>
              ))}

              <div className="col-span-2 flex justify-end">
                  <div className="flex items-center border bg-gray-200 rounded-lg px-2 py-1 w-full max-w-[335px]">
                      <Image src={imageIcons.search} alt="search" className="h-5 w-5 text-gray-500" />
                      <input
                          type="text"
                          placeholder="Search listings, users here..."
                          className="ml-2 outline-none border-none text-sm text-gray-700 bg-gray-200 w-full"
                      />
                  </div>
              </div>
          </div>
      </nav>

  );
}
