import { motion } from 'framer-motion'
import { Download, ArrowRight, Mail } from 'lucide-react'

const Hero = () => {
    const buttonVariants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 }
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="max-w-container px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
                        {/* Creative Frames */}
                        <div className="absolute inset-0 bg-neon-blue rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="absolute inset-0 border-2 border-white/10 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 delay-75" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-white/20">
                            <img
                                src="/profile.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 glass border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl hidden md:flex">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-neon-blue">5+</p>
                                <p className="text-[10px] uppercase tracking-widest text-gray-400">Years Exp.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-left"
                >
                    <div className="overflow-hidden mb-6">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]"
                        >
                            ENGINEERING <br />
                            <span className="text-neon-blue neon-text italic">AESTHETICS</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-base md:text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
                    >
                        Independent designer & developer specializing in <span className="text-white font-medium">high-end digital experiences</span>.
                        Merging industrial precision with creative soul to build the future of the web.
                    </motion.p>

                    <div className="flex flex-wrap gap-4 items-center">
                        <motion.a
                            href="#projects"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="group relative px-6 md:px-8 py-3 md:py-4 bg-neon-blue text-black font-extrabold rounded-full overflow-hidden transition-shadow hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] no-underline flex items-center gap-2 text-sm md:text-base"
                        >
                            <span>VIEW PROJECTS</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="group px-6 md:px-8 py-3 md:py-4 border border-white/10 hover:border-neon-blue text-white font-bold rounded-full transition-all no-underline flex items-center gap-2 glass text-sm md:text-base"
                        >
                            <Mail size={18} className="text-neon-blue" />
                            <span>GET IN TOUCH</span>
                        </motion.a>

                        <motion.a
                            href="/cv.pdf"
                            download
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="group flex flex-col items-center gap-1 text-[10px] font-mono text-gray-500 hover:text-neon-blue transition-colors no-underline uppercase tracking-tighter sm:ml-4"
                        >
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/5">
                                <Download size={16} />
                            </div>
                            <span>Download CV</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
