
export default async function Company() {
  return (
    <div>
      <section className="pt-[50px] sm:pt-[100px] bg-gray w-[100vw] overflow-hidden pb-20">
        <div className="pt-[60px] px-[10%] max-w-[1600px] mx-auto">
          <h1
            className="font-bold text-[60px] sm:text-[180px] leading-[50px] sm:leading-[120px] tracking-[.01em] duration-500 delay-300 animate-slide-in-left"
          >
            COMPANY
          </h1>

          <div className="mt-[80px] mx-auto tracking-wide text-[#545454] animate-fade-in-bottom duration-500 delay-300">
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
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">久保生医自然物研究所 株式会社<br />
            Ace Herb Lab. Inc.
            </dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">所在地</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">〒190-1222<br />東京都西多摩郡瑞穂町箱根ヶ崎東松原19-6</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">設立</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">令和2年2月27日</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">事業内容</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">基礎化粧品、頭髪用化粧品<br />
              医薬部外品の一般商品並びに業務用商品の商品企画開発<br />
              及び受託製造、各種健康食品化粧品の製造及び販売各種<br />
              上記に関わるコンサルティング及び輸出入業
            </dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">所屬團體</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">日本乳酸菌学会 賛助会員</dd>

            <dt className="w-1/4 border-b border-b-[#6B6B6B] flex items-center">許可証</dt>
            <dd className="w-3/4 border-b border-b-[#6B6B6B] p-[36px]">
              化粧品製造業許可証<br />
              粉末食品製造、菓子製造
            </dd>
          </dl>
        </div>
      </section>
    </div>
  )
}