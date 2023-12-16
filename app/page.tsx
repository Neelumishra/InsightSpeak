"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useProModal } from "@/hooks/user-modal";
export default function Home() {
  const proModal = useProModal();
  const [name, setName] = useState("");
  const router = useRouter();
  function handleSubmit() {
    router.push("/landing");
  }
  return (
    
      <div
        className="border text-card-foreground max-w-md mx-auto my-20 space-y-6 bg-white shadow-lg rounded-lg"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h2 className="text-2xl font-bold text-center">
            Please enter your name
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Name
              </label>
              <input
                onChange={(event) => proModal.setName(event.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <button
              className=" bg-slate-950 text-white inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
             
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
 
  );
}
