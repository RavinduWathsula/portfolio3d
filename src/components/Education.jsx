import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { GraduationCap, School, Cpu, Terminal, BookOpen, Binary } from 'lucide-react'

const EducationCard = ({ item, index, mouseX, mouseY }) => {
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

    const handleMouseMove = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        setRotateX((y - centerY) / 10)
        setRotateY(-(x - centerX) / 10)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{
                rotateX,
                rotateY,
                perspective: 1000,
                transformStyle: "preserve-3d"
            }}
            className="relative w-full max-w-[800px] mx-auto group"
        >
            {/* Multi-layered Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/5 to-neon-blue/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl group-hover:border-neon-blue/20 transition-all duration-700">
                {/* Internal Grid */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:30px_30px] pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start" style={{ transform: "translateZ(30px)" }}>
                    {/* Logo Section */}
                    <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-black border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_40px_rgba(0,243,255,0.25)] transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <item.icon className="text-neon-blue group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" size={48} />
                        </div>
                        <div className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-black border border-neon-blue/20 backdrop-blur-xl shadow-lg">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-neon-blue">Academic Hub</span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow space-y-6 text-center md:text-left">
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                                <span className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-[10px] font-black text-neon-blue uppercase tracking-widest leading-none">
                                    {item.year}
                                </span>
                                <div className="h-1 w-1 rounded-full bg-white/20 hidden sm:block" />
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">{item.location}</span>
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon-blue transition-all duration-500">
                                {item.title}
                            </h3>
                            <p className="text-lg font-bold text-neon-purple mt-1 uppercase tracking-widest">{item.institution}</p>
                        </div>

                        <p className="text-gray-400 font-medium leading-relaxed max-w-2xl text-sm sm:text-base border-l-2 border-white/5 pl-6 italic">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                            {item.tags.map((tag, tIndex) => (
                                <span key={tIndex} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-gray-300 group-hover:border-neon-blue/30 group-hover:bg-neon-blue/5 transition-all duration-500">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Education = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const education = [
        {
            title: "BSc (Hons) in Computer Science",
            institution: "General Sir John Kotelawala Defence University",
            year: "2024 - Present",
            location: "Ratmalana, Sri Lanka",
            description: "Advanced studies in computational intelligence, software engineering paradigms, and data-driven systems. Actively engaged in high-end cybersecurity and AI research cohorts.",
            icon: GraduationCap,
            tags: ["Cybersecurity", "Artificial Intelligence", "System Design"]
        },
        {
            title: "Secondary & Higher Secondary Education",
            institution: "Mahinda College",
            year: "2009 - 2022",
            location: "Galle, Sri Lanka",
            description: "Distinguished academic journey at one of Sri Lanka's leading institutions. Focused on Physical Sciences (Mathematics stream) with excellence in innovation and leadership.",
            icon: School,
            tags: ["Physical Science", "Mathematics", "Physical Education"]
        }
    ]

    return (
        <section id="education" ref={containerRef} className="py-20 md:py-40 bg-[#020205] relative overflow-hidden flex items-center justify-center">
            {/* 3D Animated Background Grid - Synced with Theme */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <motion.div
                    style={{
                        rotateX: useTransform(scrollYProgress, [0, 1], [20, -20]),
                        rotateY: useTransform(scrollYProgress, [0, 1], [-10, 10]),
                        translateZ: "-150px"
                    }}
                    className="absolute inset-[-20%] origin-center"
                >
                    <div className="w-full h-full bg-[linear-gradient(to_right,rgba(188,19,254,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(188,19,254,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
                </motion.div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="flex flex-col items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center space-y-4"
                    >
                        <span className="text-xs font-black uppercase tracking-[1em] text-neon-purple animate-pulse">Academic Evolution</span>
                        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white leading-none tracking-tighter">
                            EDUCATIONAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple italic animate-gradient-flow bg-[length:200%_auto]">TIMELINE</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Central Glowing Connection Path */}
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/5 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ scaleY: pathLength, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue shadow-[0_0_20px_#bc13fe]"
                        />
                    </div>

                    <div className="space-y-32 relative">
                        {education.map((item, index) => (
                            <EducationCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* Final Decorative Node */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center mt-32"
                >
                    <div className="relative">
                        <div className="p-5 rounded-full bg-black border border-white/10 shadow-[0_0_50px_rgba(188,19,254,0.2)]">
                            <Binary className="text-neon-purple animate-pulse" size={24} />
                        </div>
                        <div className="absolute -inset-4 border border-neon-purple/20 rounded-full animate-ping opacity-20" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
