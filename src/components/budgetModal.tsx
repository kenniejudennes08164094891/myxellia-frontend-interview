import React, { useState, useEffect } from "react";
import { imageIcons, people } from "@/utils/stores";
import Image from "next/image";
import { ModalProps } from "@/utils/constants";



const BudgetModal = ({ isOpen, onClose }: any) => {
  const [screnHeight, setScreenHeight] = useState<string>("");
    useEffect(() => {
    // Get the screen's height to ascertain the modal's height
    const heightOfScreen = window.innerHeight;
    const vh = (heightOfScreen / window.innerHeight) * 100;
    setScreenHeight(`md:max-h-[${vh}vh]`);
  }, [screnHeight])


  if (!isOpen) {
    return null;
  }


  return (
    <div onClick={onClose} className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">

      <div className={`rounded-xl shadow-2xl m-4 w-full h-full md:max-w-xl flex flex-col animate-fade-in overflow-hidden ${screnHeight}`}>

        {/* Upper Section - 40% with Next Image */}
        <div className="h-[40%] w-full relative">
          <Image
            src={imageIcons.bgImage}
            alt="Modal background"
            fill
            className="object-cover object-center rounded-t-xl"
            priority
          />
        </div>

        <div className="h-[60%] bg-white items-center justify-center flex flex-col p-6 overflow-y-auto">
          <ul className="max-w-md dark:divide-gray-700">
            {people.map((person, index) => (
              <li
                key={person.id}
                className={`flex items-center space-x-4 rtl:space-x-reverse ${index === 0 ? "pb-3 sm:pb-4" : index === people.length - 1 ? "pt-3 sm:pt-4" : "py-3 sm:py-4"
                  }`}
              >
                <div className="relative w-8 h-8 shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="rounded-full object-cover object-center"
                    priority
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                    {person.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {person.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                </div>
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <div className="mt-auto w-full">
            <button
              onClick={onClose}
              className="px-6 py-3 font-semibold text-white bg-[#18181B] rounded-xl hover:bg-[#18181B] transition-colors duration-200 shadow-md w-full"
            >
              Close Modal
            </button>
          </div>


        </div>
      </div>

      <style>
        {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fadeIn 0.3s ease-out;
      }
    `}
      </style>
    </div>

  );
};

export default BudgetModal;

