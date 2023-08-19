// NEXTJS HOOKS
import { NextResponse } from "next/server";
// FROM UTILS FOLDER
import connect from "@/utils/db";
// IMPORTING TYPE MODELS
import Post from "@/models/Post";

export const GET = async () => {
  //   const url = new URL(request.url);

  //   const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Post.find();
    // const posts = await Post.find(username && { username });

    // return new NextResponse(JSON.stringify(posts), { status: 200 });
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
