import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Background3D from './components/Background3D'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-blue origin-left z-[60]"
        style={{ scaleX }}
      />
      <Background3D />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center opacity-50 text-sm">
        © {new Date().getFullYear()} Professional Portfolio. All rights reserved.
      </footer>
    </div>
  )
}

export default App
