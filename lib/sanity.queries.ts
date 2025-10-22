// lib/sanity.queries.ts
import { groq } from 'next-sanity' // Pode precisar instalar: npm install next-sanity
import { client } from './sanity.client'
import type { Post } from '@/types' // Ajuste o caminho se necessário

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, mainImage, category, publishedAt, excerpt, body
  }
`

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
     _id, title, slug, mainImage, category, publishedAt, excerpt
  }
`
 export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
     _id, title, slug, mainImage, category, publishedAt, excerpt, body
  }
 `
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`

export async function getAllBlogPosts(): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export async function getLatestBlogPosts(): Promise<Post[]> {
   return await client.fetch(latestPostsQuery)
}

 export async function getPostBySlug(slug: string): Promise<Post | null> {
   return await client.fetch(postBySlugQuery, { slug })
 }

export async function getAllPostSlugs(): Promise<string[]> {
  return await client.fetch(postSlugsQuery) || []
}