
import { HomeSection } from '@/components/HomeSection'
import MotionAnimate from '@/components/Motion/MotionAnimate'
import { Title } from '@/components/Title'

export default function Home() {

  return (
    <main className="w-full">
      <Title />
      <MotionAnimate />
      <HomeSection />
    </main>
  )
}
