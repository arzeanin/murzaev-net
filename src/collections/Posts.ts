import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'category', type: 'relationship', relationTo: 'categories', required: true },
    { name: 'mainImage', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'layout', // Это наше "тело поста"
      type: 'blocks',
      blocks: [
        {
          slug: 'content', // Основной текст
          fields: [{ name: 'text', type: 'richText' }],
        },
        {
          slug: 'extraImage', // Доп. фото с классом
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
            { name: 'className', type: 'text', defaultValue: 'standard-image' },
          ],
        },
        {
          slug: 'gallery', // Галерея
          fields: [
            {
              name: 'images',
              type: 'array',
              fields: [{ name: 'image', type: 'upload', relationTo: 'media' }],
            },
          ],
        },
        {
          slug: 'quote', // Цитата с классом
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
