
export default async function About() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-100 delay-100"
          >
            ABOUT
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454]">
            <h3 className="font-semibold leading-[27px] text-[36px]">
              你好你好你好你好
            </h3>

            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>

            <p className="mt-[33px] leading-[31px]">
              你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-[8%] bg-black">
        <div className="flex sm:flex-row flex-col gap-[8vw]">
          <h2 className="mt-5 font-semibold text-[32px] leading-[20px] tracking-[.01em] text-white">COMPANY</h2>

          <dl className="-mt-[27px] leading-[36px] tracking-[.01em] text-[#F5F5F5] flex flex-wrap max-w-[1200px]">
            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">会社名</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">株式会社<br />
              company inc.
            </dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">設立</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">2024年1月1日</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">設立</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">2024年1月1日</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">設立</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">2024年1月1日</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">設立</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">2024年1月1日</dd>
          </dl>
        </div>
      </section>

      <section className="bg-[#F5F5F5] pb-20 mb-10">
        <div className="px-[10%]">
          <div className="flex sm:flex-row flex-col justify-around pt-20 sm:pt-[127px] gap-5">
            <h2 className="font-semibold leading-[30px] tracking-[.01em] text-[#545454]">
              CEO<br />MESSAGE
            </h2>

            <img className="rounded-lg" src="/images/image-1.png" />

            <div className="max-w-[604px]">
              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[32px]">
                大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好
              </p>

              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[32px]">
                大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好大家好
              </p>

              <p className="leading-[27px] tracking-[.02em] text-[#545454] mb-[32px]">
                代表取締役
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}