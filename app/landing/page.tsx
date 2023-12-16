// "use client";
// import { useProModal } from "@/hooks/user-modal";
// import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import FeedComponent from "@/component/feed";
import PostComponent from "@/component/post";
export default function Landing() {
//   const useModal = useProModal();
//   useLayoutEffect(() => {
//     if (!useModal.name) {
//       redirect("/");
//     }
//   }, []);
  return (
    <div style={{width:"99%",margin:"auto"}}>
      <PostComponent />
      <FeedComponent />
      

    </div>
  );
}
