import { motion } from 'framer-motion'
import {
    SiGithub, SiLinkedin,
    SiReact, SiTailwindcss, SiFramer
} from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="relative py-12 overflow-hidden border-t border-white/5 bg-transparent">
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,243,255,0.03)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Brand / Logo Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="flex flex-col items-center md:items-start gap-2"
                >
                    <div className="text-2xl font-black text-white tracking-tighter">
                        RAVINDU<span className="text-neon-blue">.</span>W
                    </div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                        Digital Experience Engineer
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4"
                >
                    {[
                        { icon: SiGithub, color: '#ffffff', href: '#' },
                        { icon: SiLinkedin, color: '#0077b5', href: '#' },
                        { icon: FaTwitter, color: '#1da1f2', href: '#' }
                    ].map((Social, index) => (
                        <motion.a
                            key={index}
                            href={Social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3, scale: 1.1 }}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:border-neon-blue/40 transition-colors group relative"
                        >
                            <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: Social.color }} />
                            <Social.icon size={18} className="relative z-10 group-hover:text-white transition-colors" style={{ color: "currentColor" }} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Built With Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center md:items-end gap-2"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                        Engineered With
                    </span>
                    <div className="flex items-center gap-3">
                        <SiReact className="text-[#61DAFB] opacity-70 hover:opacity-100 transition-opacity" size={16} />
                        <SiTailwindcss className="text-[#06B6D4] opacity-70 hover:opacity-100 transition-opacity" size={16} />
                        <SiFramer className="text-white opacity-70 hover:opacity-100 transition-opacity" size={16} />
                    </div>
                </motion.div>
            </div>

            {/* Copyright Divider */}
            <div className="max-w-7xl mx-auto px-6 mt-12 relative z-10">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono font-black uppercase tracking-widest text-white/20"
                >
                    <p>© {new Date().getFullYear()} Ravindu Wathsula. All Systems Operational.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-neon-blue transition-colors">Privacy</a>
                        <a href="#" className="hover:text-neon-blue transition-colors">Terms</a>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
