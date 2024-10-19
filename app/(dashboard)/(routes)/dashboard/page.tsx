"use client";
import { Card } from "@/components/ui/card";
import {MessageSquare , Music, Code, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function DashboardPage (){
  const router = useRouter();
  const tools = [
    {
      label:"Conversation",
      icon : MessageSquare,
      color:"text-violet-500",
      bgColor:"bg-violet-500/10",
      href: "/conversation",
  },
//   {
//     label:"Music Generator",
//     icon : Music,
//     color:"text-emerald-500",
//     bgColor:"bg-emerald-500/10",
//     href: "/music",
// },
// {
//   label:"Image Generator",
//   icon : ImageIcon,
//   color:"text-pink-500",
//   bgColor:"bg-pink-700/10",
//   href: "/image",
// },
// {
//   label:"Video Generator",
//   icon : VideoIcon,
//   color:"text-orange-500",
//   bgColor:"bg-orange-500/10",
//   href: "/video",
// },
{
  label:"Code Generator",
  icon : Code,
  color:"text-green-500",
  bgColor:"bg-green-500/10",
  href: "/code",
},

  
  ]
  return (
    <div>
      <div className="mb-8 space-y-4 text-center py-5">
    <h2 className="text-2xl md:text-4xl font-bold">Explore the Power of AI</h2>
    <p className="text-muted-foreground font-light text-sm md:text-lg">Chat with Mr.Albert Einstein Bot</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool) =>(
        <Card onClick={()=> router.push(tool.href)} key={tool.href} className="p-4 border-black/5 flex items-center hover:shadow-md transition cursor-pointer">
          <div className="flex  gap-x-4 w-full items-center  ">
          <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
          <tool.icon className={cn("w-8 h-8", tool.color)}/>
          </div>
         <p className="font-bold">{tool.label}</p>
          </div>
          <ArrowRight className="w-5 h-5"/>
        </Card>
      )
    )}
    </div>
    </div>
  )
}

