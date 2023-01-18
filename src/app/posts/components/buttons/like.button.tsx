"use client";
import { useState } from "react";
export default function LikeButton({ id }: { id: number }) {
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={() => {
        setLiked(!liked);
      }}
    >
      {liked ? <span>&#x2665;</span> : "no"}
    </button>
  );
}
