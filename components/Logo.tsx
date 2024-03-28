import Link from 'next/link'

export function Logo() {
  return (
    <div className="w-[120px] mx-auto pt-6 mb-4">
      <Link href="/">
        <img
          className="w-full"
          src="/images/logo.png"
        />
      </Link>
    </div>
  )
}