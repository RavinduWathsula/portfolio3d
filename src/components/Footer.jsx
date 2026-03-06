import { motion } from 'framer-motion'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { useRef, useState } from 'react'

const Footer = () => {
    const socialLinks = [
        { icon: SiGithub, href: 'https://github.com/RavinduWathsula' },
        { icon: SiLinkedin, href: 'https://www.linkedin.com/in/ravindu-wathsula-75265333a' },
        { icon: FaTwitter, href: '#' },
    ]

    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

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
        <footer className="relative bg-[#020205] pt-24 pb-12 overflow-hidden">
            {/* Internal Digital Particles for Footer Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,243,255,0.05)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,243,255,0.05)_0%,transparent_40%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Call to Action Section */}
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={handleMouseLeave}
                    whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    style={{
                        rotateX,
                        rotateY,
                        perspective: 1000,
                        transformStyle: "preserve-3d"
                    }}
                    className="relative max-w-4xl mx-auto group cursor-pointer text-center mb-24"
                >
                    {/* Interactive Glow Pulse */}
                    <motion.div
                        animate={isHovered ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
                        className="absolute -inset-4 bg-gradient-to-r from-neon-blue/30 to-neon-purple/30 blur-2xl rounded-[3rem] transition-opacity duration-1000"
                    />
                    {/* Inner card content wrapper */}
                    <div className="relative bg-[#ffffff03] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl group-hover:border-neon-blue/40 transition-all duration-500">
                        {/* Internal Digital Particles */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(0,243,255,0.05)_1px,transparent_0)] bg-[size:16px_16px] pointer-events-none" />

                        {/* Existing CTA Content */}
                        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-6">
                                Have a project in mind?
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                                I'm currently available for freelance work and open to discussing new projects. Let's build something amazing together.
                            </p>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-black rounded-full transition-all hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] no-underline text-base tracking-tighter"
                            >
                                <span>GET IN TOUCH</span>
                                <ArrowRight size={20} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <div className="text-sm font-mono text-gray-500 text-center sm:text-left">
                        © {new Date().getFullYear()} Ravindu Wathsula. All rights reserved.
                    </div>
                    <div className="flex items-center gap-5">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -4, scale: 1.1, color: '#00f3ff' }}
                                className="text-gray-400 transition-colors"
                            >
                                <social.icon size={22} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer