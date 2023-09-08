import React from 'react'
import Image from 'next/image'
import  ReactMarkdown  from 'react-markdown'
interface AssistantReplyProps{
  children:string;
}
const AssistantReply = ({children}:AssistantReplyProps) => {
  
  return (
    <div className='flex items-center gap-x-5 overflow-x-scroll lg:overflow-hidden w-max-w-[50vw] w-full'>
    <Image
           className="relative"
           width={40}
           height={70}
           alt="Einstein Logo"
           src="/einstein.png"
         />
         <div>
         <ReactMarkdown components={{pre:({node, ...props})=>(
          <div className='overflow-auto w-full my-2 bg-black/19 p-2 rounded-lg'>
            <pre {...props}/>
          </div>
         ),
         code:({node, ...props})=>(
          <code className='bg-black/10 rounded-lg p-1' {...props}/>
         )
         }} className='text-sm overflow-hidden leading-7'>
             {children || ""}
         </ReactMarkdown>
         </div>
         </div>
  )
}
export default AssistantReply