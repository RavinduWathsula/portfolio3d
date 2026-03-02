import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Navbar = () => {
    const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact']
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        navItems.forEach((item) => {
            const element = document.getElementById(item.toLowerCase())
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
        >
            <div className="glass px-4 md:px-6 py-2 rounded-full flex gap-4 md:gap-8 items-center border-white/20 shadow-2xl relative">
                {/* Social Icons - Left Corner */}
                <div className="flex gap-3 md:gap-4 pr-4 md:pr-6 border-r border-white/10">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                        <FiGithub size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue transition-colors"
                    >
                        <FiLinkedin size={18} />
                    </a>
                </div>

                {/* Nav Items */}
                <ul className="flex gap-2 md:gap-4 items-center list-none">
                    {navItems.map((item) => {
                        const id = item.toLowerCase()
                        const isActive = activeSection === id

                        return (
                            <li key={item} className="relative">
                                <a
                                    href={`#${id}`}
                                    className={`relative z-10 text-[10px] md:text-xs font-bold transition-colors uppercase tracking-widest no-underline px-3 py-1.5 block ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {item}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-highlight"
                                            className="absolute inset-0 bg-neon-blue rounded-full -z-10 shadow-[0_0_15px_var(--neon-blue)]"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar
