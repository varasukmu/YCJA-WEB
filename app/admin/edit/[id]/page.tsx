// "use client";

// import { NextPage } from "next";

// interface EditPostProps {
//   params: { id: string };
// }

// const EditPost: NextPage<EditPostProps> = ({ params }) => {
//   const { id } = params;

//   return <div>Post ID: {id}</div>;
// };

// export default EditPost;


"use client";

import { useRouter } from "next/router";

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {id ? (
        <p>Post ID: {id}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPost;
