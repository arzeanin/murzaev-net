export default async function PostPage({ params }: { params: { slug: string } }) {
  // 1. Получаем данные поста через Payload Local API
  const post = await payload.find({
    collection: 'posts',
    where: { slug: { equals: params.slug } },
  })

  const data = post.docs[0]
  if (!data) return <div>Пост не найден</div>

  return (
    <article className="container">
      {/* Заголовок и Главное фото */}
      <h1>{data.title}</h1>
      <img src={data.mainImage.url} alt={data.title} />

      {/* Рендеринг тела поста (Layout Blocks) */}
      <div className="post-body">
        {data.layout.map((block: any, i: number) => {
          switch (block.blockType) {
            case 'content':
              return <div key={i} dangerouslySetInnerHTML={{ __html: block.text }} />

            case 'extraImage':
              return <img key={i} src={block.image.url} className={block.className} />

            case 'quote':
              return (
                <blockquote key={i} className={block.className}>
                  <p>{block.text}</p>
                  {block.author && <cite>{block.author}</cite>}
                </blockquote>
              )

            case 'gallery':
              return (
                <div key={i} className="gallery-grid">
                  {block.images.map((img: any) => (
                    <img src={img.image.url} key={img.id} />
                  ))}
                </div>
              )

            default:
              return null
          }
        })}
      </div>
    </article>
  )
}
