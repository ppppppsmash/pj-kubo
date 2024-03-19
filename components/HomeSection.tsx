import Image from 'next/image'

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ModelBrand } from '@/components/model/ModelBrand'

interface TopDoc {
  children: {
    text: string
  }[]
}

interface Top {
  title: string
  description: string
  order: string
  image: any
  body: TopDoc[]
}

const query = groq`
  *[_type == 'top'] {
    title,
    description,
    order,
    image,
    body
  } | order(order asc)
`

export const revalidate = 60

export const HomeSection = async () => {
  const data: Top[] = await client.fetch(query)

  console.log(data)

  return (
    <div>
      <ModelBrand />

      <div className="px-5 sm:w-[980px] sm:px-0 mx-auto">
        <section className="my-10 border border-black">
          <h1>section 1</h1>
          <h3>{data[0]?.title}</h3>
          <p>{data[0]?.description}</p>

          <div className="mt-6">
            {data[0]?.body.map((block: any, index: number) => (
              <div key={index}>
                {block.children.map((area: any, childIndex: number) => (
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


        <section className="my-10 border border-black">
          <h1>section 2</h1>
          <h3>{data[1]?.title}</h3>
          <p>{data[1]?.description}</p>

          <div className="mt-6">
            {data[1]?.body.map((block: any, index: number) => (
              <div key={index}>
                {block.children.map((child: any, childIndex: number) => (
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

        <section className="my-10 border border-black">
          <h1>section 3</h1>
          <h3>{data[2]?.title}</h3>
          <p>{data[2]?.description}</p>

          <div className="mt-6">
            {data[2]?.body.map((block: any, index: number) => (
              <div key={index}>
                {block.children.map((child: any, childIndex: number) => (
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

        <section className="my-10 border border-black">
          <h1>section 4</h1>
          <h3>{data[3]?.title}</h3>
          <p>{data[3]?.description}</p>

          <div className="mt-6">
            {data[3]?.body.map((block: any, index: number) => (
              <div key={index}>
                {block.children.map((child: any, childIndex: number) => (
                  <p key={childIndex}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>


          {/* { data[3]?.image && (
            <Image
              src={urlForImage(data[3]?.image)}
              alt='test'
              width={100}
              height={100}
            />
          )} */}
        </section>
      </div>
    </div>
  )
}
