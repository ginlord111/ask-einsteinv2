"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
interface MobileSidebarProps{
  apiLimit:number;
}
const MobileSidebar = ({apiLimit}:MobileSidebarProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  /// for dehydration in react
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  // hereee
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <Sidebar  apiLimit={apiLimit}/>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
