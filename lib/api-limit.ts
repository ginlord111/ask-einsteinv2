import { auth } from "@clerk/nextjs/server";
import prismadb from "./prismadb";
import { MAX_FREE_COUNTS } from "@/constants";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const increaseApiLimit = async () => {
 try {
    const session = await getServerSession(authOptions);

  if (session && session.user.id) {
    const user = await prismadb.user.findUnique({
      where: {
        id: session.user.id,
      },
    });
    if (user) {
      await prismadb.user.update({
        where: {
          id: user.id,
        },
        data: {
          apiLimit: user.apiLimit + 1,
        },
      });
    }
  } 
 } catch (error) {
   console.log(error)
 }
};

export const checkApiLimit = async () => {
    const session = await getServerSession(authOptions);

 if(session && session.user){
    const user = await prismadb.user.findUnique({
        where: {
          id: session.user.id,
        },
      });
      if(user && user.apiLimit < MAX_FREE_COUNTS){
        return true
      }
      else{
        false
      }
 }
 else{
    return;
 }
};

export const getApiLimit = async () => {
try {
    const session = await getServerSession(authOptions);

    const user = await prismadb.user.findUnique({
        where:{
            id:session?.user.id
        },
        select:{
            apiLimit:true
        }
    });
    if(user){
        return user.apiLimit
    }
    else {
        return;
    } 
} catch (error) {
    console.log(error)
}
};
