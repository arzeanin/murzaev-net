import React from 'react'
import { notFound } from 'next/navigation'
import configPromise from '@/payload.config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = result.docs[0]

  if (!post) {
    return notFound()
  }

  return (
    <article style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      {/* Пока просто выведем сырые данные, чтобы убедиться, что всё работает */}
      <pre>{JSON.stringify(post.layout, null, 2)}</pre>
    </article>
  )
}
