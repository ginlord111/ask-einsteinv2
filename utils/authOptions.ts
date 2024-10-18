import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prismadb from "@/lib/prismadb";
export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prismadb) as Adapter,
  secret:process.env.NEXTAUTH_SECRET as string,
    session: {
        strategy: "jwt",
    },
    
providers:[
    GitHubProvider({
        clientId:process.env.GITHUB_CLIENT_ID as string,
        clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
        profile(profile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name ?? profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                };
             },
    }),
 
],
callbacks: {
    session: ({ session, token }) => ({
        ...session,
        user: {
            ...session.user,
            id: token.sub,
        },
    }),
},
pages:{
    newUser:"/dashboard"
}

// }
}