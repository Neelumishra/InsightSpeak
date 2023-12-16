"use client"
import axios from "axios";
import { useState } from "react";
import { useProModal } from "@/hooks/user-modal";
import { useRouter } from "next/navigation";
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
     }
  }
  return (
    <div id="post">
      <h3 style={{display:"flex",justifyContent:"center"}}>Enter Your Post</h3>
      <input style={{height:"25px"}} type="Enter Your Post" onChange={(e)=>{setPost(e.target.value)}} placeholder="Enter Your Post"/>
      <button onClick={ handleClick}>Post</button>
    </div>
  );
}
