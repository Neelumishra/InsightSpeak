import { getComment, getFilter } from "@/lib/fetch-feed";
import Add from "./addComment";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import {usefilter} from "@/hooks/user-modal"

export default async function FeedComponent() {
  //comment = if their is any filterdata so await getfilter()  or await getcomment()
  //  const nameFilter = usefilter();
  let comment = [];
  let nameFilter =null;
  if (nameFilter) {
    comment = await getFilter(nameFilter);
  } else {
    comment = await getComment();
  }
  return (
    <div className="space-y-4">
      {comment.map((e: any) => (
        <Card className="w-full">
          <CardHeader className="flex flex-row ">
            <Avatar style={{ marginRight: "10px" }}>
              <AvatarFallback>{e.name.charAt(0).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle>{e.post}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {e.comments.map((e: any) => (
                <div className="flex items-center justify-between border border-gray-200 p-2 m-2 rounded">
                  <p className="text-sm">{e.comment}</p>
                  <DotIcon className="h-5 w-5 text-gray-500" />
                </div>
              ))}
            </div>
          </CardContent>
          <Add postId={e.id} />
        </Card>
      ))}
    </div>
  );
}

function DotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
}
