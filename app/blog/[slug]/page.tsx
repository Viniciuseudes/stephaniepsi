// app/blog/[slug]/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllPostSlugs, getPostBySlug } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "lucide-react";
import type { Post } from "@/types";
import type { Image as SanityImage } from "@sanity/types";
import { ShareButtons } from "@/components/share-buttons";
import { LikeButton } from "@/components/like-button";

// Gera as rotas estáticas para cada post no build time
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Componentes do PortableText (sem alteração)
const ptComponents: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: SanityImage & { alt?: string } }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative my-6 aspect-video">
          <Image
            src={urlFor(value).fit("max").auto("format").url()}
            alt={value.alt || "Imagem do post"}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 700px"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href?: string };
    }) => {
      const href = value?.href;
      if (!href) return <>{children}</>;
      const rel = !href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <a href={href} rel={rel} className="text-primary hover:underline">
          {children}
        </a>
      );
    },
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
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
  },
};

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post | null = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
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
          <article>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {post.category || "Categoria"}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar size={16} />
                <span>{formattedDate}</span>
              </div>
            </div>

            {/* --- SEÇÃO DE AÇÕES (CURTIR/COMPARTILHAR) ATUALIZADA --- */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 my-8 border-y border-border/50 py-5">
              {/* Lado Esquerdo: Curtidas */}
              <LikeButton postId={post._id} initialLikes={post.likes ?? 0} />

              {/* Lado Direito: Compartilhamento */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  Compartilhar:
                </span>
                <ShareButtons title={post.title} summary={post.excerpt} />
              </div>
            </div>
            {/* --- FIM DA SEÇÃO ATUALIZADA --- */}

            {post.mainImage && (
              <div className="relative mb-8 aspect-[16/9] rounded-lg overflow-hidden">
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
                  priority
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

// Metadata (sem alteração)
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
