import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

interface TopDoc {
  children: {
    text: string
  }[]
}

interface Top {
  title: string
  description: string
  body: TopDoc[]
}



const query = groq`
  *[_type == 'top'] {
    title,
    description,
    body
  }
`

export default async function Home() {
  const data: Top[] = await client.fetch(query)
  console.log(data)

  return (
    <main>
      <section className="my-10 border">
        <h1>secion 1</h1>
        <h3>{data[0]?.title}</h3>
        <p>{data[0]?.description}</p>

        <div className="mt-6">
          {data[0]?.body.map((block, index) => (
            <div key={index}>
              {block.children.map((area, childIndex) => (
                <p key={childIndex}>{area.text}</p>
              ))}
            </div>
          ))}
        </div>        
      </section>

      <section className="my-10 border">
        <h1>secion 2</h1>
        <h3>{data[1]?.title}</h3>
        <p>{data[1]?.description}</p>

        <div className="mt-6">
          {data[1]?.body.map((block, index) => (
            <div key={index}>
              {block.children.map((child, childIndex) => (
                <p key={childIndex}>{child.text}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      
    </main>
  );
}
