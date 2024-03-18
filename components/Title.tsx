'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Transition } from './transition/Transition'
import { useInterval } from '@/hooks'

const titles: string[] = ['健康', '美麗', '快樂']

export const Title = () => {
  const [showScroll, setShowScroll] = useState(true)
  const [titleIndex, setTitleIndex] = useState(0)

  const currentTitle = titles.find((title, index) => index === titleIndex)

  useInterval(
    () => {
      const index = (titleIndex + 1) % titles.length
      setTitleIndex(index)
    },
    5000
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 0 && showScroll) {
        setShowScroll(false)
      } else if (scrollTop === 0 && !showScroll) {
        setShowScroll(true)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showScroll])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-[580px] w-full relative"
    >
      <h1 className="font-black text-3xl mb-4">久保生医</h1>
      <h2 className="text-md text-xl font-bold mb-3">我們只跟世界最權威級的機構或大師合作，<br />希望用最自然的保養方式來幫助他人更健康。</h2>

      <div className="row text-4xl text-[60px] font-extrabold pt-4">
        <p className="my-4">我們帶來</p>
        {titles.map(title => (
        <Transition
          unmount
          in={title === currentTitle}
          timeout={{ enter: 3000, exit: 2000 }}
          key={title}
        >
          {({ status, nodeRef }: any) => (
            <span
              aria-hidden
              ref={nodeRef}
              data-plus={true}
              data-status={status}
              className="word"
            >
              {title}
            </span>
          )}
        </Transition>
        ))}
      </div>
    </motion.div>
  )
}

// transition: opacity .5s ease;