"use client"
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import LandingMobile from "./LandingMobile";
import { signIn } from "next-auth/react";
export const font = Montserrat ({
    weight:'600',
    subsets:['latin']
});
const LandingNavbar = () => {
  return (
    <nav className="fixed flex mt-5 justify-between w-screen lg:px-[100px] z-10">
      <Link href='/' className="flex items-center p-1">
        <div className="relative mr-2 h-10 w-10">
        <Image fill alt="LOGO" src='/einstein.png'/>
        </div>
        <h1 className={cn('lg:text-2xl font-bold text-white', font.className)}>
        Ask Einstein
        </h1>
      </Link>
      <div className={cn("hidden lg:flex items-center pr-2 gap-x-[40px] text-xl font-bold text-white cursor-pointer", font.className)}>
      <Link href='/sign-up' className="flex items-center ">
       <p className="hover:underline">Sign up</p>
        </Link>
        <div onClick={()=>signIn("", {
          redirect:false,
          callbackUrl:"/dashboard",
        })}>
        <p className="hover:underline">Log in</p>
        </div>
      </div>
      <div className="lg:hidden">
      <LandingMobile />
      </div>
  
    </nav>
  );
};

export default LandingNavbar;
