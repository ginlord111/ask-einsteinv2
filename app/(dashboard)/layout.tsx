import Navbar from "@/components/Navbar";
import React from "react";
import Sidebar from "@/components/Sidebar";
import { getApiLimit } from "@/lib/api-limit";
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimit = await getApiLimit()
  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar apiLimit ={apiLimit}/>
      </div>
      <main className="md:pl-72">
    <Navbar />
      {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
