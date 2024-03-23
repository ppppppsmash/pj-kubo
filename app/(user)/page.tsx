
import { HomeSection } from '@/components/contents/Home'
import MotionAnimate from '@/components/Motion/MotionAnimate'
import { Hero } from '@/components/Hero'

export const revalidate = 60

export default function Home() {

  return (
    <div>
      <Hero />
      <MotionAnimate />
      <HomeSection />
    </div>
  )
}
