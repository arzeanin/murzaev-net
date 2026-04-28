import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // Основной текст поста теперь будет виден СРАЗУ
    {
      name: 'content',
      type: 'richText',
      label: 'Основной текст поста',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories' as any, // Исправлено: добавлено 'as any' для прохождения проверки типов
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media' as any, // Исправлено: добавлено 'as any'
      required: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    // Оставляем блоки для дополнительных элементов
    {
      name: 'layout',
      type: 'blocks',
      label: 'Дополнительные блоки (галереи, цитаты и т.д.)',
      blocks: [
        {
          slug: 'extraImage',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' as any, required: true },
            { name: 'className', type: 'text', defaultValue: 'standard-image' },
          ],
        },
        {
          slug: 'gallery',
          fields: [
            {
              name: 'images',
              type: 'array',
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' as any }],
            },
          ],
        },
        {
          slug: 'quote',
          fields: [
            { name: 'text', type: 'textarea', required: true },
            { name: 'author', type: 'text' },
          ],
        },
      ],
    },
  ],
}
