import React from 'react'
import MobileSidebar from './Mobile-Sidebar'
import { UserButton } from '@clerk/nextjs'

  interface NavbarProps{
    apiLimit?:number
  }
const Navbar = async ({apiLimit=0}:NavbarProps) => {
 
  return (
    <div className='flex p-4 items-center'>
  <MobileSidebar apiLimit={apiLimit}/>
    <div className='flex justify-end w-full'>
        <UserButton afterSignOutUrl='/' />
    </div>
    </div>
  )
}

export default Navbar