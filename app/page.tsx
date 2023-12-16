"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useProModal } from "@/hooks/user-modal";
export default function Home() {
  const proModal = useProModal()
  const[name,setName] = useState("")
    const router = useRouter();
    function handleSubmit(){
      router.push("/landing");
    }
  return (
    <div>
      <h1>Welcome to Blog App</h1>
      <label htmlFor="">Enter your Name</label>
      <input onChange={(event) => proModal.setName(event.target.value)} type="text" />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
}
