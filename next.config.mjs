/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // A linha "unoptimized: true" foi REMOVIDA daqui.
    
    // AJUSTE: Adicionamos os domínios permitidos para otimização de imagem
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // Origem das imagens do Sanity
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        // Origem da imagem de fundo da HeroSection
      },
    ],
  },
}

export default nextConfig