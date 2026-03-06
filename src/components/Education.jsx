import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { GraduationCap, School, Cpu, Binary } from 'lucide-react'

// Card component handles its own internal tilt, background is global

const EducationCard = ({ item, index }) => {
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [imageError, setImageError] = useState(false)
    const isEven = index % 2 === 0

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
        setIsHovered(false)
    }

    return (
        <div className={`flex flex-col md:flex-row w-full items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative gap-12 md:gap-0`}>
            {/* Card Half */}
            <div className="w-full md:w-1/2 flex justify-center md:px-8 lg:px-14 relative">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        rotateX,
                        rotateY,
                        perspective: 1000,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative w-full max-w-2xl group cursor-pointer"
                >
                    {/* Interactive Glow Pulse on Click/Hover */}
                    <motion.div
                        animate={isHovered ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
                        className="absolute -inset-4 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 blur-2xl rounded-[3rem] transition-opacity duration-1000"
                    />

                    <div className="relative bg-[#ffffff03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl group-hover:border-neon-blue/40 transition-all duration-500">
                        {/* Internal Digital Particles */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,243,255,0.05)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-8" style={{ transform: "translateZ(50px)" }}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-black/40 border border-white/10 flex items-center justify-center p-4 relative flex-shrink-0 overflow-hidden group-hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] transition-all duration-700">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item.logo && !imageError ? (
                                        <img
                                            src={item.logo}
                                            alt={item.institution}
                                            onError={() => setImageError(true)}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <item.icon className="text-neon-blue group-hover:animate-pulse" size={40} />
                                    )}
                                </div>
                                <div className="text-right flex flex-col items-end flex-shrink-0">
                                    <span className="px-4 py-1.5 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-[10px] font-black text-neon-blue uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(0,243,255,0.1)] whitespace-nowrap w-fit">
                                        {item.location}
                                    </span>
                                    <div className="text-sm font-black text-white/40 mt-3 tracking-[0.4em] whitespace-nowrap">{item.year}</div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <h3 className="text-[clamp(1.5rem,5vw,2.5rem)] font-black text-white leading-[1.1] tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-white transition-all duration-500">
                                    {item.title}
                                </h3>
                                <p className="text-[11px] font-black text-neon-purple uppercase tracking-[0.4em] mb-2">{item.institution}</p>
                                <p className="text-gray-400 text-base font-medium leading-relaxed italic border-l-2 border-neon-blue/20 pl-6">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-4">
                                {item.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-gray-400 group-hover:text-white group-hover:bg-neon-blue/10 group-hover:border-neon-blue/20 transition-all">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Central Node Indicator */}
            <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-black border-2 border-neon-blue z-20 hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neon-blue shadow-[0_0_10px_#00f3ff]" />
                <div className="absolute inset-0 rounded-full bg-neon-blue/30 animate-ping" />
            </div>

            {/* Empty Half (for desktop spacing) */}
            <div className="hidden md:block w-1/2" />
        </div>
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
            title: "Secondary & Higher Secondary Education",
            institution: "Mahinda College",
            year: "2009 - 2022",
            location: "Galle, Sri Lanka",
            description: "Developed a strong foundation in physical sciences and leadership at one of Sri Lanka's most prestigious schools. Excelled in mathematics and physics streams.",
            icon: School,
            logo: "/mahinda_logo.png",
            tags: ["Physical Science", "Mathematics", "Leadership"]
        },
        {
            title: "BSc (Hons) in Computer Science",
            institution: "General Sir John Kotelawala Defence University",
            year: "2024 - Present",
            location: "Ratmalana, Sri Lanka",
            description: "Pursuing rigorous academic excellence with a focus on advanced software paradigms, cybersecurity research, and AI-driven innovations.",
            icon: GraduationCap,
            logo: "/kdu_logo.png",
            tags: ["AI & Machine Learning", "Cybersecurity", "Engineering"]
        }
    ]

    return (
        <section id="education" ref={containerRef} className="py-20 md:py-40 bg-transparent relative overflow-hidden flex items-center justify-center">
            {/* Minimal Overlay for Depth Synergy */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(188,19,254,0.03)_0%,transparent_80%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
                <div className="flex flex-col items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center space-y-6"
                    >
                        <span className="text-xs font-black uppercase tracking-[1.2em] text-neon-blue animate-pulse">Lifetime Education</span>
                        <h2 className="text-5xl sm:text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter overflow-visible pb-4">
                            ACADEMIC <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple italic animate-gradient-flow bg-[length:200%_auto] py-4 pr-4 inline-block">JOURNEY&nbsp;</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Central Glowing Connection Path */}
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/5 -translate-x-1/2 hidden md:block">
                        <motion.div
                            style={{ scaleY: pathLength, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue shadow-[0_0_30px_#00f3ff]"
                        />
                    </div>

                    <div className="space-y-24 md:space-y-32 relative">
                        {education.map((item, index) => (
                            <EducationCard key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>

                {/* Final Interactive Node */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex justify-center mt-32"
                >
                    <div className="relative group cursor-pointer">
                        <div className="p-6 rounded-full bg-black border border-white/10 shadow-[0_0_60px_rgba(0,243,255,0.15)] group-hover:border-neon-blue/50 transition-all duration-500">
                            <Binary className="text-neon-blue animate-pulse group-hover:rotate-180 transition-transform duration-700" size={28} />
                        </div>
                        <div className="absolute -inset-6 border border-neon-blue/20 rounded-full animate-ping opacity-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
