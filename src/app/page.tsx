"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Subnavbar from "@/components/subnavbar";
import Subnavbarsm from "@/components/subnavbarsm";
import DashboardLayout from "@/components/dashboardLayout";

export default function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <div>
          <Navbar />
        </div>

        <br />
        <div>
          <span className="hidden lg:block">
            <Subnavbar />
          </span>

          <span className="block lg:hidden">
            <Subnavbarsm />
          </span>
        </div>



        {/* Main Page */}
        <main className="flex-grow p-6 bg-gray-50">
          <div className="ml-10 text-gray-900">
            <h1 className="text-2xl font-bold mb-4">Welcome, Alixir</h1>
            <DashboardLayout />
          </div>
        </main>
      </div>
    </>
  );
}
