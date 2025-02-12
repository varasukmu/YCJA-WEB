"use client"

import React, { useState, useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function EditPost({ params }) {

    const { id } = params;
    
  return (
    <div>
        {id}
    </div>
  )
}
export default EditPost