import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, tags }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
        >
            <div className="h-48 bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                <div className="w-full h-full flex items-center justify-center text-4xl opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    🚀
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full text-gray-400 group-hover:border-neon-blue/50 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

const Projects = () => {
    const projects = [
        {
            title: "Interactive 3D Dashboard",
            description: "A high-performance monitoring tool with real-time data visualization using Three.js and WebGL.",
            tags: ["React", "Three.js", "GSAP"],
        },
        {
            title: "AI E-commerce Platform",
            description: "Next-gen shopping experience with personalized recommendations and headless architecture.",
            tags: ["Next.js", "Python", "Tailwind"],
        },
        {
            title: "Blockchain Supply Chain",
            description: "Decentralized tracking system for industrial assets with smart contract integration.",
            tags: ["Solidity", "React", "Node.js"],
        },
        {
            title: "Cloud Infrastructure Manager",
            description: "Automated provisioning and monitoring tool for large-scale enterprise deployments.",
            tags: ["Go", "AWS", "Terraform"],
        }
    ]

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-container px-4"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl font-bold uppercase tracking-tighter mb-4">
                            Featured <span className="text-neon-blue neon-text">Works</span>
                        </h2>
                        <p className="text-gray-400 max-w-md">
                            A selection of industrial-grade projects showcasing technical
                            problem-solving and creative engineering.
                        </p>
                    </div>
                    <button className="text-neon-blue font-mono uppercase tracking-widest border-b border-neon-blue pb-1 hover:text-white transition-colors">
                        View All Experience
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
