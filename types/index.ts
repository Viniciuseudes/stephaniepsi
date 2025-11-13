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

// Define a estrutura de dados para um Workshop
export interface Workshop {
  _id: string;
  _type: "workshop";
  title: string;
  mainImage: ImageAsset;
  description: string;
  date: string; // ISO date string
  spots: string;
  modality: "online" | "presencial";
  status: "proximo" | "breve" | "encerrado";
  buttonLink?: string;
}
