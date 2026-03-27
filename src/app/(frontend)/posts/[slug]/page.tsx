import React from 'react'
import { notFound } from 'next/navigation'
import configPromise from '@/payload.config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

// 1. Добавляем Promise в описание типов для params
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Ожидаем (await) получения slug
  const { slug } = await params

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'posts' as any, // Это «лечит» ошибку TypeScript
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const post = (result.docs as any)[0] // Тоже добавим any, чтобы TS не ругался на .title

  if (!post) {
    return notFound()
  }

  return (
    <article style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <pre>{JSON.stringify(post.layout, null, 2)}</pre>
    </article>
  )
}
