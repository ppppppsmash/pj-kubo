import Image from 'next/image'

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ModelBrand } from '@/components/model/ModelBrand'
import Link from 'next/link'

import { Handshake, HeartPulse, Barcode } from 'lucide-react'

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

export const HomeSection = async () => {
  const data: Top[] = await client.fetch(query)

  console.log(data)

  return (
    <div className="pt-10 sm:pt-[100px]">
      <ModelBrand />

      <div>
        {/* ABOUT */}
        <section className="bg-gray pt-12 pb-20 mx-auto mt-10">
          <div className="max-w-[900px] w-full mx-auto grid grid-cols-3">
            <div className="w-[180px] -mt-[100px] col-span-1">
              { data[0]?.image && (
                <Image
                  src={urlForImage(data[0]?.image)}
                  alt='ABOUT'
                  className="w-full rounded-[50px]"
                  width={100}
                  height={100}
                />
              )}
            </div>

            <div className="col-span-2 flex flex-col justify-around">
              <h3 className="text-xl font-bold tracking-[.2em] mb-5">{data[0]?.title}</h3>
              <p className="text-sm tracking-widest">{data[0]?.description}</p>

              <div className="mt-6 text-sm leading-6 tracking-widest">
                {data[0]?.body.map((block, index) => (
                  <div key={index}>
                    {block.children.map((area, childIndex) => (
                      <p key={childIndex}>{area.text}</p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="w-full overflow-hidden mt-6">
                <span className="overflow-hidden mx-auto">
                  <Link
                    className="sm:h-[55px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                      flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]"
                    href="/about"
                  >
                    ABOUT
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* PROFILE */}
        <section className="bg-white pt-16 pb-10 -mt-8 mb-10 rounded-[50px]">
          <div className="mx-auto w-[90%] sm:max-w-[900px] text-sm">
            <h3 className="text-xl font-bold tracking-[.2em] mb-5">{data[1]?.title}</h3>
            <p className="text-sm tracking-widest">{data[1]?.description}</p>
          </div>

          <div className="mt-6 mx-auto w-[90%] sm:max-w-[900px] leading-6 text-sm tracking-widest">
            {data[1]?.body?.map((block, index) => (
              <div key={index}>
                {block.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="block sm:flex mx-auto w-[90%] sm:max-w-[1000px] my-10">
            <div
              className="pl-7 pr-16 py-14 w-full sm:w-[calc(100%_/_3_+50px)] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px]
                sm:rounded-tr-none sm:rounded-br-none bg-gray z-10"
            >
              <h3 className="text-center mb-8">
                <span className="block text-[24px] tracking-[.2em] mb-4 font-extrabold">
                  [01]
                </span>
                <span className="block text-sm tracking-[.2em] font-bold mb-8">
                  国際貿易
                </span>

                <Handshake className="w-28 h-28 mx-auto" />
              </h3>
              <p className="leading-7 text-sm tracking-wide">
                テストテストテストテストテストテストテストテストテストテストテストテストテストテスト
                テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
              </p>
            </div>

            <div
              className="pl-7 pr-16 py-14 sm:-ml-[50px] w-full sm:w-[calc(100%_/_3_+50px)] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px]
                sm:rounded-tr-none sm:rounded-br-none bg-white z-20">
              <h3 className="text-center mb-8">
                <span className="block text-[24px] tracking-[.2em] mb-4 font-extrabold">
                  [02]
                </span>
                <span className="block text-sm tracking-[.2em] font-bold mb-8">
                  商品製造
                </span>
                <HeartPulse className="w-28 h-28 mx-auto" />

              </h3>
              <p className="leading-7 text-sm tracking-wide">
                テストテストテストテストテストテストテストテストテストテストテストテストテスト
                テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
              </p>
            </div>

            <div className="pl-7 pr-16 py-14 sm:-ml-[50px] w-full sm:w-[calc(100%_/_3_+50px)] rounded-[50px] bg-gray z-30">
              <h3 className="text-center mb-8">
                <span className="block text-[24px] tracking-[.2em] mb-4 font-extrabold">
                  [03]
                </span>
                <span className="block text-sm tracking-[.2em] font-bold mb-8">
                  美容服務
                </span>

                <Barcode className="w-28 h-28 mx-auto" />
              </h3>
              <p className="leading-7 text-sm tracking-wide">
                テストテストテストテストテストテストテストテストテストテストテストテストテスト
                テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
              </p>
            </div>
          </div>

          <div className="w-[220px] mx-auto overflow-hidden mt-6">
            <span className="overflow-hidden mx-auto">
              <Link
                className="sm:h-[55px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                  flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]"
                href="/profile"
              >
                PROFILE
              </Link>
            </span>
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



        <section className="bg-gray pt-16 pb-10 -mt-8 mb-10 rounded-tl-[50px] rounded-tr-[50px]">
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

        <section className="my-10 border border-black">
          <h1>section 4</h1>
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
      </div>
    </div>
  )
}
