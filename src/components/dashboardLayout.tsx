import React, { useState } from "react";
import { FaChartBar, FaList } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {caouselCards, dualCards, gridCards, imageIcons, salesData} from "@/utils/stores";
import Image from "next/image";


export default function DashboardLayout() {
  const [active, setActive] = useState("1 week");
  const buttons = ["1 week", "1 month", "1 year"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {/* LHS Cell */}
      <div className="md:col-span-3 space-y-4">
        {/* Top Row */}
        <div className="border border-gray-300 rounded p-4">
          {/* Top Half */}
          <div className="flex flex-col md:flex-row justify-between border-b border-gray-300  pb-4 mb-4">
            {/* Left ...*/}
            <div>
              <h2 className="text-lg font-semibold">Sales Overview</h2>
              <p className="text-sm text-gray-500">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>
            {/* Right */}
              <div className="flex flex-col space-y-4">
                  <button className="px-4 py-2 rounded-full border border-gray-400 w-fit bg-white text-black text-sm self-end">
                      View transactions
                  </button>

                  <div className="flex space-x-4">
                      {buttons.map((label) => (
                          <button
                              key={label}
                              onClick={() => setActive(label)}
                              className={`rounded px-3 py-1 text-sm cursor-pointer transition-colors duration-200 
          ${active === label ? "bg-gray-200" : "bg-white hover:bg-gray-200"}`}
                          >
                              {label}
                          </button>
                      ))}
                  </div>
              </div>


          </div>

          {/* Bottom Half */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {/* Histogram Placeholder */}
            <div className="flex-1 bg-gray-100 flex items-center justify-center text-gray-500 rounded-lg">
              {/* Histogram */}
              <div className="w-full md:w-2/3 mb-4 md:mb-0">
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={salesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${value}M`} />
                    <Tooltip formatter={(value) => `${value}M`} />
                    <Bar dataKey="revenue" fill="#4545FE" name="Revenue" />
                    <Bar dataKey="profit" fill="#12B76A" name="Profit" />
                    <Bar dataKey="expenses" fill="#F04438" name="Expenses" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 2x2 Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gridCards.map((item: any, i: number) => (
                      <div
                          key={i}
                          className="text-center border border-gray-300 rounded-lg p-2 flex flex-col justify-center items-center"
                      >
                          <p className={`text-lg font-semibold ${item.color}`}>{item.amount}</p>
                          <p className="flex items-center space-x-2 text-xs text-gray-500">
                              <span>{item.text}</span>
                              <span>{item.icon}</span>
                              <span className={`${item.percentColor}`}>{item.percent}</span>
                          </p>
                      </div>
                  ))}
              </div>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caouselCards.map((item:any,i:number) => (
              <div key={i} className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image src={item} alt="Background" fill style={{ objectFit: 'cover' }} className="z-0"/>
                  <div className="absolute inset-0 z-10 flex items-end p-4 bg-gray-300/30">
                      {/* Overlay content here */}
                  </div>
              </div>
          ))}
        </div>
      </div>

      {/* RHS Cell */}
      <div className="space-y-4">
        {/* Top Row */}
        <div className="space-y-4">
          {dualCards.map((item:any,i:number) => (
            <div key={i} className="border border-gray-300  rounded h-[190px]">
              {/* Navbar */}
              <div className="flex justify-between items-center border-b border-gray-300 bg-gray-100 p-2">
                <div className="flex items-center space-x-2">
                    {item.icon}
                  <p className="text-sm">
                    {item.title}
                  </p>
                </div>
                <button className="text-blue-500 text-xs">View all &gt;</button>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-3 p-4 mt-[20px] text-center justify-center">
                {item.data.map((elem:any,j:number) => (
                  <div key={j}>
                    <p className="text-sm text-gray-500">{elem.title}</p>
                    <p className="text-2xl font-bold">{elem.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

          <div className="relative h-48 w-full rounded-lg overflow-hidden">
              <Image src={imageIcons.pic3} alt="Background"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="z-0"
              />
              <div className="absolute inset-0 z-10 flex items-end p-4 bg-gray-300/30">
                  {/* Overlay content here */}
              </div>
          </div>
      </div>
    </div>
  );
}
