import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey:process.env.OPEN_AI_KEY,

});
console.log(process.env.OPEN_AI_KEY)

export async function POST( req:Request){
    try{
    const {userId} = auth()
    const body = await req.json()
    const {prompt, amount='1', resolution='512x512'}= body ;
    if(!userId){
        return new NextResponse("Unauthorized", {status:401})
    }

    if(!openai.apiKey){
        return new NextResponse("Open API Key not configured",{status:500})
    }
    
    if(!prompt){
        return new NextResponse("Messages are required", {status:400})
    }
    const response = await openai.images.generate({
       prompt:prompt,
       n:parseInt(amount,10),
       size:resolution
    });
    return new NextResponse(JSON.stringify(response.data))
    }
    catch(error){
        console.log("[IMAGE GENERATOR_ERROR]", error)
        return new NextResponse("Internal Error", {status:500})
    }
}