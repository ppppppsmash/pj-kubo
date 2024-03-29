import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Style {
  style?: string
}

export function Logo({ style }: Style ) {
  return (
    <div className={cn(
      "w-[120px] mx-auto pt-6 mb-4",
      style
    )}>
      <Link href="/">
        <img
          className="w-full"
          src="/images/logo.png"
        />
      </Link>
    </div>
  )
}