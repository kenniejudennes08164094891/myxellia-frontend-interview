import React, { useState } from "react";
import { FaChartBar, FaList } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { gridCards, salesData } from "@/utils/stores";


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
            <div className="flex space-x-10">
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
            <div className="flex-1 grid grid-cols-2 gap-4">
              {gridCards.map((item: any, i: number) => (
                <div
                  key={i}
                  className="text-center border border-gray-300  rounded-lg p-2 flex flex-col justify-center items-center"
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
          {[1, 2].map((i) => (
            <div
              key={i}
              className="relative bg-gray-300 h-48 rounded-lg flex items-end p-4"
              style={{
                backgroundImage: `url('https://via.placeholder.com/300x200')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div>
                <p className="text-white text-sm">Small text</p>
                <p className="text-white font-bold">Bolder Text</p>
              </div>
              {/* Carousel dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {[1, 2, 3].map((dot) => (
                  <span
                    key={dot}
                    className="w-2 h-2 bg-white rounded-full"
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RHS Cell */}
      <div className="space-y-4">
        {/* Top Row */}
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="border border-gray-300  rounded h-[173px]">
              {/* Navbar */}
              <div className="flex justify-between items-center border-b border-gray-300 bg-gray-100 p-2">
                <div className="flex items-center space-x-2">
                  <FaList />
                  <span className="text-sm font-semibold">
                    Listings Overview
                  </span>
                </div>
                <button className="text-blue-500 text-xs">View all &gt;</button>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-3 p-4 text-center">
                {[1, 2, 3].map((j) => (
                  <div key={j}>
                    <p className="text-xs text-gray-500">Title</p>
                    <p className="text-lg font-bold">123</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          className="relative bg-gray-300 h-48 rounded-lg flex items-end p-4"
          style={{
            backgroundImage: `url('https://via.placeholder.com/300x200')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <p className="text-white text-sm">Small text</p>
            <p className="text-white font-bold">Bolder Text</p>
          </div>
          {/* Carousel dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[1, 2, 3].map((dot) => (
              <span key={dot} className="w-2 h-2 bg-white rounded-full"></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
