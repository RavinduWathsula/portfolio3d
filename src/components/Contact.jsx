import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiSend, FiArrowRight } from 'react-icons/fi';
import { CheckCircle, AlertTriangle, MessageCircle, User, AtSign } from 'lucide-react';

/* ─── Animated Gradient Blob ─── */
const GradientBlob = ({ delay, position }) => (
    <motion.div
        className="absolute rounded-full blur-3xl opacity-10"
        style={{
            width: '300px',
            height: '300px',
            ...position,
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay,
            ease: 'easeInOut',
        }}
    />
);

/* ─── Modern Input Field ─── */
const ModernInput = ({ label, type = 'text', placeholder, value, onChange, icon: Icon, id }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative">
            <label htmlFor={id} className="block text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-3 transition-colors">
                {label}
            </label>
            <motion.div
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
                <div className={`relative flex items-center bg-[#ffffff02] backdrop-blur-xl border-2 rounded-xl overflow-hidden transition-all duration-300 ${isFocused ? 'border-neon-blue shadow-lg shadow-neon-blue/20' : 'border-white/10'}`}>
                    {Icon && <Icon size={18} className="absolute left-4 text-neon-blue/60" />}
                    
                    {type === 'textarea' ? (
                        <textarea
                            id={id}
                            rows="5"
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={`w-full bg-transparent text-white placeholder-white/30 px-4 py-3 focus:outline-none text-sm font-medium resize-none ${Icon ? 'pl-12' : ''}`}
                        />
                    ) : (
                        <input
                            id={id}
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={`w-full bg-transparent text-white placeholder-white/30 px-4 py-3 focus:outline-none text-sm font-medium ${Icon ? 'pl-12' : ''}`}
                        />
                    )}
                </div>
            </motion.div>
        </div>
    );
};

/* ─── Contact Info Card ─── */
const InfoCard = ({ icon: Icon, title, value, href, index }) => {
    const Tag = href ? 'a' : 'div';
    const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Tag
                {...linkProps}
                className="group relative p-5 rounded-xl border border-white/10 bg-[#ffffff02] backdrop-blur-xl hover:border-neon-blue/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10 cursor-pointer block"
            >
                <div className="flex items-center gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon size={20} className="text-neon-blue" />
                    </div>
                    <div className="flex-1">
                        <p className="text-xs font-black text-gray-500 uppercase tracking-wide mb-1">
                            {title}
                        </p>
                        <p className="text-sm font-bold text-white group-hover:text-neon-blue transition-colors">
                            {value}
                        </p>
                    </div>
                    {href && <FiArrowRight size={16} className="text-gray-600 group-hover:text-neon-blue transition-colors" />}
                </div>
            </Tag>
        </motion.div>
    );
};

/* ═════════════════ MAIN CONTACT COMPONENT ═════════════════ */
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            {
                from_name: formData.name,
                to_name: 'Ravindu Wathsula',
                from_email: formData.email,
                to_email: 'rvwathsula@gmail.com',
                subject: formData.subject,
                message: formData.message,
            },
            'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        ).then(() => {
            setStatus('sent');
            setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 3000);
        }, (error) => {
            console.log('EMAILJS ERROR:', error);
            setStatus('error');
            setTimeout(() => {
                setStatus('idle');
            }, 5000);
        });
    };

    const contactCards = [
        { icon: FiMail, title: 'Email', value: 'rvwathsula@gmail.com', href: 'mailto:rvwathsula@gmail.com' },
        { icon: FiMapPin, title: 'Location', value: 'Sri Lanka' },
        { icon: FiLinkedin, title: 'LinkedIn', value: 'Ravindu Wathsula', href: 'https://www.linkedin.com/in/ravindu-wathsula-75265333a' },
        { icon: FiGithub, title: 'GitHub', value: 'RavinduWathsula', href: 'https://github.com/RavinduWathsula' },
    ];

    return (
        <section id="contact" className="py-24 lg:py-40 bg-transparent flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                {/* ── Section Header ── */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-px bg-neon-blue" />
                            <span className="text-xs font-black uppercase tracking-[1em] text-neon-blue">Get in Touch</span>
                        </motion.div>
                        
                        <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none overflow-hidden py-2">
                            INITIATE <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-purple via-neon-blue to-neon-purple italic pr-4">COLLABORATION&nbsp;</span>
                        </h2>

                    </motion.div>
                </div>

                {/* ── Contact Form & Info ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-16">

                    {/* ─── Left: Contact Info Cards ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h3 className="text-sm font-black text-white uppercase tracking-[0.3em] mb-6">Connect</h3>
                        {contactCards.map((card, i) => (
                            <InfoCard key={card.title} {...card} index={i} />
                        ))}

                        {/* Status */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.4 }}
                            className="pt-6 mt-6 border-t border-white/10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-neon-blue rounded-full" />
                                    <motion.div
                                        className="absolute inset-0 bg-neon-blue rounded-full"
                                        animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Status</p>
                                    <p className="text-sm font-bold text-neon-blue">Available for projects</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ─── Right: Contact Form ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="group relative p-8 lg:p-10 rounded-[2.5rem] border border-white/10 bg-[#ffffff02] backdrop-blur-3xl shadow-2xl transition-all duration-500">
                            <motion.div 
                                className="absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    border: '2px solid transparent',
                                    backgroundImage: 'linear-gradient(to right, #3b82f6, #8b5cf6, #3b82f6)',
                                    backgroundSize: '200% 200%',
                                    animation: 'gradient-flow 4s ease infinite',
                                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    maskComposite: 'exclude',
                                    WebkitMaskComposite: 'xor'
                                }}
                            />
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <ModernInput
                                        id="contact-name"
                                        label="Full Name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange('name')}
                                        icon={User}
                                    />
                                    <ModernInput
                                        id="contact-email"
                                        label="Email Address"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange('email')}
                                        icon={AtSign}
                                    />
                                </div>

                                <ModernInput
                                    id="contact-subject"
                                    label="Subject"
                                    placeholder="What would you like to discuss?"
                                    value={formData.subject}
                                    onChange={handleChange('subject')}
                                    icon={MessageCircle}
                                />

                                <ModernInput
                                    id="contact-message"
                                    label="Message"
                                    type="textarea"
                                    placeholder="Tell me about your project or idea..."
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                />

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending' || status === 'sent'}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative w-full py-5 rounded-xl overflow-hidden font-black text-sm uppercase tracking-[0.3em] transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {/* Button background */}
                                    <div className={`absolute inset-0 transition-colors duration-300 ${status === 'error' ? 'bg-red-500' : 'bg-neon-blue'}`} />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1/2 h-full bg-white/10 -skew-x-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </div>

                                    {/* Button content */}
                                    <AnimatePresence mode="wait">
                                        {status === 'idle' && (
                                            <motion.span
                                                key="idle"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="relative z-10 flex items-center justify-center gap-2 text-black"
                                            >
                                                <FiSend size={16} />
                                                Send Message
                                            </motion.span>
                                        )}
                                        {status === 'sending' && (
                                            <motion.span
                                                key="sending"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="relative z-10 flex items-center justify-center gap-2 text-black"
                                            >
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                >
                                                    <MessageCircle size={16} />
                                                </motion.div>
                                                Sending...
                                            </motion.span>
                                        )}
                                        {status === 'sent' && (
                                            <motion.span
                                                key="sent"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="relative z-10 flex items-center justify-center gap-2 text-black"
                                            >
                                                <CheckCircle size={16} />
                                                Message Sent!
                                            </motion.span>
                                        )}
                                        {status === 'error' && (
                                            <motion.span
                                                key="error"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="relative z-10 flex items-center justify-center gap-2 text-black"
                                            >
                                                <AlertTriangle size={16} />
                                                Send Failed!
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>

                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                    I'll respond within 24 hours. Let's create something incredible.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
