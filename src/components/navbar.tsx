import { HomeIcon, BellIcon, UserIcon, CogIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { imageIcons } from "@/utils/stores";
import Image from "next/image";


export default function Navbar() {
    return (
        <nav className="bg-black w-full max-w-[1440px] h-[79px] px-6 flex items-center justify-between mx-auto">
            <div className="flex items-center space-x-2 ml-[-40px]">
                <Image
                    src={imageIcons.myxelliah}
                    alt="company-logo"
                    width={120}
                    height={50}
                />
            </div>

            <div className="flex items-center space-x-6">
                <Image src={imageIcons.bell} alt="notifications-icon" className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" />
                <Image src={imageIcons.calculator} alt="calculator-icon" className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" />
                <Image src={imageIcons.calender} alt="calculator-icon" className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" />
                <Image src={imageIcons.chat} alt="calculator-icon" className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" />
                <Image src={imageIcons.dee} alt="calculator-icon" className="h-6 w-6 text-white cursor-pointer hover:text-gray-300" />
            </div>
        </nav>

    );
}
