import Image from 'next/image'

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

interface TopDoc {
  children: {
    text: string
  }[]
}

interface Top {
  title: string
  description: string
  image: any
  body: TopDoc[]
}

const query = groq`
  *[_type == 'top'] {
    title,
    description,
    image,
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

        { data[0]?.image && (
          <Image
            src={urlForImage(data[0]?.image)}
            alt='test'
            width={100}
            height={100}
          />
        ) }
      </section>


      <section className="my-10 border">
        <h1>secion 2</h1>
        <h3>{data[1]?.title}</h3>
        <p>{data[1]?.description}</p>

        <div className="mt-6">
          {data[1]?.body?.map((block, index) => (
            <div key={index}>
              {block.children.map((child, childIndex) => (
                <p key={childIndex}>{child.text}</p>
              ))}
            </div>
          ))}
        </div>

        { data[1]?.image && (
          <Image
            src={urlForImage(data[1]?.image)}
            alt='test'
            width={100}
            height={100}
          />
        )}
      </section>



      <section className="my-10 border">
        <h1>secion 3</h1>
        <h3>{data[2]?.title}</h3>
        <p>{data[2]?.description}</p>

        <div className="mt-6">
          {data[2]?.body?.map((block, index) => (
            <div key={index}>
              {block.children.map((child, childIndex) => (
                <p key={childIndex}>{child.text}</p>
              ))}
            </div>
          ))}
        </div>

        { data[2]?.image && (
          <Image
            src={urlForImage(data[2]?.image)}
            alt='test'
            width={100}
            height={100}
          />
        )}
      </section>

      <section className="my-10 border">
        <h1>secion 4</h1>
        <h3>{data[3]?.title}</h3>
        <p>{data[3]?.description}</p>

        <div className="mt-6">
          {data[3]?.body?.map((block, index) => (
            <div key={index}>
              {block.children.map((child, childIndex) => (
                <p key={childIndex}>{child.text}</p>
              ))}
            </div>
          ))}
        </div>


        { data[3]?.image && (
          <Image
            src={urlForImage(data[3]?.image)}
            alt='test'
            width={100}
            height={100}
          />
        )}
      </section>
      
    </main>
  )
}
