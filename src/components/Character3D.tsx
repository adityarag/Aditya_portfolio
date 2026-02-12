import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// 3D Character Component
function Character() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const bodyRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }

    if (headRef.current) {
      // Head bobbing
      headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 2) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <Sphere ref={headRef} args={[0.8, 32, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color="#fdbcf4" />
      </Sphere>

      {/* Eyes */}
      <Sphere args={[0.1, 16, 16]} position={[-0.25, 1.6, 0.6]}>
        <meshStandardMaterial color="#000" />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[0.25, 1.6, 0.6]}>
        <meshStandardMaterial color="#000" />
      </Sphere>

      {/* Nose */}
      <Sphere args={[0.05, 16, 16]} position={[0, 1.4, 0.7]}>
        <meshStandardMaterial color="#ff9999" />
      </Sphere>

      {/* Body */}
      <Cylinder ref={bodyRef} args={[0.6, 0.8, 1.5, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#667eea" />
      </Cylinder>

      {/* Arms */}
      <Cylinder args={[0.15, 0.15, 1, 16]} position={[-1, 0.5, 0]} rotation={[0, 0, Math.PI / 6]}>
        <meshStandardMaterial color="#fdbcf4" />
      </Cylinder>
      <Cylinder args={[0.15, 0.15, 1, 16]} position={[1, 0.5, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <meshStandardMaterial color="#fdbcf4" />
      </Cylinder>

      {/* Hands */}
      <Sphere args={[0.2, 16, 16]} position={[-1.4, 0.1, 0]}>
        <meshStandardMaterial color="#fdbcf4" />
      </Sphere>
      <Sphere args={[0.2, 16, 16]} position={[1.4, 0.1, 0]}>
        <meshStandardMaterial color="#fdbcf4" />
      </Sphere>

      {/* Legs */}
      <Cylinder args={[0.2, 0.2, 1.2, 16]} position={[-0.3, -1.3, 0]}>
        <meshStandardMaterial color="#4facfe" />
      </Cylinder>
      <Cylinder args={[0.2, 0.2, 1.2, 16]} position={[0.3, -1.3, 0]}>
        <meshStandardMaterial color="#4facfe" />
      </Cylinder>

      {/* Feet */}
      <Box args={[0.4, 0.2, 0.6]} position={[-0.3, -2, 0.2]}>
        <meshStandardMaterial color="#333" />
      </Box>
      <Box args={[0.4, 0.2, 0.6]} position={[0.3, -2, 0.2]}>
        <meshStandardMaterial color="#333" />
      </Box>
    </group>
  )
}

// Floating particles around character
function FloatingParticles() {
  const particlesRef = useRef<THREE.Group>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ],
        scale: Math.random() * 0.5 + 0.1,
        color: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'][Math.floor(Math.random() * 5)]
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <Sphere
          key={index}
          args={[particle.scale, 8, 8]}
          position={particle.position as [number, number, number]}
        >
          <meshStandardMaterial color={particle.color} transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  )
}

// Main 3D Scene Component
const Character3D: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#667eea" />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#f093fb" />

        {/* 3D Character */}
        <Character />

        {/* Floating Particles */}
        <FloatingParticles />

        {/* Controls (optional - can be removed for production) */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}

export default Character3D
