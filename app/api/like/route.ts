// app/api/like/route.ts
import { createClient, groq } from 'next-sanity'
import { NextRequest, NextResponse } from 'next/server'

// Configuração do client que PODE ESCREVER
const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false, // Importante para escritas: não usar cache
  token: process.env.SANITY_API_WRITE_TOKEN,
})

export async function POST(request: NextRequest) {
  const { postId } = await request.json()

  if (!postId) {
    return NextResponse.json({ message: 'Missing postId' }, { status: 400 })
  }

  try {
    // --- ESTA É A PARTE ATUALIZADA ---
    const result = await writeClient
      .patch(postId)
      .setIfMissing({ likes: 0 }) // 1. Se 'likes' não existir, defina como 0
      .inc({ likes: 1 })         // 2. Agora, incremente o valor
      .commit()
    // --- FIM DA ATUALIZAÇÃO ---

    // Retorna o novo número de curtidas
    return NextResponse.json({ likes: result.likes ?? 0 })
  } catch (error) {
    console.error('Error incrementing like:', error)
    return NextResponse.json(
      { message: 'Error incrementing like', error },
      { status: 500 }
    )
  }
}