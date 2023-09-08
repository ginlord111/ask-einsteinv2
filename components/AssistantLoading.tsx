import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const AssistantLoading = () => {

 

    
  return (
    <div>
 
    <div className='flex p-6 items-center gap-x-5 rounded-md bg-green-600/40 mt-1'>
    <Image
           className="relative"
           width={40}
           height={70}
           alt="Einstein Logo"
           src="/einstein.png"
         />
          <p>Mr.Einstein is thinking ......</p>
        </div> 
     
        </div>
  )
}

export default AssistantLoading