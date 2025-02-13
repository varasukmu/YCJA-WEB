import { connectMongoDB } from "../../../lib/mongodb";
import Post from "../../../models/post";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, img, content, catalog } = await req.json();
    console.log(title, img, content, catalog);
    await connectMongoDB();
    await Post.create({ title, img, content, catalog});
    return NextResponse.json({message: "Post created"}, { status: 201});
}

export async function GET() {
    await connectMongoDB();
    const posts = await Post.find({});
    return NextResponse.json({ posts });
}

  