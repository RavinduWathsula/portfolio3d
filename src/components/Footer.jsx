import { SiGithub, SiLinkedin } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'


const Footer = () => {
    const socialLinks = [
        { icon: SiGithub, href: 'https://github.com/RavinduWathsula' },
        { icon: SiLinkedin, href: 'https://www.linkedin.com/in/ravindu-wathsula-75265333a' },
        { icon: FaTwitter, href: '#' },
    ]

    return (
        <footer className="relative bg-[#020205] pt-24 pb-12 overflow-hidden h-96">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col h-full justify-end">
                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-12 flex flex-col sm:flex-row justify-between items-center gap-8">
                    <div className="text-sm font-mono text-gray-500 text-center sm:text-left">
                        © {new Date().getFullYear()} Ravindu Wathsula. All rights reserved.
                    </div>
                    <div className="flex items-center gap-5">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 transition-colors hover:text-[#00f3ff]"
                            >
                                <social.icon size={22} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
