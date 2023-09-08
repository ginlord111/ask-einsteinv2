import Image from 'next/image'
import React from 'react'
interface LandingLayoutProps{
    children:React.ReactNode
}
const LandingLayout= ({children}:LandingLayoutProps) => {
  return (
  <main className='h-full w-full overflow-auto'>
    <Image src={'/bgg.jpg'} fill alt="BG-PIC" className="relative"/>
    <div className='w-full h-full'>
    {children}
    </div>
  </main>
  )
}

export default LandingLayout