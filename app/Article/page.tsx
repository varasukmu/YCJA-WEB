"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


const types = ["A", "B", "C", "D", "E", "F", "G", "H"];

const typeMessages: Record<string, string> = {
  A: "Hello",
  B: "My name is Jie",
  C: "I'm 18",
  D: "Welcome to this site",
  E: "Many Article",
  F: "You can read it",
  G: "Coming soon",
  H: "bye",
};

type Post = {
  _id: string;
  title: string;
  content: string;
  img: string;
  catalog: string;
};

export default function Article() {

  const [postData, setPostData] = useState<Post[]>([]); // Type the state
    const [error, setError] = useState<string | null>(null); // For handling errors
  
    const getPosts = async () => {
      try {
        // เปลี่ยน URL จาก localhost เป็น relative path
        const res = await fetch("/api/posts", { // <-- เปลี่ยนตรงนี้
          method: "GET",
          cache: "no-store",
        });
  
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
  
        const data = await res.json();
        setPostData(data.posts);
  
      } catch (error) {
        setError("Error loading posts. Please try again later.");
        console.error("Error loading posts: ", error);
      }
    };
  
    useEffect(() => {
      getPosts();
    }, []);

  const [activeType, setActiveType] = useState("A");

  return (
    <>
      <div className="h-[300px] bg-blue-400 p-5">
        <div className="text-3xl mb-3">This is Article</div>
        <div className="flex gap-3">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`p-2 rounded ${
                activeType === type ? "bg-green-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              Type {type}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-bold">This is type {activeType}</h2>
        <p>{typeMessages[activeType]}</p>
      </div>


      <main className="container mx-auto my-3">
      

      {error && <p className="text-red-500">{error}</p>}

      <div 
        className="flex flex-wrap gap-5">
        {postData && postData.length > 0 ? (
          postData
            .filter((val) => val.catalog === activeType)
            .map((val) => (
            <div key={val._id} className="relative shadow-xl my-5 p-10 rounded-xl max-w-[300px] max-h-[500px] ">
              <Image
                src= {`https://drive.google.com/uc?export=view&id=${val.img}`}
                width={300}
                height={200} 
                alt={val.title}
                layout="intrinsic"
                className="my-3"
              />
              <div className="text-xl font-bold ">{val.title}</div>
              <p>{val.content}</p>
              
            </div>
          ))     
        ) : (
          <p>No posts available</p>
        )}
      </div>

      {/* <div className="flex flex-wrap gap-5">
        {error && <p className="text-red-500">{error}</p>}

        {postData && postData.length > 0 ? (
          postData
            .filter((val) => val.catalog === activeType) // กรองเฉพาะโพสต์ที่มี catalog ตรงกับปุ่มที่เลือก
            .map((val) => (
              <div
                key={val._id}
                className="relative shadow-xl my-5 p-10 rounded-xl max-w-[300px] max-h-[500px]"
              >
                <div className="bg-slate-200 p-2 rounded-lg text-slate-600">
                  {val.catalog}
                </div>
                <Image
                  src={`https://drive.google.com/uc?export=view&id=${val.img}`}
                  width={300}
                  height={200}
                  alt={val.title}
                  className="my-3"
                  unoptimized
                />
                <div className="text-xl font-bold">{val.title}</div>
                <p>{val.content}</p>
              </div>
            ))
        ) : (
          <p>No posts available</p>
        )}
      </div> */}

    </main>
    </>
  );
}