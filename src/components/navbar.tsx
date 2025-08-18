import { HomeIcon, BellIcon, UserIcon, CogIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { imageIcons } from "@/utils/stores";
import Image from "next/image";
import { setCalendarModal, setOpenModal } from '@/utils/emmitters';
import { useState } from 'react';


export default function Navbar() {
    const [isModal, setIsModal] = useState<boolean>(false);
      const [isCalendarModal, setIsCallendarModal] = useState<boolean>(false);

    return (
        <nav className="bg-black w-full max-w-[1440px] h-[79px] px-4 sm:px-6 lg:px-12 flex items-center justify-between mx-auto">
            <div className="flex items-center space-x-2">
                <Image
                    src={imageIcons.myxelliah}
                    alt="company-logo"
                    width={120}
                    height={50}
                />
            </div>

            <div className="flex items-center space-x-6">
                <Image
                    src={imageIcons.bell}
                    alt="notifications-icon"
                    className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
                />
                <Image onClick={() => setOpenModal(true)}
                    src={imageIcons.calculator}
                    alt="calculator-icon"
                    className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
                />
                <Image onClick={() => setCalendarModal(true)}
                    src={imageIcons.calender}
                    alt="calendar-icon"
                    className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
                />
                <Image
                    src={imageIcons.chat}
                    alt="chat-icon"
                    className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
                />
                <Image
                    src={imageIcons.dee}
                    alt="profile-icon"
                    className="h-6 w-6 text-white cursor-pointer hover:text-gray-300"
                />
            </div>
        </nav>

    );
}
