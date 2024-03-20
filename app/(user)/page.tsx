
import { HomeSection } from '@/components/HomeSection'
import MotionAnimate from '@/components/Motion/MotionAnimate'
import { Hero } from '@/components/Hero'

export const revalidate = 60

export default function Home() {

  return (
    <main className="w-full">
      <Hero />
      <MotionAnimate />
      <HomeSection />
    </main>
  )
}
