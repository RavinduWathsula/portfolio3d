import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import { Award, ExternalLink, X, ShieldCheck } from 'lucide-react'

const CertificateCard = ({ cert, index, onClick }) => {
    const cardRef = useRef(null)
    const [rotateX, setRotateX] = useState(0)
    const [rotateY, setRotateY] = useState(0)

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
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="perspective-1000"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => onClick(cert)}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative cursor-pointer h-full"
            >
                {/* Advanced Holographic Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/30 via-neon-purple/30 to-neon-blue/30 rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <div className="relative bg-[#050505]/80 backdrop-blur-3xl border border-white/10 rounded-[1.2rem] shadow-[inset_0_1px_10px_rgba(255,255,255,0.05),0_10px_30px_-10px_rgba(0,243,255,0.1)] p-4 lg:p-6 overflow-hidden group-hover:border-neon-blue/40 transition-all duration-500 h-full flex flex-col min-h-[300px]">
                    {/* Creative Background Texture and Gradients */}
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 opacity-60"></div>

                    {/* Cyber-Corners Decorative Elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-neon-blue/30 rounded-tl-[1.2rem] group-hover:border-neon-blue transition-colors duration-500" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-neon-purple/30 rounded-br-[1.2rem] group-hover:border-neon-purple transition-colors duration-500" />

                    {/* Background Holographic Watermark */}
                    <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
                        <Award size={140} className="text-white" />
                    </div>

                    {/* Animated Grid Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[size:16px_16px] opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 space-y-4 flex-1 flex flex-col" style={{ transform: "translateZ(30px)" }}>
                        <div className="flex justify-between items-start gap-2">
                            <div className="relative shrink-0">
                                <div className="absolute -inset-1.5 bg-neon-blue/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative w-12 h-12 rounded-lg bg-black/80 border border-white/10 p-2 flex items-center justify-center group-hover:border-neon-blue/40 transition-all overflow-hidden">
                                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-500" />
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1.5 text-right min-w-0 pl-1">
                                <div className="inline-block px-2 py-0.5 rounded-md bg-neon-purple/10 border border-neon-purple/20 text-[9px] font-black text-neon-purple uppercase tracking-widest leading-tight whitespace-normal">
                                    {cert.issuer}
                                </div>
                                <div className="flex items-center gap-1 text-neon-blue/40 mt-0.5 flex-wrap justify-end">
                                    <ShieldCheck size={10} className="shrink-0" />
                                    <span className="text-[8px] font-black uppercase tracking-widest leading-tight opacity-80 whitespace-normal">VALID: {cert.id.split('-').pop()}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 flex-1 mt-2">
                            <div>
                                <h3 className="text-sm sm:text-base font-black text-white group-hover:text-neon-blue transition-colors duration-300 leading-tight tracking-tight line-clamp-2">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-1.5">
                                    <div className="h-[1.5px] w-4 bg-neon-blue/30 group-hover:w-8 transition-all duration-500" />
                                    <p className="text-gray-500 text-[8px] uppercase tracking-[0.3em] font-black">
                                        {cert.date}
                                    </p>
                                </div>
                            </div>

                            {/* Streamlined Achievement Summary */}
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-2 group-hover:bg-white/[0.04] transition-all duration-500 mt-3">
                                <p className="text-gray-400 text-[9px] leading-relaxed font-medium italic line-clamp-3">
                                    "{cert.summary}"
                                </p>
                                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/50 animate-pulse" />
                                        <span className="text-[8px] font-black text-neon-blue/60 uppercase tracking-widest">Protocol</span>
                                    </div>
                                    <span className="text-[9px] font-black text-white px-2 py-0.5 rounded-md bg-white/5 border border-white/5">{cert.metric}</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between mt-auto border-t border-white/5">
                            <div className="flex flex-wrap gap-1.5 w-[75%]">
                                {cert.tech.slice(0, 3).map((t, i) => (
                                    <span key={i} className="text-[8px] font-black text-gray-500 border border-white/10 px-2 py-1 rounded-md uppercase tracking-wider bg-black/40 group-hover:text-neon-blue group-hover:border-neon-blue/30 transition-all">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <motion.div
                                className="w-8 h-8 shrink-0 rounded-lg border border-neon-blue/20 flex items-center justify-center text-neon-blue bg-neon-blue/5 group-hover:bg-neon-blue group-hover:text-black transition-all duration-500 shadow-[0_0_10px_rgba(0,243,255,0)] group-hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]"
                                whileHover={{ scale: 1.1 }}
                            >
                                <ExternalLink size={14} />
                            </motion.div>
                        </div>
                    </div>

                    {/* Enhanced Scanning Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue to-transparent -translate-y-full group-hover:animate-scan" />
                </div>
            </motion.div>
        </motion.div>
    )
}

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null)

    const certificates = [
        {
            title: "Advanced Software Engineering",
            issuer: "Full Stack Mastery",
            date: "JAN 2024",
            logo: "/assets/certificates/full_stack_mastery_logo.png",
            image: "/assets/certificates/certificate_placeholder.png",
            summary: "Mastered high-performance system design and optimized distributed architectures for global scalability.",
            metric: "98% OPTIMIZED",
            description: "Demonstrated excellence in implementing complex distributed systems, modern frontend architectures, and performance optimization strategies.",
            tech: ["React", "Node.js", "Systems"],
            id: "CERT-FSM-2024-001"
        },
        {
            title: "UI/UX Aesthetic Engineering",
            issuer: "Design Institute",
            date: "MAR 2024",
            logo: "/assets/certificates/design_institute_logo.png",
            image: "/assets/certificates/certificate_placeholder.png",
            summary: "Specialized in emotional design through motion and high-fidelity interactive prototyping.",
            metric: "ELITE DESIGNER",
            description: "Awarded for mastery in creating immersive digital experiences, combining technical precision with visual excellence in web development.",
            tech: ["Motion", "GSAP", "Three.js"],
            id: "CERT-DI-2024-042"
        },
        {
            title: "Cloud Infrastructure Specialist",
            issuer: "Cloud Masters Inc",
            date: "APR 2024",
            logo: "/assets/certificates/full_stack_mastery_logo.png",
            image: "/assets/certificates/certificate_placeholder.png",
            summary: "Automated core infrastructure deployment using advanced IaC patterns and zero-downtime CI/CD.",
            metric: "99.9% UPTIME",
            description: "Expertise in deploying and managing scalable cloud architectures, specializing in serverless computing and automated CI/CD pipelines.",
            tech: ["AWS", "Docker", "Terraform"],
            id: "CERT-CMS-2024-088"
        },
        {
            title: "Master of Data Science & AI",
            issuer: "AI Research Lab",
            date: "MAY 2024",
            logo: "/assets/certificates/global_tech_academy_logo.png",
            image: "/assets/certificates/certificate_placeholder.png",
            summary: "Implemented neural network models for predictive analysis and big-data pattern recognition.",
            metric: "AI PROTOTYPING",
            description: "Intensive focus on machine learning algorithms, deep neural networks, and advanced data visualization techniques for predictive analysis.",
            tech: ["Python", "TensorFlow", "ML"],
            id: "CERT-ARL-2024-210"
        },
        {
            title: "Cybersecurity & Defence Systems",
            issuer: "Global Tech Academy",
            date: "JUNE 2024",
            logo: "/assets/certificates/global_tech_academy_logo.png",
            image: "/assets/certificates/certificate_placeholder.png",
            summary: "Focused on proactive vulnerability assessment and implementing multi-layered encryption shields.",
            metric: "SECURE CORE",
            description: "Completed specialized training in identifying vulnerabilities, implementing robust network security, and modern encryption standards.",
            tech: ["Security", "Network", "Encryption"],
            id: "CERT-GTA-2024-118"
        }
    ]

    return (
        <section id="certificates" className="py-24 lg:py-48 bg-transparent relative flex items-center justify-center overflow-hidden">
            {/* Immersive Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.02)_0%,transparent_50%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="mb-24 lg:mb-32 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center gap-6"
                    >
                        <div className="w-12 lg:w-16 h-[2px] bg-gradient-to-r from-neon-blue to-transparent" />
                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-[1.5em] text-neon-blue/60">Professional Credentials</span>
                    </motion.div>
                    <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none uppercase overflow-visible py-4">
                        Verified <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-purple italic pr-4">Expertise&nbsp;</span>
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
                    {certificates.map((cert, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(25%-1.5rem)] min-w-[280px] max-w-[360px]">
                            <CertificateCard
                                cert={cert}
                                index={index}
                                onClick={setSelectedCert}
                            />
                        </div>
                    ))}
                </div>

                {/* Highly Immersive Modal Viewer */}
                <AnimatePresence>
                    {selectedCert && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedCert(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                transition={{ type: "spring", duration: 0.6 }}
                                className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-[3.5rem] overflow-hidden shadow-[0_0_150px_rgba(0,243,255,0.1)]"
                            >
                                <div className="flex flex-col lg:flex-row min-h-[600px]">
                                    {/* Certificate Showcase */}
                                    <div className="w-full lg:w-3/5 relative group p-10 flex items-center justify-center bg-black/40 border-b lg:border-b-0 lg:border-r border-white/5">
                                        <div className="relative w-full aspect-[1.414/1] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                                            <img
                                                src={selectedCert.image}
                                                alt={selectedCert.title}
                                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            {/* Watermark/Seal Effect */}
                                            <div className="absolute bottom-10 left-10 flex items-center gap-4">
                                                <div className="p-3 rounded-full bg-neon-blue/10 backdrop-blur-md border border-neon-blue/20">
                                                    <ShieldCheck className="text-neon-blue" size={32} />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-neon-blue mb-1">Authenticity Guaranteed</p>
                                                    <p className="text-[8px] font-mono text-white/40 tracking-wider">HASH: {selectedCert.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Intelligence Panel */}
                                    <div className="w-full lg:w-2/5 p-12 lg:p-16 flex flex-col justify-between relative bg-gradient-to-br from-[#0f0f0f] to-black">
                                        <div className="space-y-10">
                                            <div className="flex justify-between items-start">
                                                <div className="w-20 h-20 rounded-2xl bg-black border border-white/5 p-4 flex items-center justify-center shadow-inner">
                                                    <img src={selectedCert.logo} alt={selectedCert.issuer} className="w-full h-full object-contain" />
                                                </div>
                                                <motion.button
                                                    onClick={() => setSelectedCert(null)}
                                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                                                >
                                                    <X size={24} />
                                                </motion.button>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <span className="text-neon-blue font-black uppercase tracking-[0.4em] text-[10px]">Credential Path</span>
                                                    <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight mt-2 tracking-tighter">
                                                        {selectedCert.title}
                                                    </h3>
                                                </div>

                                                <div className="flex items-center gap-3 py-4 border-y border-white/5">
                                                    <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse" />
                                                    <p className="text-white/80 font-bold text-sm tracking-wide">
                                                        {selectedCert.issuer} <span className="text-white/20 mx-2">|</span> {selectedCert.date}
                                                    </p>
                                                </div>

                                                <p className="text-gray-400 text-lg leading-relaxed font-medium italic">
                                                    "{selectedCert.description}"
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Acquired Skills</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedCert.tech.map((t, idx) => (
                                                        <span key={idx} className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl text-[11px] font-black text-gray-400 hover:text-white hover:bg-neon-blue/20 hover:border-neon-blue/40 transition-all cursor-default uppercase tracking-wider">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-16 space-y-4">
                                            <motion.button
                                                whileHover={{ y: -5 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full py-6 bg-neon-blue text-black font-black uppercase tracking-[0.4em] text-xs rounded-2xl shadow-[0_20px_40px_rgba(0,243,255,0.15)] relative overflow-hidden group"
                                            >
                                                <span className="relative z-10">Verify Document</span>
                                                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-30 skew-x-[30deg]" />
                                            </motion.button>
                                            <p className="text-center text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Block-Chain Verified • 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}


export default Certificates
