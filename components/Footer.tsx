import { Facebook, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <div className="flex justify-between flex-wrap ml-5 items-center">
      {/* ↓ w-[calc(100%_-_80px)] */}
      <div
        className="w-full flex flex-wrap justify-between items-center px-7 h-[90px] overflow-hidden rounded-tl-3xl
          bg-gray"
      >
        <div className="flex items-center gap-x-4 ml-4">
          <a href="">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <div className="mr-5">
          <div>logo</div>
          <p className="text-xs">© Kubo All Rights Reserved.</p>
        </div>
      </div>

      <div>

      </div>
    </div>
  )
}