import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});
console.log(process.env.REPLICATE_API_TOKEN)
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 });
    }
    const freeTrial = await checkApiLimit()

    if(!freeTrial){
        return new NextResponse("Free trial has expired.", {status:403})
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:71996d331e8ede8ef7bd76eba9fae076d31792e4ddf4ad057779b443d6aea62f",
      {
        input: {
          prompt: prompt
        }
      }
    )
      await increaseApiLimit()
      return NextResponse.json(response);
  } catch (error) {

    console.log("[VIDEO_ERROR]", error);
    
    return new NextResponse("Internal Error", { status: 500 });
  }
}
