import { motion } from 'framer-motion'
import {
    SiJavascript, SiReact, SiTailwindcss, SiThreedotjs,
    SiPython, SiNodedotjs, SiTypescript, SiFramer,
    SiVite, SiDocker, SiGit, SiPostgresql
} from 'react-icons/si'
import { Cpu, Globe, Database, Layers } from 'lucide-react'

const SkillPod = ({ name, icon: Icon, color, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group relative"
    >
        <div className="absolute -inset-0.5 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative glass p-4 rounded-2xl border border-white/5 group-hover:border-neon-blue/30 transition-colors flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center p-2.5 text-gray-400 group-hover:text-neon-blue transition-colors group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <Icon size="100%" />
            </div>
            <div>
                <h4 className="text-sm font-black text-gray-300 group-hover:text-white uppercase tracking-widest">{name}</h4>
                <div className="flex gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className={`h-1 w-3 rounded-full ${i <= 4 ? 'bg-neon-blue/40 group-hover:bg-neon-blue' : 'bg-white/5'} transition-colors`}
                        />
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
)

const CategorySection = ({ title, icon: Icon, skills, categoryIndex }) => (
    <div className="space-y-8">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
        >
            <div className="p-3 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 text-neon-blue">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white">
                {title}
            </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, idx) => (
                <SkillPod key={skill.name} {...skill} index={idx + (categoryIndex * 4)} />
            ))}
        </div>
    </div>
)

const Skills = () => {
    const categories = [
        {
            title: "Frontend Forge",
            icon: Globe,
            skills: [
                { name: 'React', icon: SiReact },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Three.js', icon: SiThreedotjs },
                { name: 'Framer Motion', icon: SiFramer },
            ]
        },
        {
            title: "Backend Core",
            icon: Database,
            skills: [
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Python', icon: SiPython },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'Docker', icon: SiDocker },
            ]
        },
        {
            title: "Systems & Architecture",
            icon: Layers,
            skills: [
                { name: 'Vite', icon: SiVite },
                { name: 'Git', icon: SiGit },
                { name: 'Clean Architecture', icon: Cpu },
                { name: 'DevOps', icon: Layers },
            ]
        }
    ]

    return (
        <section id="skills" className="py-24 lg:py-40 bg-transparent flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="mb-24 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-neon-blue" />
                        <span className="text-xs font-black uppercase tracking-[1em] text-neon-blue">Tech Stack</span>
                    </motion.div>
                    <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none">
                        TECHNICAL <br /> <span className="text-neon-purple italic">CAPABILITIES</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {categories.map((cat, idx) => (
                        <CategorySection key={cat.title} {...cat} categoryIndex={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
