"use client"
import axios from "axios";
import { useState } from "react";
import { useProModal } from "@/hooks/user-modal";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function PostComponent() {
  const router = useRouter();
 const {name} = useProModal();
  const[post,setPost]=useState("")
  async function handleClick(){
     try{
      const response = await axios.post("/api/post", {
       name,
       post
      });
     }catch(e){
      console.log(e)
     }finally{
      router.refresh();
      setPost("")
     }
  }
 
  // return (
  //   <div className="mb-4">
  //     <label
  //       className="block text-sm font-medium text-gray-700"
  //       htmlFor="blogPost"
  //     >
  //       Enter Your Post
  //     </label>
  //     <div className="mt-1">
  //       <textarea
  //         onChange={(e) => {
  //           setPost(e.target.value);
  //         }}
  //         className="shadow-sm mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
  //         id="blogPost"
  //         placeholder="Enter Your Post"
        
  //       />
  //     </div>
  //     <Button
  //       onClick={handleClick}
  //       className="mt-2 bg-blue-500 hover:bg-blue-700 text-white"
  //     >
  //       Post
  //     </Button>
  //   </div>
  // );
  return(
 <div className="mb-6">
   <div className="flex flex-col space-y-2">
     <textarea
       value={post}
       onChange={(e) => {
         setPost(e.target.value);
       }}
       className="form-textarea border rounded-md p-4"
       placeholder="Enter Your Post..."

       rows={3}
     />
     <Button onClick={handleClick} className="self-end w-11">
       Post
     </Button>
   </div>
 </div>
  )
}

