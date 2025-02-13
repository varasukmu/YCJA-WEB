"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [catalog, setCatalog] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !img || !content || !catalog) {
      alert("Please complete all inputs!");
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img, content, catalog }),
      });

      if (res.ok) {
        router.push("../admin");
      } else {
        throw new Error("Failed to create a post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h3 className="text-3xl font-bold mb-5">Create Post</h3>
      <Link
        href="/admin"
        className="bg-gray-500 text-white border px-3 py-2 rounded-md text-lg"
      >
        Go Back
      </Link>
      <hr className="my-3" />

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="x-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
          placeholder="Post Title"
        />
        <select onChange={(e) => setCatalog(e.target.value)} className="w-[300px] bg-gray-200 border py-2 px-3 rounded text-lg my-2">
          <option value="">Select Catalog</option>
          {["A", "B", "C", "D", "E"].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          onChange={(e) =>
            setImg(e.target.value.trim())
          }
          type="text"
          placeholder="Enter Google Drive File ID"
          className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          cols={30}
          rows={10}
          placeholder="Content"
          className="x-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white border py-2 px-3 rounded text-lg my-2"
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
