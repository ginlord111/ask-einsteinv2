'use client'
import React, { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
const LandingMobile = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
    <SheetTrigger>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu color='white'/>
      </Button>
    </SheetTrigger>
    <SheetContent className="p-5  bg-gray-600/10" side="left">
      <Image src='/bgg.jpg' alt='Background' fill className='relative'/>
    <div className='flex flex-col mt-[50px] gap-y-5'>
    <Link href='/sign-in' className='hover:underline font-bold text-xl text-white relative'>
      Log in
    </Link>
    <Link href='/sign-up' className='hover:underline font-bold text-xl text-white relative'>
     Sign up
    </Link>
    </div>
    </SheetContent>
  </Sheet>
  )
}

export default LandingMobile