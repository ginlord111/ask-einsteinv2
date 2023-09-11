"use client";
import Heading from "@/components/Heading";
import { Music, Download } from "lucide-react";
import { useForm,Controller } from "react-hook-form";
import * as z from "zod";
import formSchema from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {useState} from 'react'
import axios from 'axios';
import {AssistantLoading} from "@/components/AssistantLoading";
import { modalController } from "@/hooks/modal-controller";
const MusicPage = () => {
  const modal = modalController()
  const router = useRouter();
 const [music, setMusic] = useState()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });
  
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values:z.infer<typeof formSchema>) => {
   try{
  const response = await axios.post('api/music', values);

  setMusic(response.data.audio) 
  form.reset();
  }
   catch(error:any){
    if(error?.response?.status === 403){
     return modal.onOpen()
     }
   }
   finally{
    
    router.refresh()
   }
  };
  return (
    <div className="h-[90vh] flex flex-col relative  ">
      <Heading
        title="Ask a music to Mr.Einstein"
        description="Start your question by saying &quot;hey einstein&quot;"
        icon={Music}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      /> 
<div>
{isLoading && <AssistantLoading />}
</div>
   <div>
 {music &&(
  <audio controls className="w-full mt-8">
    <source src={music}/>
  </audio>
 )}
   </div>
        <div className="absolute w-full lg:top-[85vh] top-[80vh] flex items-end px-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 relative bg-white"
            >
   
              <Controller
                name="prompt"
                control={form.control}
              
                render={({ field}) => (
                  <FormItem className="col-span-12 lg:col-span-10 relative">
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
              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>Generate</Button>
            </form>
          </Form>
          </div>
          </div>
   
  );
};

export default MusicPage;

