import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import {
    SiJavascript, SiReact, SiTailwindcss, SiThreedotjs,
    SiPython, SiNodedotjs, SiTypescript, SiFramer,
    SiVite, SiDocker, SiGit, SiPostgresql,
    SiCanva, SiAdobephotoshop, SiAdobepremierepro
} from 'react-icons/si'
import { Cpu, Globe, Database, Layers, Palette, Scissors } from 'lucide-react'

const SkillPod = ({ name, icon: Icon, color, level, index }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            onViewportEnter={() => {
                animate(count, level, { duration: 1.5, delay: index * 0.05, ease: "easeOut" });
            }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative"
        >
            {/* Ambient hover glow behind pod */}
            <div className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" style={{ backgroundColor: color }} />

            <div className="relative p-5 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors flex flex-col gap-4 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 group-hover:opacity-10 pointer-events-none" style={{ backgroundColor: color }} />

                <div className="flex items-center gap-5 w-full relative z-10">
                    {/* Creative Logo Container */}
                    <div className="relative w-14 h-14 rounded-xl flex items-center justify-center p-3 transition-transform duration-500 group-hover:scale-110 shrink-0">
                        {/* Glassy plate */}
                        <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.08] rounded-xl" />

                        {/* Colored glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl blur-md" style={{ backgroundColor: color }} />

                        {/* Colored border on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border rounded-xl" style={{ borderColor: `${color}80` }} />

                        <div className="relative z-10 transition-all duration-500" style={{ color: color, filter: `drop-shadow(0 0 8px ${color}60)` }}>
                            <Icon size="100%" />
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center gap-1.5">
                        <div className="flex justify-between items-end w-full">
                            <h4 className="text-sm font-black text-gray-300 group-hover:text-white uppercase tracking-widest">{name}</h4>

                            {/* Animated Percentage Badge */}
                            <div className="flex items-baseline gap-0.5">
                                <motion.span className="text-base font-black font-mono leading-none transition-colors duration-500" style={{ color: color }}>
                                    {rounded}
                                </motion.span>
                                <span className="text-[10px] font-black uppercase tracking-widest leading-none transition-colors duration-500" style={{ color: color }}>%</span>
                            </div>
                        </div>

                        {/* Premium Progress Bar */}
                        <div className="relative w-full h-[5px] bg-black/80 rounded-full overflow-hidden border border-white/5 mt-1">
                            {/* Base track */}
                            <div className="absolute inset-0 bg-white/[0.02]" />

                            {/* Animated fill */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${level}%` }}
                                viewport={{ once: false }}
                                transition={{ duration: 1.5, delay: index * 0.05, ease: "easeOut" }}
                                className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
                                style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}80` }}
                            >
                                {/* Sheen inside progress bar */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const CategorySection = ({ title, icon: Icon, skills, categoryIndex }) => (
    <div className="space-y-8">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
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
                { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
                { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 98 },
                { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 90 },
                { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 95 },
                { name: 'Three.js', icon: SiThreedotjs, color: '#FFFFFF', level: 85 },
                { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', level: 92 },
            ]
        },
        {
            title: "Backend Core",
            icon: Database,
            skills: [
                { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 90 },
                { name: 'Python', icon: SiPython, color: '#3776AB', level: 88 },
                { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 85 },
                { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 80 },
            ]
        },
        {
            title: "Systems & Architecture",
            icon: Layers,
            skills: [
                { name: 'Vite', icon: SiVite, color: '#646CFF', level: 92 },
                { name: 'Git', icon: SiGit, color: '#F05032', level: 95 },
                { name: 'Clean Architecture', icon: Cpu, color: '#FF9900', level: 88 },
                { name: 'DevOps', icon: Layers, color: '#00C7B7', level: 82 },
            ]
        },
        {
            title: "Creative & Media",
            icon: Palette,
            skills: [
                { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF', level: 90 },
                { name: 'Canva', icon: SiCanva, color: '#00C4CC', level: 95 },
                { name: 'CapCut', icon: Scissors, color: '#FFFFFF', level: 85 },
                { name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#9999FF', level: 80 }
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
                        viewport={{ once: false }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-neon-blue" />
                        <span className="text-xs font-black uppercase tracking-[1em] text-neon-blue">Tech Stack</span>
                    </motion.div>
                    <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase overflow-visible py-4">
                        TECHNICAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple italic pr-4">CAPABILITIES&nbsp;</span>
                    </h2>
                </div>

                <div className="flex flex-col gap-20 lg:gap-32 w-full">
                    {categories.map((cat, idx) => (
                        <CategorySection key={cat.title} {...cat} categoryIndex={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
