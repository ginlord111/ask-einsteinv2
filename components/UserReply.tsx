import React from 'react'
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useSession } from 'next-auth/react';
interface UserReplyProps{
  children:React.ReactNode;
}

const UserReply = ({children}:UserReplyProps) => {
  const { data: session } = useSession();
  return (
    <div className='flex items-center gap-x-5'>
<Avatar>
  <AvatarImage src={session?.user.image as string}/>
</Avatar>
    {children}
    </div>
  )
}

export default UserReply