import React from 'react'
import MobileSidebar from './Mobile-Sidebar'
import { UserButton } from '@clerk/nextjs'

  
const Navbar = () => {
  return (
    <div className='flex p-4 items-center'>
  <MobileSidebar />
    <div className='flex justify-end w-full'>
        <UserButton afterSignOutUrl='/' />
    </div>
    </div>
  )
}

export default Navbar