import Navbar from "@/components/Navbar";
import React from "react";
import Sidebar from "@/components/Sidebar";
import { getApiLimit } from "@/lib/api-limit";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimit = await getApiLimit()
  const session = await getServerSession(authOptions);
  return (
    <div className="relative h-full">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
        <Sidebar apiLimit ={apiLimit}/>
      </div>
      <main className="md:pl-72">
    <Navbar userImage={session?.user.image as string}/>
      {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
