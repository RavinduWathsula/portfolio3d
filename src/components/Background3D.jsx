import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Float, PerspectiveCamera } from '@react-three/drei'
import { useScroll, useTransform } from 'framer-motion'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'

function StarField(props) {
    const ref = useRef()
    const sphere = useMemo(() => random.inSphere(new Float32Array(15000), { radius: 1.5 }), [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 25
            ref.current.rotation.y -= delta / 35
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#00f3ff"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    )
}

function ReactiveGrid() {
    const { scrollYProgress } = useScroll()
    const gridRef = useRef()

    // Smooth scroll reaction
    const rotationX = useTransform(scrollYProgress, [0, 1], [Math.PI / 4, Math.PI / 6])
    const positionY = useTransform(scrollYProgress, [0, 1], [-1, -1.5])

    useFrame((state) => {
        if (gridRef.current) {
            gridRef.current.rotation.x = rotationX.get()
            gridRef.current.position.y = positionY.get()
            // Subtle breathing effect
            gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.02
        }
    })

    return (
        <gridHelper
            ref={gridRef}
            args={[20, 40, 0x00f3ff, 0x00f3ff]}
            position={[0, -1, -2]}
            rotation={[Math.PI / 4, 0, 0]}
        >
            <meshBasicMaterial
                transparent
                opacity={0.15}
                color="#00f3ff"
                wireframe
            />
        </gridHelper>
    )
}

const Background3D = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-[#020205]">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 1.5]} fov={75} />
                <color attach="background" args={['#020205']} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />

                <StarField />
                <ReactiveGrid />

                {/* Visual Depth Gradients */}
                <fog attach="fog" args={['#020205', 0, 5]} />
            </Canvas>

            {/* Global Overlay Gradients for Cinematic Feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205] pointer-events-none opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,243,255,0.05),transparent_70%)] pointer-events-none" />
        </div>
    )
}

export default Background3D
