'use client'

import { useReducedMotion, useSpring } from 'framer-motion'
import { useInViewport, useWindowSize } from '@/hooks'
import { startTransition, useEffect, useRef } from 'react'
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three'
import { throttle } from '@/lib/utils/throttle'
import { cleanRenderer, cleanScene, removeLights } from '@/lib/utils/three'
import fragmentShader from './displacement-sphere-fragment.glsl?raw'
import vertexShader from './displacement-sphere-vertex.glsl?raw'

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
}

export const DisplacementSphere = props => {
  //const { theme } = useTheme()
  const start = useRef(Date.now())
  const canvasRef = useRef()
  const mouse = useRef()
  const renderer = useRef()
  const camera = useRef()
  const scene = useRef()
  const lights = useRef()
  const uniforms = useRef()
  const material = useRef()
  const geometry = useRef()
  const sphere = useRef()
  const reduceMotion = useReducedMotion()
  const isInViewport = useInViewport(canvasRef)
  const windowSize = useWindowSize()
  const rotationX = useSpring(0, springConfig)
  const rotationY = useSpring(0, springConfig)

  useEffect(() => {
    const { innerWidth, innerHeight } = window
    mouse.current = new Vector2(0.8, 0.5)
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true,
    })
    renderer.current.setSize(innerWidth, innerHeight)
    renderer.current.setPixelRatio(1)
    renderer.current.outputColorSpace = LinearSRGBColorSpace

    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100)
    camera.current.position.z = 52

    scene.current = new Scene()

    material.current = new MeshPhongMaterial()
    material.current.onBeforeCompile = shader => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { type: 'f', value: 0 } },
      ])

      shader.uniforms = uniforms.current
      shader.vertexShader = vertexShader
      shader.fragmentShader = fragmentShader
    }

    startTransition(() => {
      geometry.current = new SphereGeometry(24, 64, 128)
      sphere.current = new Mesh(geometry.current, material.current)
      sphere.current.position.z = 0
      sphere.current.position.x = 0
      sphere.current.position.y = 0
      sphere.current.modifier = Math.random()
      scene.current.add(sphere.current)
    })

    return () => {
      cleanScene(scene.current)
      cleanRenderer(renderer.current)
    }
  }, [])

  useEffect(() => {
    const dirLight = new DirectionalLight(0xffffff, 'light' ? 1.8 : 2.0)
    const ambientLight = new AmbientLight(0xffffff, 'light' ? 2.7 : 0.4)

    dirLight.position.z = 200
    dirLight.position.x = 100
    dirLight.position.y = 100

    lights.current = [dirLight, ambientLight]
    lights.current.forEach(light => scene.current.add(light))

    return () => {
      removeLights(lights.current)
    }
  }, [])

  useEffect(() => {
    const { width, height } = windowSize
    console.log(width)

    const adjustedHeight = height + height * 0.3
    renderer.current.setSize(width, adjustedHeight)
    camera.current.aspect = width / adjustedHeight
    camera.current.updateProjectionMatrix()

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current)
    }

    if (width <= 640) {
        sphere.current.position.x = 10
        sphere.current.position.y = 10
        sphere.current.position.z = 0

      } else {
        sphere.current.position.x = 0
        sphere.current.position.y = 0
        sphere.current.position.z = 0
      }
  }, [reduceMotion, windowSize])

  useEffect(() => {
    const onMouseMove = throttle(event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      }

      rotationX.set(position.y / 2)
      rotationY.set(position.x / 2)
    }, 100)

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [isInViewport, reduceMotion, rotationX, rotationY])

  useEffect(() => {
    let animation

    const animate = () => {
      animation = requestAnimationFrame(animate)

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current)
      }

      sphere.current.rotation.z += 0.001
      sphere.current.rotation.x = rotationX.get()
      sphere.current.rotation.y = rotationY.get()

      renderer.current.render(scene.current, camera.current)
    }

    if (!reduceMotion && isInViewport) {
      animate()
    } else {
      renderer.current.render(scene.current, camera.current)
    }

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [isInViewport, reduceMotion, rotationX, rotationY])

  return (
    <div className="relative h-[70svh] sm:h-auto overflow-hidden">
      <div className="absolute top-0 h-full w-full z-[1] opacity-50 bg-black bg-opacity-30" />

      <canvas
        className="absolute sm:relative sm:inset-0 !w-full -top-[70%] animate-color-change"
        aria-hidden
        ref={canvasRef}
      />
    </div>
  )
}
