import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Audiowide } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const aurora = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aurora",
})

export const metadata: Metadata = {
  title: "Toko Online | Belanja Praktis & E-Payment",
  description: "Bayar semua tagihan Anda hanya dengan satu sentuhan E-Payment. Belanja produk elektronik, fashion, dan kebutuhan harian dengan mudah.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${aurora.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
