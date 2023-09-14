"use client";
import Heading from "@/components/Heading";
import { ImageIcon, Download } from "lucide-react";
import { useForm,Controller } from "react-hook-form";
import * as z from "zod";
import {amountOptions, formSchema, resolutionOptions }from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {useState} from 'react'
import axios from 'axios';
import {AssistantLoading }from "@/components/AssistantLoading";
import { SelectTrigger, Select, SelectValue, SelectItem } from "@/components/ui/select";
import { SelectContent } from "@radix-ui/react-select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { modalController } from "@/hooks/modal-controller";
const ImagePage = () => {
  const modal = modalController()
  const router = useRouter();
 const [images, setImages] = useState<string[]>([])
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount:'1',
      resolution:'512x512'
    },
  });
  
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values:z.infer<typeof formSchema>) => {
   try{
    setImages([])
  const response = await axios.post('api/image', values);
  const url = response.data.map((images:{url:string})=> images.url) // typescrpt expect theres a url object in the response.data that type is strng
  setImages(url) 
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
        title="Ask a picture to Mr.Einstein"
        description="Start your question by saying &quot;hey einstein&quot;"
        icon={ImageIcon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      /> 
<div>
{isLoading && <AssistantLoading />}
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 overflow-y-scroll">
        {images.map((image) =>(
          <Card key={image} className="rounded-lg">
            <div className="relative aspect-square">
          <Image fill alt="YOUR IMAGE HERE" src={image}/>
            </div>
          <CardFooter className="p-2">
            <Button variant='secondary' className="w-full" onClick={()=> window.open(image)}>
          <Download className="h-4 w-4 mr-2" />
          Download
            </Button>
          </CardFooter>
          </Card>
         
     
      ))}
        
      </div>
        <div className="lg:absolute fixed w-full lg:top-[85vh] top-[80vh] flex items-end px-3">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 relative bg-white"
            >
   
              <Controller
                name="prompt"
                control={form.control}
              
                render={({ field}) => (
                  <FormItem className="col-span-12 lg:col-span-6 relative">
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
              <FormField 
              name="amount"
              control={form.control}
              render={({field}) =>(
                <FormItem className="col-span-12 lg:col-span-2">
                 <Select 
                 disabled={isLoading}
                 onValueChange={field.onChange}
                 value={field.value}
                 defaultValue={field.value}
                 
                 >
                  <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={field.value}/>
                  </SelectTrigger>
                  </FormControl>
                  <SelectContent position='popper' side="top" className="bg-white">
                    {amountOptions.map((option) =>(
                  <SelectItem key={option.value} value={option.value} >
                    {option.label}
                  </SelectItem>
                    ))}
                  </SelectContent>
                 </Select>
                </FormItem>
              )}
              
              />
             <FormField 
              name="resolution"
              control={form.control}
              render={({field}) =>(
                <FormItem className="col-span-12 lg:col-span-2 ">
                 <Select 
                 disabled={isLoading}
                 onValueChange={field.onChange}
                 value={field.value}
                 defaultValue={field.value}
                 
                 >
                  <FormControl>
                  <SelectTrigger>
                    <SelectValue defaultValue={field.value}/>
                  </SelectTrigger>
                  </FormControl>
                  <SelectContent position='popper' side="top" className="bg-white">
                    {resolutionOptions.map((option) =>(
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                    ))}
                  </SelectContent>
                 </Select>
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

export default ImagePage;
