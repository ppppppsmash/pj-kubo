'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from './Loader'

export const MotionAnimate = () => {
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
      {loading && (
        <motion.div>
          <Loader setLoading={setLoading} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
