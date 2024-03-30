import Image from 'next/image'
import Link from 'next/link'

import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { ModelBrand } from '@/components/model/ModelBrand'

import { Handshake, HeartPulse, Barcode } from 'lucide-react'
import { SwiperNewsWrap } from '../swiper/SwiperNewsWrap'
import { SwiperServiceWrap } from '../swiper/SwiperServiceWrap'


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

const slides = [
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/1',
    title: '記事タイトル1',
    date: '2024.03.21',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/2',
    title: '記事タイトル2',
    date: '2024.03.22',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/3',
    title: '記事タイトル3',
    date: '2024.03.23',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/3',
    title: '記事タイトル3',
    date: '2024.03.23',
  },
  {
    imgSrc: '/images/news.jpeg',
    link: '/article/3',
    title: '記事タイトル3',
    date: '2024.03.23',
  },
];


export const HomeSection = async () => {
  const data: Top[] = await client.fetch(query)

  console.log(data)

  return (
    <div className="pt-[120px] sm:pt-[100px]">
      {/* 3D Model Layout */}
      {/* <ModelBrand /> */}

      <div className="mx-auto w-fit">
        <h2 className="font-bold text-[30px]">
          久保生医久保生医久保生医<br />
          久保生医久保生医<br />
          久保生医
        </h2>
      </div>

      <div>
        {/* ABOUT */}
        <section className="bg-gray pt-12 pb-20 mx-auto mt-10 px-5 sm:px-0">
          {/* <div className="max-w-[900px] w-full mx-auto grid grid-cols-3"> */}
          <div className="max-w-[1000px] w-full mx-auto sm:flex justify-between relative">
            <div className="absolute sm:relative sm:inset-0 right-3 -top-8 z-10 w-[180px] sm:w-[320px] sm:mr-24 -mt-[160px] overflow-hidden">
              { data[0]?.image && (
                <Image
                  src={urlForImage(data[0]?.image)}
                  alt='ABOUT'
                  className="w-full rounded-[50px] shadow-md"
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
            </div>
          </div>
        </section>


        {/* PROFILE */}
        <section className="bg-white pt-16 pb-10 -mt-8 mb-10 rounded-[50px]">
          <div className="mx-auto w-[90%] sm:max-w-[1200px] text-sm">
            <h3 className="text-xl font-bold tracking-[.2em] mb-5">{data[1]?.title}</h3>
            <p className="text-sm tracking-widest">{data[1]?.description}</p>
          </div>

          <div className="mt-6 mx-auto w-[90%] sm:max-w-[1200px] leading-6 text-sm tracking-widest">
            {data[1]?.body?.map((block, index) => (
              <div key={index}>
                {block.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="block sm:flex sm:justify-center mx-auto my-10 px-5 sm:px-0">
            <div
              className="px-7 sm:pl-7 sm:pr-16 py-14 w-full sm:max-w-[calc(400px_+_90px)] sm:w-[calc(100%_/_3_+_50px)] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px]
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
              className="px-7 sm:pl-7 sm:pr-16 py-14 w-full sm:max-w-[calc(400px_+_90px)] sm:w-[calc(100%_/_3_+_50px)] rounded-[50px] sm:rounded-tl-[50px] sm:rounded-bl-[50px]
                sm:rounded-tr-none sm:rounded-br-none bg-white z-20 sm:-ml-[50px]">
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

            <div className="px-7 py-14 sm:-ml-[50px] w-full sm:max-w-[440px] sm:w-[calc(100%_/_3_+_50px)] rounded-[50px] bg-gray z-30">
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

          <div className="w-full sm:w-[220px] sm:mx-auto overflow-hidden mt-3 sm:mt-6 flex justify-end">
            <span className="block overflow-hidden sm:mx-auto">
              <Link
                className="sm:h-[55px] w-[200px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                  flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]
                  rounded-tl-[30px] rounded-bl-[30px] h-[55px]"
                href="/about"
              >
                ABOUT
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

        <section
          className="pt-5 relative mx-auto pb-16"
        >
          <div className="w-[100vw] text-sm overflow-hidden sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:mb-14">
            <h3 className="text-center text-[30px] tracking-[.2em] sm:max-w-[280px] sm:w-1/4 sm:pl-5 relative z-20 font-bold">
              {data[2]?.title}
            </h3>
            {/* <p>{data[2]?.description}</p> */}

            <div
              className="max-w-full w-full pl-5 sm:pl-0 sm:max-w-[calc(50%_+_750px_/_2_-_80px] sm:w-3/4 relative mb-[50px] after:bg-[#F2F2F2] sm:after:w-[calc(100%_+_80px)]
                after:h-[180px] after:absolute after:right-0 after:-bottom-[30px] sm:after:-bottom-[50px] sm:after:rounded-tl-[50px] sm:after:rounded-bl-[50px]
                after:w-[calc(100%_-_80px)] after:rounded-tl-[40px] after:rounded-bl-[40px]"
            >
              {/* {data[2]?.body?.map((block, index) => (
                <div key={index}>
                  {block.children.map((child, childIndex) => (
                    <p key={childIndex}>{child.text}</p>
                  ))}
                </div>
              ))} */}
              <SwiperNewsWrap slides={slides} />
            </div>
          </div>

          <div className="w-full sm:w-[220px] sm:mx-auto overflow-hidden mt-3 sm:mt-6 flex justify-end">
            <span className="block overflow-hidden sm:mx-auto">
              <Link
                className="sm:h-[55px] w-[200px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                  flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]
                  rounded-tl-[30px] rounded-bl-[30px] h-[55px]"
                href="/news"
              >
                NEWS
              </Link>
            </span>
          </div>
        </section>

        <section
          className="sm:mt-16 pt-5 relative mx-auto"
        >
          <div className="w-[100vw] text-sm overflow-hidden sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:mb-14">
            <h3 className="text-center text-[30px] tracking-[.2em] sm:max-w-[280px] sm:w-1/4 sm:pl-5 relative z-20 font-bold">
              品牌
            </h3>
            <div
              className="max-w-full w-full pl-5 sm:pl-0 sm:max-w-[calc(50%_+_750px_/_2_-_80px] sm:w-3/4 relative mb-[50px] after:bg-[#F2F2F2] sm:after:w-[calc(100%_+_80px)]
                after:h-[180px] after:absolute after:right-0 after:-bottom-[30px] sm:after:-bottom-[50px] sm:after:rounded-tl-[50px] sm:after:rounded-bl-[50px]
                after:w-[calc(100%_-_80px)] after:rounded-tl-[40px] after:rounded-bl-[40px]"
            >
              <SwiperServiceWrap slides={slides} />
            </div>
          </div>

          <div className="w-full sm:w-[220px] sm:mx-auto overflow-hidden mt-3 sm:mt-6 flex justify-end">
            <span className="block overflow-hidden sm:mx-auto">
              <Link
                className="sm:h-[55px] w-[200px] sm:w-[220px] sm:rounded-[50px] bg-black text-white relative
                  flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]
                  rounded-tl-[30px] rounded-bl-[30px] h-[55px]"
                href="/news"
              >
                SERVICE
              </Link>
            </span>
          </div>
        </section>

        <section className="mt-[120px] px-5 sm:px-0">
          <div className="max-w-[750px] w-full mx-auto mb-[60px] sm:mb-[120px] rounded-[40px] sm:rounded-[50px] py-[40px]
            sm:py-[50px] px-[30px] sm:px-[55px] bg-gray">
            <h3 className="text-[30px] font-bold text-center mb-[20px] sm:mb-[40px] w-full tracking-[.2em] leading-[1]">聯繫我們</h3>
            <p className="font-semibold mb-[25px] sm:mb-[30px] tracking-wide leading-[2] sm:leading-[2.5]">
              哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍哈嘍
            </p>

            <div className="w-[220px] mx-auto overflow-hidden mt-6">
              <span className="overflow-hidden mx-auto">
                <Link
                  className="h-[55px] sm:w-[220px] rounded-[40px] sm:rounded-[50px] bg-black text-white relative
                    flex flex-wrap items-center justify-center tracking-[.5em] text-xs pl-[12px]"
                  href="/contact"
                >
                  CONTACT
                </Link>
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}