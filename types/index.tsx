// types/index.ts
import type { ImageAsset, Slug } from "@sanity/types";

export interface Post {
  _id: string;
  _type: "post";
  title: string;
  slug: Slug;
  mainImage: ImageAsset;
  category: string;
  publishedAt: string; // ISO date string
  excerpt: string;
  body: any[]; // Portable Text content
  likes: number;
}
