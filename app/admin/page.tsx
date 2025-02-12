// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Admin() {
  
//   const [postData, setPostData] = useState([])

//   console.log(postData);

//   const getPosts = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/posts", {
//         method: "GET",
//         cache: "no-store"
//       })

//       if (!res.ok) {
//         throw new Error("Failed to fetch posts");
//       }

//       const data = await res.json();
//       setPostData(data.posts);

//     } catch(error) {
//       console.log("Error loading posts : ", error)
//     }
//   }

//   useEffect(() => {
//     getPosts();
//   }, [])



//   return (
//     <main className="container mx-auto my-3">
//       <h1>Article</h1>
//       <hr className="my-3"/>
//       <button className="bg-green-400 p-3 text-white rounded">
//         <Link href="/admin/create">Create Post</Link>
//       </button>
//       <div className="grid grid-cols-4 mt-3 gap-5">
//         {postData && postData.length > 0 ? (
//           postData.map(val => (
//             <div key={val._id} className="shadow-xl my-5 p-10 rounded-xl">
//               <h4>{val.title}</h4>
//               <Image src={val.img} width={300} height={20} alt={val.title}/>
//               <p>{val.content}</p>
//               <div className="mt-5">
//                 <Link href={`admin/edit/${val._id}`} className="bg-gray-500  text-white border px-3 py-2 rounded-md text-lg">Edit</Link>
//                 <Link href="/edit" className="bg-red-500   text-white border px-3 py-2 rounded-md text-lg">Delete</Link>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Not Post</p>
//         )} 
//       </div>
//     </main>
//   )
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  _id: string;
  title: string;
  content: string;
  img: string;
};

export default function Admin() {
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

  return (
    <main className="container mx-auto my-3">
      <h1>Articles</h1>
      <hr className="my-3" />
      <button className="bg-green-400 p-3 text-white rounded">
        <Link href="/admin/create">Create Post</Link>
      </button>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-4 mt-3 gap-5">
        {postData && postData.length > 0 ? (
          postData.map((val) => (
            <div key={val._id} className="shadow-xl my-5 p-10 rounded-xl">
              <h4>{val.title}</h4>
              <Image
                src={val.img}
                width={300}
                height={200} // Adjust height as necessary
                alt={val.title}
                layout="intrinsic" // This keeps the image proportional
              />
              <p>{val.content}</p>
              <div className="mt-5">
                <Link
                  href={`/admin/edit/${val._id}`}
                  className="bg-gray-500 text-white border px-3 py-2 rounded-md text-lg"
                >
                  Edit
                </Link>
                <Link
                  href="/edit"
                  className="bg-red-500 text-white border px-3 py-2 rounded-md text-lg"
                >
                  Delete
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </main>
  );
}
