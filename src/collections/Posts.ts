import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category'], // Чтобы в списке постов было видно слаг
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    // --- ДОБАВЛЯЕМ СЮДА SLUG ---
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true, // Сделаем его уникальным, чтобы не было двух постов с одним адресом
      admin: {
        position: 'sidebar', // Улетает в правую колонку в админке
      },
    },
    // ---------------------------
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        {
          slug: 'content',
          fields: [{ name: 'text', type: 'richText' }],
        },
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
            { name: 'className', type: 'text', defaultValue: 'modern-quote' },
          ],
        },
      ],
    },
  ],
}

export default Posts
