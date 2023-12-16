"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useProModal } from "@/hooks/user-modal";

import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
      setValue("")
    }
    //post call the api to submit input data
  }
  return (
    <>
      <CardFooter className="pt-4">
        <div className="flex">
          <Input
           value={comment}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1"
            placeholder="Enter Your Comment"
          />
          <Button
            onClick={handleSubmit}
            className="ml-2 bg-red-500 hover:bg-red-700 text-white"
          >
            Add
          </Button>
        </div>
      </CardFooter>
    </>
  );
}
