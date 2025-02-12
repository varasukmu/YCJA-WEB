"use client";

import { NextPage } from "next";

interface EditPostProps {
  params: { id: string };
}

const EditPost: NextPage<EditPostProps> = ({ params }) => {
  const { id } = params;

  return <div>Post ID: {id}</div>;
};

export default EditPost;
