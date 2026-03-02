import { motion } from 'framer-motion'
import { SiJavascript, SiReact, SiTailwindcss, SiThreedotjs, SiPython, SiNodedotjs } from 'react-icons/si'

const SkillBar = ({ name, percentage, icon: Icon }) => {
    return (
        <div className="w-full mb-8">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                    <Icon className="text-neon-blue text-xl" />
                    <span className="font-mono text-sm uppercase tracking-wider">{name}</span>
                </div>
                <span className="text-neon-blue font-mono">{percentage}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                />
            </div>
        </div>
    )
}

const Skills = () => {
    const skills = [
        { name: 'JavaScript', percentage: 90, icon: SiJavascript },
        { name: 'React', percentage: 85, icon: SiReact },
        { name: 'Node.js', percentage: 80, icon: SiNodedotjs },
        { name: 'Three.js', percentage: 75, icon: SiThreedotjs },
        { name: 'Tailwind CSS', percentage: 95, icon: SiTailwindcss },
        { name: 'Python', percentage: 70, icon: SiPython },
    ]

    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-container px-4"
            >
                <h2 className="text-4xl font-bold mb-12 text-center uppercase tracking-[0.2em]">
                    Technical <span className="text-neon-blue">Skills</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    {skills.map((skill) => (
                        <SkillBar key={skill.name} {...skill} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Skills
