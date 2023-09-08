
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import LandingMobile from "./LandingMobile";
export const font = Montserrat ({
    weight:'600',
    subsets:['latin']
});
const LandingNavbar = () => {
  return (
    <nav className="hidden fixed lg:flex mt-5 justify-between w-screen px-[100px] z-10">
      <Link href='/' className="flex items-center p-1">
        <div className="relative mr-2">
        <Image width={40} height={70} alt="LOGO" src='/einstein.png'/>
        </div>
        <h1 className={cn('text-2xl font-bold text-white', font.className)}>
        Ask Einstein
        </h1>
      </Link>
      <div className={cn("flex items-center pr-2 gap-x-[40px] text-xl font-bold text-white cursor-pointer", font.className)}>
      <Link href='/sign-up' className="flex items-center ">
       <p className="hover:underline">Sign up</p>
        </Link>
        <Link href='/sign-in'>
        <p className="hover:underline">Log in</p>
        </Link>
      </div>
      <LandingMobile />
      
    </nav>
  );
};

export default LandingNavbar;
