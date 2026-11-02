"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

const BannerSlider = dynamic(() => import("./components/bannerslider"), {
  ssr: false,
})

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div className="w-full min-h-[420px] bg-white animate-pulse" />}>
        <BannerSlider />
      </Suspense>
    </div>
  )
}
