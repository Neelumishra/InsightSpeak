// "use client";
// import { useProModal } from "@/hooks/user-modal";
// import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import FeedComponent from "@/component/feed";
import PostComponent from "@/component/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Filter from "@/component/filter";

export default function Landing() {
  
//   const useModal = useProModal();
//   useLayoutEffect(() => {
//     if (!useModal.name) {
//       redirect("/");
//     }
//   }, []);
  return (
    <div className="max-w-md mx-auto mt-6">
      <Filter />
      <br />
      <PostComponent />
      <br />
      <FeedComponent />
    </div>
  );
}
