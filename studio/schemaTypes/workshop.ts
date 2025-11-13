// studio/schemaTypes/workshop.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workshop',
  title: 'Workshop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição Curta',
      type: 'text',
      rows: 4,
      description: 'Uma breve descrição do workshop (similar à da imagem).',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data do Workshop',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'spots',
      title: 'Vagas (ex: "20 vagas" ou "Vagas esgotadas")',
      type: 'string',
      description: 'Texto que aparece ao lado do ícone de "vagas".',
    }),
    defineField({
      name: 'modality',
      title: 'Modalidade (Online ou Presencial)',
      type: 'string',
      options: {
        list: [
          {title: 'Online', value: 'online'},
          {title: 'Presencial', value: 'presencial'},
        ],
        layout: 'radio', // Campo de rádio para fácil seleção
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status do Workshop',
      type: 'string',
      options: {
        list: [
          {title: 'Próximo Workshop (Aparece na Home)', value: 'proximo'},
          {title: 'Em Breve', value: 'breve'},
          {title: 'Encerrado (Aparece em "Anteriores")', value: 'encerrado'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Link do Botão (ex: link de inscrição)',
      type: 'url',
      description: 'O link para onde o botão "Participar do Workshop" vai levar.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'mainImage',
    },
  },
})