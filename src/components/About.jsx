import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion'
import { GraduationCap, Award, Sparkles, Target, Zap, Waves, Cpu, Code2, Binary, Database } from 'lucide-react'
import { useRef, useEffect } from 'react'

const LineReveal = ({ text, delay = 0 }) => {
    return (
        <div className="overflow-hidden">
            <motion.p
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
                viewport={{ once: false }}
                className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium"
            >
                {text}
            </motion.p>
        </div>
    )
}

const DepthParticle = ({ delay = 0, z = 0 }) => {
    const { scrollYProgress } = useScroll()
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -500 * (z + 1)])

    return (
        <motion.div
            animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
            }}
            transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: delay
            }}
            className="absolute w-1 h-1 bg-white rounded-full pointer-events-none"
            style={{
                y: yParallax,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: `blur(${z * 2}px)`
            }}
        />
    )
}

const StatItem = ({ icon: Icon, value, label, color, glowColor }) => (
    <div className="flex items-center gap-4 sm:gap-5 group cursor-default">
        <div className="relative flex-shrink-0">
            {/* Breathing Glow Background */}
            <div className={`absolute inset-0 bg-${glowColor === 'neon-blue' ? 'color-neon-blue' : glowColor === 'neon-purple' ? 'color-neon-purple' : 'amber-400'}/30 blur-2xl rounded-full animate-glow-pulse`} />

            <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-${glowColor}/40 transition-all duration-700 shadow-2xl relative z-10 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${glowColor}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <Icon className={`text-${color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative z-10`} size={20} />
            </div>
        </div>
        <div className="flex flex-col">
            <span className={`text-2xl sm:text-4xl font-black text-white leading-none tracking-tighter group-hover:text-${color} transition-colors duration-500`}>{value}</span>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mt-1 sm:mt-2">{label}</span>
        </div>
    </div>
)

const HolographicCard = ({ rotateX, rotateY }) => {
    return (
        <motion.div
            style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" }}
            className="relative group p-1 w-full max-w-[440px]"
        >
            {/* Multi-layered Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-blue/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-10 bg-neon-blue/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 sm:p-10 overflow-hidden h-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                {/* Modern Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px] pointer-events-none" />

                {/* Advanced Shimmer */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent -translate-x-full group-hover:animate-shimmer transition-transform"
                    style={{ skewX: -20 }}
                />

                <div className="relative z-10 space-y-8" style={{ transform: "translateZ(50px)" }}>
                    <div className="flex justify-between items-start">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            className="p-4 rounded-2xl bg-black border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:shadow-neon-purple/20 transition-all duration-700"
                        >
                            <GraduationCap className="text-neon-purple" size={32} />
                        </motion.div>
                        <Cpu className="text-white/5 group-hover:text-white/20 transition-colors duration-700 animate-spin-slow" size={80} strokeWidth={0.5} />
                    </div>

                    <div className="space-y-4">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-neon-purple flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-ping" />
                            Academic Profile
                        </span>
                        <h4 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tighter">
                            Computer Science <br />
                            <span className="text-neon-blue inline-block mt-1">Undergraduate</span>
                        </h4>
                        <div className="space-y-1">
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-relaxed">
                                General Sir John Kotelawala
                            </p>
                            <p className="text-[10px] text-white/60 font-black uppercase tracking-widest leading-relaxed">
                                Defence University (KDU)
                            </p>
                        </div>
                    </div>

                    <div className="pt-6 flex items-center justify-between border-t border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-status-green shadow-[0_0_10px_#10b981] animate-pulse" />
                            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">System Ready</span>
                        </div>
                        <Binary className="text-white/10" size={16} />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const About = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 })

    const rotateX = useTransform(smoothMouseY, [-400, 400], [10, -10])
    const rotateY = useTransform(smoothMouseX, [-400, 400], [-10, 10])

    const handleMouseMove = (e) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        mouseX.set(x)
        mouseY.set(y)
    }

    const gridRotateX = useTransform(smoothMouseY, [-500, 500], [45, 35])
    const gridRotateY = useTransform(smoothMouseX, [-500, 500], [-5, 5])
    const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

    return (
        <section
            id="about"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="min-h-screen py-20 md:py-32 lg:py-64 relative flex items-center justify-center overflow-hidden bg-transparent selection:bg-neon-blue/30"
            style={{ perspective: "1500px" }}
        >
            {/* Minimal Overlay for Contrast */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <motion.div style={{ opacity: opacityFade }} className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="flex flex-col space-y-24 sm:space-y-32 lg:space-y-40">

                    {/* 2. Fluid 3D Heading */}
                    <motion.div
                        style={{ rotateX, rotateY }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-3xl mb-12"
                        >
                            <Zap className="text-neon-blue animate-pulse" size={14} />
                            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-neon-blue">Advanced Digital Ethos</span>
                        </motion.div>

                        <h2 className="text-[clamp(3rem,10vw,9rem)] font-black text-white leading-[0.8] tracking-tight drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)] pb-4 pr-6 overflow-visible">
                            ABOUT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple italic animate-gradient-flow animate-breathing bg-[length:200%_auto] inline-block py-2 pr-4">VISION&nbsp;</span>
                        </h2>
                    </motion.div>

                    {/* 3. Bio & Holographic Card Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">
                        <div className="lg:col-span-12 xl:col-span-7 space-y-12 sm:space-y-16">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="space-y-6"
                            >
                                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                                    Architecting the next <br /> generation of <span className="text-neon-blue font-italic">elite software</span> solutions.
                                </h3>
                                <div className="h-1.5 w-24 sm:w-32 bg-gradient-to-r from-neon-blue via-neon-purple to-transparent rounded-full" />
                            </motion.div>

                            <div className="space-y-8 max-w-2xl">
                                <LineReveal delay={0.2} text="I’m a passionate undergraduate software developer from KDU specializing in architectural precision and modern engineering." />
                                <LineReveal delay={0.4} text="I focus on building robust, high-performance systems that bridge complex logic with intuitive digital experiences." />
                                <LineReveal delay={0.6} text="From designing secure backend structures to crafting cinematic frontend interactions, I deliver elite software products." />
                                <LineReveal delay={0.8} text="I am constantly learning and evolving my craft to solve real-world problems with scalable and innovative solutions." />
                            </div>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-5 flex justify-center xl:justify-end">
                            <HolographicCard rotateX={rotateX} rotateY={rotateY} />
                        </div>
                    </div>

                    {/* 4. Vibrant Stats Row - V11 COLORS */}
                    <div className="pt-32 border-t border-white/5">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-4"
                        >
                            <StatItem
                                icon={Award}
                                value="2+"
                                label="Years Exp"
                                color="neon-blue"
                                glowColor="neon-blue"
                            />
                            <StatItem
                                icon={Sparkles}
                                value="3+"
                                label="Completed"
                                color="neon-purple"
                                glowColor="neon-purple"
                            />
                            <StatItem
                                icon={Target}
                                value="4+"
                                label="Certificates"
                                color="amber-400"
                                glowColor="amber-400"
                            />

                            <div className="flex items-center gap-6 group cursor-pointer lg:justify-end">
                                <div className="text-right">
                                    <div className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-[0.4em] mb-1">Elite Grade</div>
                                    <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Synergy Active</div>
                                </div>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/5 transition-all duration-500 flex-shrink-0">
                                    <Waves className="text-gray-500 group-hover:text-neon-blue group-hover:rotate-180 transition-all duration-700 font-black" size={20} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020205] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020205] to-transparent pointer-events-none" />
        </section>
    )
}

export default About
