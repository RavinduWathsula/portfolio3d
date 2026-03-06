import React from 'react'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { ExternalLink, Github, Code2, Monitor, ArrowUpRight, Calendar as CalendarIcon } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

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

                    {/* Media Base */}
                    <div className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-110">
                        {project.video ? (
                            <video
                                src={project.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                            />
                        ) : (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
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
    const [githubYear, setGithubYear] = useState(new Date().getFullYear())

    const projects = [
        {
            title: "Smart Shopping Cart",
            description: "An intelligent e-commerce solution developed as a group project. Features real-time cart management, secure checkout, and dynamic inventory synchronization.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            image: "/assets/projects/shopping_cart.png"
        },
        {
            title: "Online Vehicle Rental System",
            description: "A comprehensive web application for managing vehicle rentals, featuring real-time availability tracking, user dashboards, and secure booking processing.",
            tags: ["React", "Tailwind CSS", "Firebase", "Stripe"],
            image: "/assets/projects/vehicle_rental.png"
        },
        {
            title: "Interactive 3D Portfolio",
            description: "This very website! A high-performance, immersive personal portfolio featuring 3D elements, smooth scroll animations, and a cyberpunk neon aesthetic.",
            tags: ["React", "Three.js", "Vite", "Framer Motion"],
            video: "/assets/projects/portfolio.mp4"
        },
        {
            title: "Vehicle Parts Finder [Ongoing]",
            description: "An ongoing project developing a specialized search engine and marketplace for locating, comparing, and procuring specific automotive components globally.",
            tags: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
            image: "/assets/projects/vehicle_parts.png"
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
                        <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none overflow-visible py-2">
                            FEATURED <br /> <span className="text-neon-blue neon-text italic pr-4">ENGINEERING&nbsp;</span>
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

                {/* GitHub Contribution Calendar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="mt-24 p-8 sm:p-12 bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden group shadow-[0_10px_30px_-10px_rgba(0,243,255,0.05)] hover:border-neon-blue/40 transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="flex items-center gap-4 mb-10 w-full justify-center relative z-10">
                        <Github className="text-white group-hover:text-neon-blue transition-colors duration-500" size={36} />
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase">
                            Open Source <span className="text-neon-blue italic pr-2">Progress</span>
                        </h3>
                    </div>

                    <div className="w-full overflow-visible flex flex-col items-center justify-center relative z-10 gap-6">
                        {/* Year Selector UI */}
                        <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 p-1.5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md">
                            <CalendarIcon size={16} className="text-gray-500 mx-2" />
                            {[2023, 2024, 2025, 2026].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setGithubYear(year)}
                                    className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${githubYear === year
                                        ? 'bg-neon-blue text-black shadow-[0_0_15px_rgba(0,243,255,0.4)]'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>

                        <div className="p-4 sm:p-6 rounded-2xl bg-black/60 border border-white/5 w-full overflow-x-auto flex justify-center custom-scrollbar relative">
                            <div className="min-w-max">
                                <GitHubCalendar
                                    username="RavinduWathsula"
                                    year={githubYear}
                                    colorScheme="dark"
                                    blockSize={14}
                                    blockMargin={6}
                                    fontSize={12}
                                    renderBlock={(block, activity) =>
                                        React.cloneElement(block, {
                                            'data-tooltip-id': 'github-tooltip',
                                            'data-tooltip-content': `${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${activity.date}`,
                                        })
                                    }
                                    theme={{
                                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                                    }}
                                />
                                <Tooltip id="github-tooltip" style={{ backgroundColor: '#1a1a2e', color: '#00f3ff', borderRadius: '10px', fontSize: '12px', fontWeight: 'bold', border: '1px solid rgba(0,243,255,0.2)' }} />
                            </div>
                        </div>
                    </div>
                </motion.div>

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
