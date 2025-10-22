// lib/sanity.client.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

if (!projectId || !dataset || !apiVersion) {
  throw new Error("Missing Sanity project ID, dataset, or API version in environment variables.");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data ou true para cache
})

// Helper para gerar URLs de imagem
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)