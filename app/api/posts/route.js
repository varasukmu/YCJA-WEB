import { connectMongoDB } from "../../../lib/mongodb";
import Post from "../../../models/post";
import { NextResponse } from "next/server";

// export async function POST(req) {
//     const { title, img, content } = await req.json();
//     console.log(title, img, content);
//     await connectMongoDB();
//     await Post.create({ title, img, content});
//     return NextResponse.json({message: "Post created"}, { status: 201});
// }

// export async function GET() {
//     await connectMongoDB();
//     const posts = await Post.find({});
//     return NextResponse.json({ posts });
// }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!title || !img || !content) {
    alert("Please complete all inputs!");
    return;
  }

  try {
    // เปลี่ยนจากการใช้ template literal เป็นการส่ง URL ตรงๆ
    const res = await fetch("/api/posts", {  // แก้ตรงนี้
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, img, content }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Error response:', errorData);
      throw new Error("Failed to create a post");
    }

    router.push("/admin");  // แก้ path ให้เป็น absolute path
  } catch (error) {
    console.error('Error:', error);
  }
};
