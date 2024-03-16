import Link from 'next/link'

export const Header = () => {
  return (
    <nav className="flex justify-between py-4">
      <div>
        logo
      </div>

      <ul className="flex gap-x-4">
        <li>
          <Link
            href="/"
          >
            <span>首頁</span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
          >
            <span>測試</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
          >
            <span>測試</span>
          </Link>
        </li>
        <li>
          <Link
            href="/product"
          >
            <span>測試</span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
          >
            <span>測試</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}