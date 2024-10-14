import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prismadb from "@/lib/prismadb";
console.log(process.env.GITHUB_CLIENT_ID as string, "ENV")
export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prismadb) as Adapter,
  secret:process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: "jwt",
        maxAge:900, // 900 SECOND OR 15 MNS THE EXPIRATION OF THE SESSION 
    },
    
providers:[

    GitHubProvider({
        clientId:process.env.GITHUB_CLIENT_ID as string,
        clientSecret:process.env.GITHUB_CLIENT_SECRET as string,

      
    }),
 
],
pages:{
    newUser:"/dashboard"
}

// }
}