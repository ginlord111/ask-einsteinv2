import React from 'react'
import { UserButton } from '@clerk/nextjs'
interface UserReplyProps{
  children:React.ReactNode;
}

const UserReply = ({children}:UserReplyProps) => {
  return (
    <div className='flex items-center gap-x-5'>
    <UserButton />
    {children}
    </div>
  )
}

export default UserReply