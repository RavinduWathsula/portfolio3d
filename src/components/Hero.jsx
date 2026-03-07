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
        <section id="home" className="min-h-screen flex items-center justify-center pt-28 md:pt-20">
            <div className="max-w-container px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group flex justify-center lg:justify-end order-2 lg:order-1"
                >
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] max-w-[90vw]">
                        {/* Creative Frames */}
                        <div className="absolute inset-0 bg-neon-blue rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                        <div className="absolute inset-0 border-2 border-white/10 rounded-3xl rotate-3 group-hover:rotate-0 transition-transform duration-500 delay-75" />

                        {/* Image Container */}
                        <div className="relative w-full h-full rounded-3xl overflow-hidden glass border border-white/20">
                            <img
                                src="/profile01.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-28 sm:h-28 glass border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl z-20">
                            <div className="text-center">
                                <p className="text-lg sm:text-2xl font-bold text-neon-blue tracking-tighter">🎓 KDU</p>
                                <p className="text-[7px] sm:text-[9px] uppercase tracking-widest text-gray-400">Undergraduate</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center lg:text-left order-1 lg:order-2"
                >
                    <div className="mb-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[clamp(2.5rem,10vw,5rem)] xl:text-[6rem] 2xl:text-[7rem] font-black tracking-tighter leading-[0.9] py-2"
                        >
                            THE FUTURE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple italic animate-gradient-flow animate-breathing bg-[length:200%_auto]">ENGINEERING </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10 leading-relaxed font-medium"
                    >
                        Independent designer & developer specializing in <span className="text-white font-bold border-b-2 border-neon-blue/30 pb-0.5">high-end digital experiences</span>.
                        Merging industrial precision with creative soul to build the future of the web.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center lg:justify-start">
                        <motion.a
                            href="#projects"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-black font-black rounded-full transition-all hover:shadow-[0_0_40px_rgba(0,243,255,0.4)] no-underline flex items-center justify-center gap-3 text-sm md:text-base tracking-tighter overflow-hidden"
                        >
                            <span className="relative z-10">VIEW PROJECTS</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <motion.div
                                className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                            />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="group w-full sm:w-auto px-8 py-4 border border-white/20 hover:border-neon-blue text-white font-bold rounded-full transition-all no-underline flex items-center justify-center gap-3 glass text-sm md:text-base tracking-tighter hover:bg-white/5"
                        >
                            <Mail size={18} className="text-neon-blue group-hover:scale-120 transition-transform" />
                            <span>GET IN TOUCH</span>
                        </motion.a>

                        <motion.a
                            href="/cv.pdf"
                            download
                            variants={buttonVariants}
                            initial="rest"
                            whileHover="hover"
                            className="group flex flex-col items-center gap-1.5 text-[10px] font-mono text-gray-400 hover:text-neon-blue transition-colors no-underline uppercase tracking-widest sm:ml-4 mt-4 sm:mt-0"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-blue group-hover:bg-neon-blue/10 transition-all shadow-inner">
                                <Download size={18} />
                            </div>
                            <span className="font-bold">Resume</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
