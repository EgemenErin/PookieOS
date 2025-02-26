import Image from "next/image"
import Link from "next/link"
import { Folder } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#f8f6e9]">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaper2.png-nERJjSQZArBMYnLMZHM4pTlVwZHmBb.jpeg"
          alt="Retro manga style background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Desktop Icons Container */}
      <div className="z-10 absolute top-6 left-6 grid grid-cols-1 gap-4">
        {/* Pookie Doc Folder */}
        <Link href="/pookie-doc" className="flex flex-col items-center group w-20">
          <div
            className="bg-[#f6f193] w-16 h-16
                         flex items-center justify-center 
                         transition-colors relative
                         border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600
                         shadow-[inset_-1px_-1px_0_0_#000]
                         active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white
                         group-hover:bg-[#f7f3b0]"
          >
            <Folder className="w-10 h-10 text-pink-400" />
          </div>
          <span
            className="mt-1 px-1 text-center border border-black text-xs w-full
                         shadow-[1px_1px_0_0_#000]"
          >
            pookie doc
          </span>
        </Link>

        {/* Dates Folder */}
        <Link href="/dates" className="flex flex-col items-center group w-20">
          <div
            className="bg-[#f6f193] w-16 h-16
                         flex items-center justify-center 
                         transition-colors relative
                         border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600
                         shadow-[inset_-1px_-1px_0_0_#000]
                         active:border-t-gray-600 active:border-l-gray-600 active:border-r-white active:border-b-white
                         group-hover:bg-[#f7f3b0]"
          >
            <Folder className="w-10 h-10 text-pink-400" />
          </div>
          <span
            className="mt-1 px-1 text-center border border-black text-xs w-full
                         shadow-[1px_1px_0_0_#000]"
          >
            dates
          </span>
        </Link>
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 z-20 h-12 bg-[#f6f193] shadow-lg">
        <div className="relative w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4pV50F9V7gaUmtfehsIoG1IBnicp41.png"
            alt="Taskbar"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>
    </main>
  )
}

