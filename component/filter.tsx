"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import {usefilter}  from "@/hooks/user-modal"
export default function Filter() {
const router = useRouter();
 const {filterName,setFilterName} =usefilter()
 async function handleFilter() {
  
 }
    
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Search" onChange={(e) => setFilterName(e.target.value)} />
      <Button type="submit" onClick={handleFilter}>
        Search
      </Button>
    </div>
  );
}
