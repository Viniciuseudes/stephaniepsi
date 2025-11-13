// components/like-button.tsx

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

// CORREÇÃO AQUI: Garanta que é "export function" (sem "default")
export function LikeButton({ postId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    if (likedPosts.includes(postId)) {
      setIsLiked(true);
    }
  }, [postId]);

  const handleLike = async () => {
    if (isLiked || isLoading) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId }),
      });

      if (response.ok) {
        const data = await response.json();

        setLikes(data.likes);
        setIsLiked(true);

        const likedPosts = JSON.parse(
          localStorage.getItem("likedPosts") || "[]"
        );
        localStorage.setItem(
          "likedPosts",
          JSON.stringify([...likedPosts, postId])
        );
      } else {
        console.error("Failed to like post:", await response.text());
      }
    } catch (error) {
      console.error("Failed to like post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        variant="outline"
        size="lg"
        onClick={handleLike}
        disabled={isLiked || isLoading}
        className="group min-w-[140px]"
      >
        <Heart
          className={`mr-2 h-5 w-5 transition-all ${
            isLiked
              ? "fill-red-500 text-red-500"
              : "fill-none text-muted-foreground group-hover:fill-red-200 group-hover:text-red-400"
          }`}
        />
        {isLiked ? "Curtido" : "Curtir"}
      </Button>
      <span className="text-lg font-medium text-muted-foreground">
        {likes} {likes === 1 ? "curtida" : "curtidas"}
      </span>
    </div>
  );
}
