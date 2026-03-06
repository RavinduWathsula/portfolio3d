import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ExternalLink, Github, Code2, Monitor, ArrowUpRight } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
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
        setRotateX((y - centerY) / 20)
        setRotateY(-(x - centerX) / 20)
    }

    const handleMouseLeave = () => {
        setRotateX(0)
        setRotateY(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="perspective-1000"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="group relative h-full bg-[#ffffff02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-neon-blue/40 transition-all duration-500 cursor-pointer shadow-2xl"
            >
                {/* Visual Preview Layer */}
                <div className="relative h-64 overflow-hidden border-b border-white/5">
                    <div className="absolute inset-0 bg-[#0a0a0f]" />
                    {/* Futuristic Grid Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Project Floating Tech ID */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 transparent-glass rounded-full border border-white/10 z-20">
                        <Code2 size={12} className="text-neon-blue" />
                        <span className="text-[9px] font-black text-white/40 tracking-widest uppercase">P-{100 + index}</span>
                    </div>

                    {/* Internal Interactive Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100 z-30">
                        <div className="flex gap-4">
                            <button className="p-4 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-black transition-all">
                                <Monitor size={20} />
                            </button>
                            <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all">
                                <Github size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Icon Base */}
                    <div className="w-full h-full flex items-center justify-center opacity-20 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110">
                        <span className="text-8xl">{project.emoji}</span>
                    </div>
                </div>

                <div className="p-8 space-y-6" style={{ transform: "translateZ(40px)" }}>
                    <div className="space-y-3">
                        <div className="flex justify-between items-start">
                            <h3 className="text-2xl font-black text-white tracking-tighter group-hover:text-neon-blue transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight className="text-white/20 group-hover:text-neon-blue transition-colors" size={20} />
                        </div>
                        <p className="text-gray-450 text-sm font-medium leading-relaxed line-clamp-2">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-gray-500 group-hover:text-neon-blue group-hover:border-neon-blue/20 transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

const Projects = () => {
    const projects = [
        {
            title: "Interactive 3D Dashboard",
            description: "A high-performance monitoring tool with real-time data visualization using Three.js and WebGL. Features neural-mesh feedback loops.",
            tags: ["React", "Three.js", "GSAP", "Socket.io"],
            emoji: "🛰️"
        },
        {
            title: "AI E-commerce Platform",
            description: "Next-gen shopping experience with personalized recommendations using TensorFlow.js and headless commerce architecture.",
            tags: ["Next.js", "Python", "Tailwind", "AI"],
            emoji: "🛒"
        },
        {
            title: "Blockchain Supply Chain",
            description: "Decentralized tracking system for industrial assets with smart contract integration and real-time ledger auditing.",
            tags: ["Solidity", "React", "Node.js", "Web3"],
            emoji: "⛓️"
        },
        {
            title: "Cloud Infrastructure Manager",
            description: "Automated provisioning and monitoring tool for large-scale enterprise deployments with real-time scaling alerts.",
            tags: ["Go", "AWS", "Terraform", "Docker"],
            emoji: "☁️"
        }
    ]

    return (
        <section id="projects" className="py-24 lg:py-40 bg-transparent flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-[1px] bg-neon-blue" />
                            <span className="text-xs font-black uppercase tracking-[1em] text-neon-blue">Selected Works</span>
                        </motion.div>
                        <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                            FEATURED <br /> <span className="text-neon-blue neon-text italic">ENGINEERING</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm font-medium text-lg leading-relaxed border-l-2 border-neon-blue/20 pl-8">
                        Architecting robust digital solutions with specialized focus on system performance and aesthetic precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <button className="group relative px-10 py-5 bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-neon-blue/50 transition-all">
                        <span className="relative z-10 font-black text-sm uppercase tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">Explore All Deployments</span>
                        <div className="absolute inset-0 bg-neon-blue/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
