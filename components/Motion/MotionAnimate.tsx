'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from './Loader'

export default function MotionAnimate() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const bodyElement = document.querySelector('body')
    if (bodyElement) {
      if (loading) {
        bodyElement.classList.add('loading')
      } else {
        bodyElement.classList.remove('loading')
      }
    }
  }, [loading])

  return (
    <AnimatePresence>
      { loading && (
        <motion.div
          className="bg-white h-[100svh] w-[100vw] absolute z-50"
        >
          <Loader setLoading={setLoading} />
        </motion.div>
      )}

      { !loading && (
        <div className="transition-image final">
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            src="/images/image-2.png"
            layoutId="main-image-1"
          />
        </div>
      )}
    </AnimatePresence>
  )
}
