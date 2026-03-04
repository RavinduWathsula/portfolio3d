import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
    const navItems = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact']
    const [activeSection, setActiveSection] = useState('home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
        >
            <div className="glass px-4 md:px-6 py-3 rounded-full flex gap-4 md:gap-10 items-center border-white/20 shadow-2xl relative w-full max-w-fit md:w-auto">
                {/* Social Icons - Left Corner (Visible on MD+) */}
                <div className="hidden md:flex gap-4 pr-6 border-r border-white/10">
                    <motion.a
                        whileHover={{ scale: 1.2, color: 'var(--neon-blue)' }}
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors"
                    >
                        <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2, color: 'var(--neon-blue)' }}
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 transition-colors"
                    >
                        <FiLinkedin size={20} />
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white p-2 hover:text-neon-blue transition-colors"
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Nav Items (Desktop) */}
                <ul className="hidden md:flex gap-1 md:gap-4 items-center list-none m-0 p-0">
                    {navItems.map((item) => {
                        const id = item.toLowerCase()
                        const isActive = activeSection === id

                        return (
                            <li key={item} className="relative">
                                <a
                                    href={`#${id}`}
                                    className={`relative z-10 text-xs md:text-sm lg:text-base font-bold transition-colors uppercase tracking-widest no-underline px-4 py-2 block ${isActive ? 'text-black' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {item}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-highlight"
                                            className="absolute inset-0 bg-neon-blue rounded-full -z-10 shadow-[0_0_20px_var(--neon-blue)]"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                {/* Mobile Menu (Dropdown) */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 md:hidden glass rounded-3xl p-6 border-white/20 shadow-2xl flex flex-col gap-4 origin-top"
                        >
                            {navItems.map((item) => {
                                const id = item.toLowerCase()
                                const isActive = activeSection === id
                                return (
                                    <a
                                        key={item}
                                        href={`#${id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`text-sm font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-neon-blue' : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        {item}
                                    </a>
                                )
                            })}
                            <div className="flex gap-6 pt-4 border-t border-white/10">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                                    <FiGithub size={20} />
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                                    <FiLinkedin size={20} />
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default Navbar
