// studio/schemaTypes/post.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Amigável)',
      type: 'slug',
      options: {
        source: 'title', // Gera automaticamente a partir do título
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true, // Permite focar a imagem
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string', // Simples por enquanto, pode ser referência a outro schema depois
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    // --- CAMPO MODIFICADO ---
    defineField({
      name: 'likes',
      title: 'Curtidas',
      type: 'number',
      initialValue: 0, // Garante que novos posts comecem com 0
      readOnly: true, // Impede a edição manual no Sanity Studio
      // Removida a validação 'required()' para não dar erro em posts antigos
    }),
    // --- FIM DA MODIFICAÇÃO ---
    defineField({
      name: 'excerpt',
      title: 'Resumo (Excerto)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo Principal',
      type: 'blockContent', // Tipo especial para texto rico (parágrafos, negrito, listas, etc.)
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})