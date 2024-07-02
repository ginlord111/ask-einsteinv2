import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from 'openai';
import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
const openai = new OpenAI({
    apiKey:process.env.OPEN_AI_KEY,

});


export async function POST( req:Request){
    try{
    const {userId} = auth()
    const body = await req.json()
    const {messages }= body ;
    if(!userId){
        return new NextResponse("Unauthorized", {status:401})
    }

    if(!openai.apiKey){
        return new NextResponse("Open API Key not configured",{status:500})
    }
    
    if(!messages){
        return new NextResponse("Messages are required", {status:400})
    }

    const freeTrial = await checkApiLimit()
    if(!freeTrial){
        return new NextResponse("Free trial has expired.", {status:403})
    }


    const response = await openai.chat.completions.create({
        model:"gpt-3.5-turbo",
        messages
    });
    await increaseApiLimit()
    return new NextResponse(JSON.stringify(response.choices[0].message))
   

}
    catch(error){
        console.log("[CONVERSATION_ERROR]", error)
        return new NextResponse("Internal Error", {status:500})
    }
}