"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/user-modal";
export default  function Add({ postId }:any) {
  console.log("here is my postId passed one",postId);
  const { name } = useProModal();
  const router = useRouter();
  const [comment, setValue] = useState("");
  async function handleSubmit() {
    //collect data from inout box
    try {
      const response = await axios.post("/api/comment", {
        name,
        comment,
        postId,
      });
    } catch (e) {
      console.log(e);
    } finally {
      router.refresh();
    }
    //post call the api to submit input data
  }
  return (
    <div style={{display:"flex" ,gap:"1rem"}}>
      <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Enter Your Comment"/>
      <button style={{width:"50%",padding:"6px",backgroundColor:"crimson",color:"white",border:"none",borderRadius:"5px"}} onClick={handleSubmit}>Add</button>
    </div>
  );
}