import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-container glass p-10 rounded-2xl mx-4"
            >
                <h2 className="text-4xl font-bold mb-6 uppercase tracking-wider">About Me</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I am a passionate developer with a deep interest in creating visually stunning and
                    highly functional digital products. With a background in industry-focused development,
                    I bridge the gap between complex technical requirements and intuitive user experiences.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4">
                        <h3 className="text-3xl font-bold text-neon-blue">3+</h3>
                        <p className="text-xs uppercase text-gray-500">Years Exp.</p>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="text-3xl font-bold text-neon-blue">50+</h3>
                        <p className="text-xs uppercase text-gray-500">Projects Done</p>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="text-3xl font-bold text-neon-blue">20+</h3>
                        <p className="text-xs uppercase text-gray-500">Certificates</p>
                    </div>
                    <div className="text-center p-4">
                        <h3 className="text-3xl font-bold text-neon-blue">15+</h3>
                        <p className="text-xs uppercase text-gray-500">Global Clients</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
