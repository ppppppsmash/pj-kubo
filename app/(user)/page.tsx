import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

const queryPrimary = groq`
  *[_type == 'top'] {
    title,
    description,
    body
  }[0]
`

export default async function Home() {
  const data = await client.fetch(queryPrimary)

  return (
    <main>
      <section className="my-10 border">
        <h1>secion 1</h1>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>

        <div>
          {data?.body}
        </div>
      </section>

      <section className="my-10 border">

      </section>
      
    </main>
  );
}
