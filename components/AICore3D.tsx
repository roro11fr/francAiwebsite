'use client'

import { useEffect, useRef, useState } from 'react'
import type * as THREETypes from 'three'

// Rotating wireframe "AI core" rendered with three.js.
// Loaded lazily so three.js stays out of the initial bundle.
// media limits rendering to a breakpoint, so only one WebGL context runs at a time.
export function AICore3D({ className = '', style, media }: { className?: string; style?: React.CSSProperties; media?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!media) { setActive(true); return }
    const mq = window.matchMedia(media)
    const update = () => setActive(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [media])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount || !active) return

    let disposed = false
    let cleanup = () => {}

    import('three').then((THREE) => {
      if (disposed) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      let renderer: THREETypes.WebGLRenderer
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      } catch {
        return // No WebGL on this device — the element simply stays empty
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      mount.appendChild(renderer.domElement)
      renderer.domElement.style.display = 'block'

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
      camera.position.z = 6

      const group = new THREE.Group()
      scene.add(group)

      // Outer wireframe shell
      const shell = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(1.6, 1)),
        new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.55 }),
      )
      group.add(shell)

      // Inner solid core
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.9, 0),
        new THREE.MeshStandardMaterial({
          color: 0x6d28d9,
          emissive: 0x4c1d95,
          emissiveIntensity: 0.6,
          metalness: 0.4,
          roughness: 0.25,
          flatShading: true,
        }),
      )
      group.add(core)

      // Vertex nodes on the shell
      const nodeGeo = new THREE.IcosahedronGeometry(1.6, 1)
      const nodes = new THREE.Points(
        nodeGeo,
        new THREE.PointsMaterial({ color: 0xc084fc, size: 0.07, transparent: true, opacity: 0.9 }),
      )
      group.add(nodes)

      // Orbiting ring of particles
      const ringCount = 140
      const ringPos = new Float32Array(ringCount * 3)
      for (let i = 0; i < ringCount; i++) {
        const a = (i / ringCount) * Math.PI * 2
        const r = 2.3 + (Math.random() - 0.5) * 0.25
        ringPos[i * 3] = Math.cos(a) * r
        ringPos[i * 3 + 1] = (Math.random() - 0.5) * 0.12
        ringPos[i * 3 + 2] = Math.sin(a) * r
      }
      const ringGeo = new THREE.BufferGeometry()
      ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3))
      const ring = new THREE.Points(
        ringGeo,
        new THREE.PointsMaterial({ color: 0xa78bfa, size: 0.035, transparent: true, opacity: 0.7 }),
      )
      ring.rotation.x = 0.45
      scene.add(ring)

      scene.add(new THREE.AmbientLight(0xffffff, 0.35))
      const key = new THREE.PointLight(0xc084fc, 30, 20)
      key.position.set(3, 3, 4)
      scene.add(key)
      const rim = new THREE.PointLight(0x7c3aed, 20, 20)
      rim.position.set(-3, -2, 2)
      scene.add(rim)

      const resize = () => {
        const w = mount.clientWidth
        const h = mount.clientHeight
        if (!w || !h) return
        renderer.setSize(w, h, false)
        renderer.domElement.style.width = '100%'
        renderer.domElement.style.height = '100%'
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      resize()
      const ro = new ResizeObserver(resize)
      ro.observe(mount)

      // Subtle pointer parallax
      const target = { x: 0, y: 0 }
      const onPointer = (e: PointerEvent) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 0.6
        target.y = (e.clientY / window.innerHeight - 0.5) * 0.6
      }
      window.addEventListener('pointermove', onPointer)

      // Only render while on screen
      let visible = true
      const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
      io.observe(mount)

      const clock = new THREE.Clock()
      let raf = 0
      const tick = () => {
        raf = requestAnimationFrame(tick)
        if (!visible) return
        const t = clock.getElapsedTime()
        const speed = reduceMotion ? 0.15 : 1
        group.rotation.y = t * 0.25 * speed + target.x
        group.rotation.x = Math.sin(t * 0.3) * 0.2 * speed + target.y
        core.rotation.y = -t * 0.6 * speed
        core.scale.setScalar(1 + Math.sin(t * 1.6) * 0.04 * speed)
        ring.rotation.y = -t * 0.15 * speed
        renderer.render(scene, camera)
      }
      tick()

      cleanup = () => {
        cancelAnimationFrame(raf)
        ro.disconnect()
        io.disconnect()
        window.removeEventListener('pointermove', onPointer)
        scene.traverse((obj) => {
          const o = obj as THREETypes.Mesh
          o.geometry?.dispose()
          const m = o.material as THREETypes.Material | THREETypes.Material[] | undefined
          if (Array.isArray(m)) m.forEach((x) => x.dispose())
          else m?.dispose()
        })
        nodeGeo.dispose()
        renderer.dispose()
        renderer.domElement.remove()
      }
    }).catch(() => {
      // three.js failed to load (e.g. offline) — decorative only, ignore
    })

    return () => {
      disposed = true
      cleanup()
    }
  }, [active])

  return <div ref={mountRef} aria-hidden="true" className={className} style={style} />
}
