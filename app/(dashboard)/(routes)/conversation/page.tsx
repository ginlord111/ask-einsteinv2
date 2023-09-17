"use client";
import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import * as z from "zod";
import formSchema from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import OpenAI from "openai";
import { useState } from "react";
import axios from "axios";
import AssistantReply from "@/components/AssistantReply";
import UserReply from "@/components/UserReply";
import { cn } from "@/lib/utils";
import { AssistantLoadingProps } from "@/components/AssistantLoading";
import { modalController } from "@/hooks/modal-controller";
const ConversationPage = () => {
  const modal = modalController();
  const router = useRouter();
  const [messages, setMessage] = useState<OpenAI.Chat.ChatCompletionMessage[]>(
    []
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: FieldValues) => {
    try {
      const userMessage: OpenAI.Chat.ChatCompletionMessage = {
        role: "user",
        content: data.prompt,
      };

      setMessage((current) => [...current, userMessage]);
      const newMessage = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessage,
      });

      setMessage((current) => [...current, response.data]);

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        setMessage([]);
        return modal.onOpen();
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-[90vh] flex flex-col relative ">
      <Heading
        title="Ask anything to Mr.Einstein Bot"
        description='Start your question by saying "hey einstein"'
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="flex flex-col gap-y-5  lg:max-h-[calc(100%-150px)] max-h-[calc(100%-250px)]  overflow-y-scroll  p-4 ">
        {messages.map((message) => (
          <div key={message.role} className="flex flex-col gap-y-[30px]">
            <div
              className={cn(
                "flex p-5 justify-start items-start gap-x-5  rounded-md",
                message.role === "user"
                  ? "border borde-black/10"
                  : "bg-blue-600/30"
              )}
            >
              {message.role === "user" ? (
                <UserReply>
                  <p>{message.content}</p>
                </UserReply>
              ) : (
                <AssistantReply>{message.content || ""}</AssistantReply>
              )}
            </div>
            <AssistantLoadingProps isLoading={isLoading} />
          </div>
        ))}
      </div>

      <div className="absolute w-full flex  px-3 bottom-0 left-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2  "
          >
            <Controller
              name="prompt"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input
                      className="border-0 outline-none focus-visible::ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Ask Mr.Einstein"
                      pattern="^hey einstein .*"
                      title={"say hey einstein to ask the bot"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="col-span-12 lg:col-span-2 w-full"
              disabled={isLoading}
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConversationPage;
