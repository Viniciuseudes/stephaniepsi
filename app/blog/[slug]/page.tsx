// app/blog/[slug]/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
// Importar o componente e o TIPO
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "lucide-react";
import type { Post } from "@/types"; // Importar tipo Post se ainda não estiver
import type { Image as SanityImage } from "@sanity/types"; // Importar tipo de imagem do Sanity
import { ShareButtons } from "@/components/share-buttons"; // <-- 1. IMPORTAR O NOVO COMPONENTE

// Gera as rotas estáticas para cada post no build time
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Tipar explicitamente o objeto de componentes
const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImage & { alt?: string } }) => {
      // Usar tipo importado
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative my-6 aspect-video">
          {" "}
          {/* Ou outra proporção */}
          <Image
            src={urlFor(value).fit("max").auto("format").url()}
            alt={value.alt || "Imagem do post"}
            fill
            className="object-contain" // ou object-cover
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      );
    },
    // Pode adicionar mais customizações aqui (ex: code blocks)
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href?: string };
    }) => {
      // Tipar value opcionalmente
      const href = value?.href;
      if (!href) return <>{children}</>; // Retornar children se não houver href

      const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a href={href} rel={rel} className="text-primary hover:underline">
          {children}
        </a>
      );
    },
    // Pode adicionar mais customizações (strong, em, etc.)
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
    ),
    // Pode adicionar 'number' para listas numeradas se usar no Sanity
    // number: ({children}) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    // number: ({children}) => <li className="mb-1">{children}</li>,
  },
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  // Garantir que Post está sendo importado corretamente
  const post: Post | null = await getPostBySlug(params.slug);

  if (!post) {
    notFound(); // Retorna página 404 se o post não for encontrado
  }

  const formattedDate = post.publishedAt
    ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: ptBR })
    : "Data inválida";

  return (
    <>
      <Header />
      <main
        className="min-h-screen pt-32 pb-16"
        style={{ backgroundColor: "#dfccb8" }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          {" "}
          {/* Limitado largura para leitura */}
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              {" "}
              {/* Adicionado flex-wrap */}
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {post.category || "Categoria"}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar size={16} />
                <span>{formattedDate}</span>
              </div>
            </div>

            {/* <-- 2. ADICIONAR O COMPONENTE AQUI --> */}
            <ShareButtons title={post.title} summary={post.excerpt} />

            {post.mainImage && (
              <div className="relative mb-8 aspect-[16/9] rounded-lg overflow-hidden">
                {" "}
                {/* Proporção comum */}
                <Image
                  src={urlFor(post.mainImage)
                    .width(1200)
                    .height(675)
                    .fit("crop")
                    .auto("format")
                    .url()}
                  alt={post.title || "Imagem principal"}
                  fill
                  className="object-cover"
                  priority // Carrega a imagem principal mais rápido
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}

            {post.body && (
              <div className="prose prose-lg dark:prose-invert max-w-none text-foreground prose-headings:text-foreground prose-p:text-foreground prose-blockquote:text-muted-foreground prose-a:text-primary hover:prose-a:underline prose-ul:text-foreground prose-li:text-foreground">
                <PortableText value={post.body} components={ptComponents} />
              </div>
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Opcional: Adicionar Metadata dinâmica
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post não encontrado" };
  return {
    title: `${post.title} | Blog Stephanie Barbosa`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage
        ? [urlFor(post.mainImage).width(1200).height(630).url()]
        : [],
    },
  };
}
