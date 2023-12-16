import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  //step1:-taking out data from request
  const body = await req.json();
  const { name, comment, postId } = body;
  try {
    console.log(name,comment,postId)
    //step:-create a new post in db and store it by prisma
    await prismadb.comment.create({
      data: {
        name,
        comment,
        postId
      },
    });
    //step-3:if successfully send a response to client succesfull alert
    //
    return new NextResponse("Successfully", { status: 200 });
  } catch (e) {
    //if data not get store then next step
    //  return new NextResponse("ServerError", { status: 401 });
       return new NextResponse("server Error", { status: 500 });
  }
}
