import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#5B4B8A] via-[#7B5B8A] to-[#8B6B9A]">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://my.spline.design/motiontrails-mQJiWP02BoJRJj7QScWZ8Yil/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-16 py-8">
        <ul className="flex gap-12 text-sm font-bold tracking-wide text-white">
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            FAVORIT
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            FASHION
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            ELEKTRONIK
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            KESEHATAN & KECANTIKAN
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            OLAHRAGA
          </li>
          <li className="cursor-pointer transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]">
            DISKON
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-between px-16 pt-12">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-200/90">BELANJA ONLINE:</p>
          <h1 className="mb-6 text-6xl font-bold leading-tight text-white">
            BAYAR SEMUA TAGIHAN
            <br />
            DENGAN SATU SENTUHAN
            <br />
            MELALUI E-PAYMENT
          </h1>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/90">
            Nikmati kemudahan transaksi online secara cepat, praktis, dan aman untuk seluruh kebutuhan harian serta produk impian Anda.
          </p>

          {/* Buttons */}
          <div className="mb-12 flex gap-4">
            <Button
              size="lg"
              className="rounded-full bg-white px-8 text-sm font-semibold uppercase tracking-wide text-[#7B6BA8] transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
            >
              BELI SEKARANG
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white bg-transparent px-8 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:border-red-400 hover:bg-white/10 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.8),0_0_40px_rgba(239,68,68,0.5)]"
            >
              PELAJARI LEBIH LANJUT
            </Button>
          </div>

          {/* Carousel Dots */}
          <div className="flex gap-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-white/40"></div>
          </div>
        </div>

        <div className="relative animate-pulse-scale transition-transform duration-500 hover:scale-110">
          <div className="relative h-[720px] w-[540px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%2812%29-AUzcUJl45XueiOf0D1t9cvkzHg1wce.png"
              alt="Headset VR Gaming"
              fill
              className="object-contain transition-all duration-500"
              style={{
                filter:
                  "drop-shadow(0 0 50px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 100px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 150px rgba(239, 68, 68, 0.4))",
              }}
            />
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-12 left-16 z-10 flex gap-6">
        <Twitter className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Linkedin className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Facebook className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
        <Instagram className="h-5 w-5 cursor-pointer text-white transition-all duration-300 hover:text-red-400 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
      </div>
    </div>
  )
}
