import { getFeed, getComment } from "@/lib/fetch-feed";
import Add from "./addComment";
export default async function FeedComponent() {
 
  const finalPost = await getFeed();
  const comment = await getComment()
  console.log(finalPost)
  // function handleComment(){
     
  // }
  console.log("This is CoomsentPost",comment);
  console.log("THisis post",finalPost)
  return (
    <div style={{ padding: "10px" }}>
      {comment.map((e: any) => (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "20%",
            borderRadius: "10px",
            marginBottom: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid",
              backgroundColor:"white",
              borderRadius: "5px",
              justifyContent: "center",
            }}
          >
            <h4> {e.name}</h4>
            <p>--{e.post}</p>
          </div>

          <div
            style={{
              borderRadius: "10px",
            }}
          >
            {e.comments.map((e: any) => (
              <p
                style={{
                  border: "1px solid",
                  padding: "3px",
                  borderRadius: "5px",
                  backgroundColor: "white",
                
                }}
              >
                {e.comment}
              </p>
            ))}
            <Add postId={e.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
