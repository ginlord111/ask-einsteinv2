import Link from "next/link";
import { font } from "./LandingNavbar";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {BsArrowUpRight} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
const LandingContent = () => {
  return (
    <div
      className={cn(
        "flex h-full items-center  relative ml-[100px] ",
        font.className
      )}
    >
      <div className="flex flex-col items-start lg:max-w-[800px] gap-y-5">
        <h1 className="text-5xl text-bold text-white">Ask Einstein</h1>
        <p className="text-sm text-white font-medium leading-6">
          Are you ready to dive into the depths of creativity and unlock the
          genius within you? Welcome to "Ask Einstein," where the power of
          artificial intelligence meets your imagination. Inspired by the
          legendary physicist Albert Einstein, this innovative platform
          harnesses the latest in AI technology to help you create, learn, and
          imagine like never before.
        </p>
        <Link href='/dashboard' className="flex items-center">
        <Button className="bg-transparent border hover:text-black hover:bg-white font-bold">
            Get Started <BsArrowUpRight size={15} weight={1000} className='ml-2'/>
        </Button>
      </Link>
   
      </div>
      <div className="flex items-end mt-[60rem]">
       <Button className="group bg-transparent border hover:text-black hover:bg-white">
        Read More <BsArrowRight className='ml-2 group-hover:rotate-90 transition'/>
       </Button>
        </div> 
    </div>
  )
  
};

export default LandingContent;
