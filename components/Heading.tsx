import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react'
interface HeadingProps{
    title:string;
    description:string;
    icon:LucideIcon;
    iconColor?:string;
    bgColor:string;
}
const Heading = ({title, description, icon:Icon, iconColor, bgColor}:HeadingProps) => {
  return (
   <>
    <div className='px-4 lg:px-8 flex items-center gap-x-5 mb-8 pt-4'>
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
    <Icon className={cn("w-10 h-10", iconColor)}/>
        </div>
     <div>
      <h2 className='font-bold text-xl mb-1'>{title}</h2>
      <p className='text-sm text-muted-foreground'>{description}</p>
        </div>
    </div>
   </>
  )
}

export default Heading