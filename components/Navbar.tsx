import React from 'react'
import MobileSidebar from './Mobile-Sidebar'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react'
  interface NavbarProps{
    apiLimit?:number
    userImage:string
  }
const Navbar = async ({apiLimit=0,userImage}:NavbarProps) => {
  return (
    <div className='absolute top-0 right-0 pr-5'>
  <MobileSidebar apiLimit={apiLimit}/>
    <div className='flex justify-end w-full '>
        <div className='rounded-full bg-black border '>
        <Avatar>
  <AvatarImage src={userImage}/>
</Avatar>
        </div>
    </div>
    </div>
  )
}

export default Navbar