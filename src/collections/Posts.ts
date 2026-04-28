import { CollectionConfig } from 'payload/types'

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
      relationTo: 'categories',
      required: true,
      admin: { position: 'sidebar' }, // Категорию лучше в боковую панель
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: { position: 'sidebar' }, // Обложку тоже в бок
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    // Оставляем блоки для дополнительных элементов (галереи, цитаты)
    {
      name: 'layout',
      type: 'blocks',
      label: 'Дополнительные блоки (галереи, цитаты и т.д.)',
      blocks: [
        {
          slug: 'extraImage',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
            { name: 'className', type: 'text', defaultValue: 'standard-image' },
          ],
        },
        {
          slug: 'gallery',
          fields: [
            {
              name: 'images',
              type: 'array',
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
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
