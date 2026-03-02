import { motion } from 'framer-motion'

const Education = () => {
    const education = [
        {
            title: "Bachelor of Science in Computer Science",
            institution: "Technical University",
            year: "2018 - 2022",
            description: "Specialized in Software Engineering and Artificial Intelligence."
        },
        {
            title: "Advanced Diploma in Web Development",
            institution: "Digital Academy",
            year: "2017 - 2018",
            description: "Focused on modern frontend frameworks and backend systems."
        }
    ]

    const certificates = [
        { name: "Full Stack Development Professional", issuer: "IBM / Coursera", date: "2023" },
        { name: "Three.js Journey Certificate", issuer: "Bruno Simon", date: "2023" },
        { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2022" },
        { name: "UI/UX Design Specialist", issuer: "Google", date: "2022" }
    ]

    return (
        <section id="education">
            <div className="max-w-container grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
                {/* Education Timeline */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl font-bold mb-10 uppercase tracking-widest border-l-4 border-neon-blue pl-4">
                        Education
                    </h2>
                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/20">
                                <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-neon-blue rounded-full neon-shadow" />
                                <span className="text-sm font-mono text-neon-blue">{item.year}</span>
                                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                                <p className="text-gray-400 font-medium">{item.institution}</p>
                                <p className="text-gray-500 mt-2 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h2 className="text-4xl font-bold mb-10 uppercase tracking-widest border-l-4 border-neon-purple pl-4">
                        Certificates
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certificates.map((cert, index) => (
                            <div key={index} className="glass p-5 rounded-xl hover:border-neon-purple transition-all group">
                                <h4 className="font-bold text-sm tracking-wide group-hover:text-neon-purple transition-colors">
                                    {cert.name}
                                </h4>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-tighter">
                                    {cert.issuer} • {cert.date}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
