import { CollectionConfig } from 'payload/types'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: { useAsTitle: 'title' },
  fields: [{ name: 'title', type: 'text', required: true }],
}
