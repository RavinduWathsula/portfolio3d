import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {

        const socials = [
            { icon: SiGithub, href: 'https://github.com/RavinduWathsula', label: 'GitHub' },
            { icon: SiLinkedin, href: 'https://www.linkedin.com/in/ravindu-wathsula-75265333a', label: 'LinkedIn' },
            { icon: FaTwitter, href: '#', label: 'Twitter' },
        ];

    return (
                <footer className="relative bg-linear-to-tr from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] py-16 px-4 overflow-hidden mt-24">
                    {/* Animated Neon Glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute -top-32 left-1/2 -translate-x-1/2 w-150 h-150 bg-neon-blue/10 rounded-full blur-3xl z-0 pointer-events-none"
                    />
                    <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
                        {/* Logo or Name */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-white to-neon-purple animate-gradient-flow animate-breathing bg-size-[200%_auto] tracking-tight text-center"
                        >
                            Ravindu Wathsula
                        </motion.h2>
                        {/* Socials */}
                        <div className="flex gap-6">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="group p-3 rounded-full border border-white/10 bg-[#181824]/60 hover:bg-neon-blue/20 transition-colors shadow-lg hover:shadow-neon-blue/30"
                                    >
                                        <Icon size={28} className="text-neon-blue group-hover:text-white transition-colors" />
                                    </a>
                                );
                            })}
                        </div>
                        {/* Tagline */}
                        <p className="text-sm md:text-base text-gray-400 font-mono text-center max-w-xl">
                            Building the future with <span className="text-neon-blue font-bold">creativity</span>, <span className="text-neon-purple font-bold">code</span>, and a touch of <span className="text-white font-bold">cyberpunk</span>.
                        </p>
                        {/* Copyright */}
                        <div className="text-xs text-gray-500 font-mono mt-4 text-center">
                            © {new Date().getFullYear()} Ravindu Wathsula. All rights reserved.
                        </div>
                    </div>
                    {/* Subtle animated lines */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                        className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-neon-blue via-neon-purple to-neon-blue opacity-20 blur-sm"
                    />
                </footer>
            );
        };

export default Footer;
