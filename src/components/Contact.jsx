import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'

const ContactInfo = ({ icon: Icon, title, value }) => (
    <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 glass flex items-center justify-center rounded-lg text-neon-blue">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-xs uppercase text-gray-500 tracking-widest">{title}</p>
            <p className="text-lg font-medium">{value}</p>
        </div>
    </div>
)

const Contact = () => {
    return (
        <section id="contact">
            <div className="max-w-container px-4">
                <h2 className="text-5xl font-bold mb-16 uppercase tracking-tighter text-center">
                    Get In <span className="text-neon-blue">Touch</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                        <ContactInfo icon={FiMail} title="Email" value="hello@industrypro.com" />
                        <ContactInfo icon={FiPhone} title="Phone" value="+1 (555) 123-4567" />
                        <ContactInfo icon={FiMapPin} title="Location" value="San Francisco, CA" />

                        <div className="flex gap-4 mt-12">
                            {[FiLinkedin, FiGithub, FiTwitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 glass flex items-center justify-center rounded-lg hover:text-neon-blue transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs uppercase text-gray-500 tracking-widest block mb-2">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="text-xs uppercase text-gray-500 tracking-widest block mb-2">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs uppercase text-gray-500 tracking-widest block mb-2">Subject</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="text-xs uppercase text-gray-500 tracking-widest block mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors" placeholder="How can I help you?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-neon-blue text-black font-bold rounded-lg hover:shadow-[0_0_20px_var(--neon-blue)] transition-all uppercase tracking-widest text-sm">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
