"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {usePathname} from 'next/navigation';
import ApiCounter from "./ApiCounter";
import { LayoutDashboard,MessageSquare, ImageIcon, VideoIcon, Music, Code } from "lucide-react";
const montserat = Montserrat({ weight: "600", subsets: ["latin"] });
interface SidebarProps{
  apiLimit?:number
}
const Sidebar = ({apiLimit=0}:SidebarProps) => {
    const pathname = usePathname()
  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === '/dashboard',
      color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
       active: pathname === '/conversation',
        color: "text-violet-500",
      },

      {
        label: "Image Generator",
        icon: ImageIcon,
        href: "/image",
        active: pathname === '/image',
        color: "text-pink-700",
      },

      {
        label: "Video Generator",
        icon: VideoIcon,
        href: "/video",
        active: pathname === '/video',
        color: "text-orange-700",
      },

      {
        label: "Music Generator",
        icon: Music,
        href: "/music",
        active: pathname === '/music',
        color: "text-emerald-500",
      },

      {
        label: "Code Generator",
        icon: Code,
        href: "/code",
        active: pathname === '/code',
        color: "text-green-500",
      },

  ];

  return (
    <div className="flex flex-col space-y-4 h-full bg-[#111827] text-white">
      <div className="flex-1 px-3 py-5">
        <Link href="/" className="flex items-center pl-3 mb-14 gap-x-5">
          <Image
            className="relative"
            width={50}
            height={70}
            alt="Einstein Logo"
            src="/einstein.png"
          />
          <h1
            className={cn("text-white font-bold text-2xl", montserat.className)}
          >
            Ask Einstein
          </h1>
        </Link>
        <div className="flex space-y-2 flex-col">
          {routes.map((route) => (
            <Link href={route.href} key={route.href} className={cn("text-sm group flex  p-3 w-full group justify-start hover:text-white hover:bg-white/10 rounded-lg transition", route.active && "bg-white/10")}>
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "text-white font-semibold h-5 w-5 mr-3",
                    route.color
                  )}
                />
                {route.label}
                
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ApiCounter apiLimit={apiLimit}/>
    </div>
  );
};

export default Sidebar;
