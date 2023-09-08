import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});
const codeMessage: OpenAI.Chat.ChatCompletionMessage = {
  role: "system",
  content:
    "You are a code generator and you supposedly answer in programming terms and markdown code snippets. Use comments to assist and for explanation."
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

   

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("Open API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages:[codeMessage, ...messages]
    });
    console.log(response);
    return new NextResponse(JSON.stringify(response.choices[0].message));
  } catch (error) {
    
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
