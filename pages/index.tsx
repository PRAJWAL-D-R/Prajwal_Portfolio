import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion'

import Layout from '@/components/Layout'
import * as config from '@/lib/config'

// Custom hook for scroll animations
function useScrollAnimation() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  return { y, opacity }
}

// Animated section wrapper with responsive animations
function AnimatedSection({ children, className = '', delay = 0, id }: { children: React.ReactNode, className?: string, delay?: number, id?: string }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isMobile, setIsMobile] = React.useState(false)
  const shouldReduceMotion = useReducedMotion()

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <motion.section
      ref={ref}
      className={className}
      id={id}
      initial={isMobile ? { opacity: 0, y: 30 } : { opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: isMobile ? 30 : 0 }}
      transition={{ duration: isMobile ? 0.6 : 0.3, delay, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}

export default function HomePage() {
  const { y, opacity } = useScrollAnimation()
  const [showScrollTop, setShowScrollTop] = React.useState(false)
  const [isTourOpen, setIsTourOpen] = React.useState(false)
  const [currentTourStep, setCurrentTourStep] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)
  const shouldReduceMotion = useReducedMotion()

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Keyboard navigation for tour
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isTourOpen) return
      
      if (e.key === 'Escape') {
        closeTour()
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextTourStep()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevTourStep()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isTourOpen, currentTourStep])

  const tourSteps = [
    {
      title: "Welcome to My Portfolio",
      subtitle: "Let me show you around",
      content: "I'm Prajwal D R, a passionate software developer specializing in modern web technologies and full-stack development.",
      image: "👋",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "About Me",
      subtitle: "My Professional Journey",
      content: "I am a dedicated software developer with expertise in modern web technologies and full-stack development. My focus is on creating efficient, scalable solutions that deliver exceptional user experiences.",
      image: "👨‍💻",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Technical Skills",
      subtitle: "Technologies I Master",
      content: "I work with React.js, Node.js, TypeScript, MongoDB, MySQL, Tailwind CSS, Express.js, Git, Next.js, and Python to build modern applications.",
      image: "⚡",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Experience",
      subtitle: "Professional Background",
      content: "Currently working as a Software Developer (2022-Present) with previous experience as a Junior Developer (2021-2022), focusing on scalable web applications.",
      image: "🚀",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Featured Projects",
      subtitle: "My Recent Work",
      content: "Portfolio Website, Task Management App, and E-Commerce Platform - showcasing my skills in full-stack development with modern technologies.",
      image: "💼",
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Get In Touch",
      subtitle: "Let's Work Together",
      content: "Ready to bring your ideas to life? I'm always interested in new opportunities and exciting projects. Let's discuss your next venture!",
      image: "🤝",
      color: "from-indigo-500 to-purple-600"
    }
  ]

  const nextTourStep = () => {
    if (currentTourStep < tourSteps.length - 1) {
      setCurrentTourStep(currentTourStep + 1)
    } else {
      setIsTourOpen(false)
      setCurrentTourStep(0)
    }
  }

  const prevTourStep = () => {
    if (currentTourStep > 0) {
      setCurrentTourStep(currentTourStep - 1)
    }
  }

  const closeTour = () => {
    setIsTourOpen(false)
    setCurrentTourStep(0)
  }

  return (
    <Layout>
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 '>
        {/* Hero Section */}
        <section className='relative overflow-hidden min-h-screen flex items-center '>
          {/* Animated Background Elements (reduced on mobile / prefers-reduced-motion) */}
          <motion.div
            aria-hidden
            className='hidden md:block absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-10'
            animate={shouldReduceMotion ? undefined : { y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 180, 360] }}
            transition={shouldReduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className='hidden md:block absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-10'
            animate={shouldReduceMotion ? undefined : { y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -180, -360] }}
            transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className='hidden md:block absolute bottom-40 left-1/4 w-12 h-12 bg-cyan-400 rounded-full opacity-10'
            animate={shouldReduceMotion ? undefined : { y: [0, -15, 0], x: [0, 20, 0], scale: [1, 1.12, 1] }}
            transition={shouldReduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className='max-w-6xl mx-auto px-4 sm:px-5 lg:px-6 py-6 sm:py-10 lg:py-12'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-center'>
              <motion.div 
                className='space-y-6 sm:space-y-8 text-center lg:text-left'
                initial={{ opacity: 0, x: isMobile ? -50 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: isMobile ? 0.8 : 0.4, ease: "easeOut" }}
              >
                <motion.div 
                  className='space-y-2.5 sm:space-y-3.5'
                  initial={{ opacity: 0, y: isMobile ? 30 : 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.8 : 0.4, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.h1 
                    className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight'
                    initial={{ opacity: 0, y: isMobile ? 20 : 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.8 : 0.4, delay: 0.4, ease: "easeOut" }}
                  >
                    Hi, I'm{' '}
                    <motion.span 
                      className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'
                      initial={{ opacity: 0, scale: isMobile ? 0.8 : 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: isMobile ? 0.6 : 0.3, delay: 0.8, ease: "easeOut" }}
                    >
                      {config.author}
                    </motion.span>
                  </motion.h1>
                  <motion.p 
                    className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0'
                    initial={{ opacity: 0, y: isMobile ? 20 : 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.8 : 0.4, delay: 0.6, ease: "easeOut" }}
                  >
                    {config.description}
                  </motion.p>
                  <motion.p 
                    className='text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0'
                    initial={{ opacity: 0, y: isMobile ? 20 : 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.8 : 0.4, delay: 0.8, ease: "easeOut" }}
                  >
                    Dedicated to building efficient, scalable solutions with modern web technologies.
                  </motion.p>
                </motion.div>
                
                <motion.div 
                  className='flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 justify-center lg:justify-start'
                  initial={{ opacity: 0, y: isMobile ? 30 : 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.8 : 0.4, delay: 1.0, ease: "easeOut" }}
                >
                  <motion.div
                    whileHover={{ scale: isMobile ? 1.05 : 1.02 }}
                    whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <button
                      onClick={() => setIsTourOpen(true)}
                      className='inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow-md text-sm'
                    >
                      <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                      Take a Tour
                    </button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: isMobile ? 1.05 : 1.02 }}
                    whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href='#about'
                      className='inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 shadow-sm hover:shadow-md text-sm'
                    >
                      Learn More About Me
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: isMobile ? 1.05 : 1.02 }}
                    whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Link
                      href='#projects'
                      className='inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-md transition-colors duration-200 text-sm'
                    >
                      View My Projects
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className='flex justify-center lg:justify-start space-x-5'
                  initial={{ opacity: 0, y: isMobile ? 30 : 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.8 : 0.4, delay: 1.2, ease: "easeOut" }}
                >
                  {config.github && (
                    <motion.a
                      href={`https://github.com/${config.github}`}
                      target='_blank'
                      rel='noreferrer'
                      className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2'
                      whileHover={{ scale: isMobile ? 1.2 : 1.1, rotate: isMobile ? 5 : 0 }}
                      whileTap={{ scale: isMobile ? 0.9 : 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className='sr-only'>GitHub</span>
                      <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                      </svg>
                    </motion.a>
                  )}
                  {config.linkedin && (
                    <motion.a
                      href={`https://www.linkedin.com/in/${config.linkedin}`}
                      target='_blank'
                      rel='noreferrer'
                      className='text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors p-2'
                      whileHover={{ scale: isMobile ? 1.2 : 1.1, rotate: isMobile ? -5 : 0 }}
                      whileTap={{ scale: isMobile ? 0.9 : 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className='sr-only'>LinkedIn</span>
                      <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                      </svg>
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>

              <motion.div 
                className='relative order-first lg:order-last'
                initial={{ opacity: 0, x: isMobile ? 50 : 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: isMobile ? 0.8 : 0.4, delay: 0.4, ease: "easeOut" }}
              >
                <motion.div 
                  className='relative w-64 h-64 sm:w-80 sm:h-80 mx-auto'
                  whileHover={{ scale: isMobile ? 1.05 : 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20'
                    animate={{ 
                      scale: isMobile ? [1, 1.1, 1] : [1, 1.05, 1],
                      opacity: isMobile ? [0.2, 0.3, 0.2] : [0.2, 0.25, 0.2]
                    }}
                    transition={{ 
                      duration: isMobile ? 4 : 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div 
                    className='relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl'
                    initial={{ scale: isMobile ? 0.8 : 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: isMobile ? 0.8 : 0.4, delay: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src='/my image.jpg'
                      alt={`${config.author} profile photo`}
                      fill
                      className='object-cover'
                      priority
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 320px"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AnimatedSection className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800' id='about'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  About Me
                </h2>
                <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                  <p className='text-lg leading-relaxed'>
                    I am a dedicated software developer with expertise in modern web technologies and full-stack development. 
                    My focus is on creating efficient, scalable solutions that deliver exceptional user experiences.
                  </p>
                  <p className='text-lg leading-relaxed'>
                    With a strong foundation in computer science and hands-on experience in various technologies, 
                    I bring technical excellence and problem-solving skills to every project I undertake.
                  </p>
                </div>
                <motion.div 
                  className='mt-6'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Link
                    href='/about'
                    className='inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200'
                  >
                    Read More About Me
                    <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                className='grid grid-cols-2 gap-5'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { number: '6+', label: 'Months Experience' },
                  { number: '8+', label: 'Projects Completed' },
                  { number: '100%', label: 'Client Satisfaction' },
                  { number: '5+', label: 'Technologies Mastered' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl text-center'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className='text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className='py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-900'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div 
              className='text-center mb-8 sm:mb-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                Technical Skills
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300'>
                Technologies I work with and love
              </p>
            </motion.div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
              {[
                { name: 'React.js', icon: '⚛️', color: 'from-sky-400 to-sky-600' },
                { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-cyan-600' },
                { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-yellow-600' },
                { name: 'TypeScript', icon: '🔷', color: 'from-blue-500 to-blue-700' },
                { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
                { name: 'Express.js', icon: '🚀', color: 'from-gray-400 to-gray-600' },
                { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
                { name: 'MySQL', icon: '🐬', color: 'from-blue-400 to-blue-600' },
                { name: 'Git', icon: '🔧', color: 'from-red-400 to-red-600' },
                { name: 'Java', icon: '☕', color: 'from-orange-400 to-orange-600' }
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className='group relative p-4 sm:p-6 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: isMobile ? 0.5 : 0.3, 
                    delay: index * (isMobile ? 0.1 : 0.05),
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: isMobile ? 1.05 : 1.02,
                    y: isMobile ? -5 : -2
                  }}
                  whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    whileHover={{ opacity: 0.15 }}
                  ></motion.div>
                  <div className='relative text-center'>
                    <div className='text-2xl sm:text-3xl mb-2'>{skill.icon}</div>
                    <h3 className='text-sm sm:text-base font-semibold text-gray-900 dark:text-white'>
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div 
              className='text-center mb-8 sm:mb-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                Experience
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300'>
                My professional journey
              </p>
            </motion.div>

            <div className='relative'>
              {/* Timeline line */}
              <div className='absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500'></div>
              
              <div className='space-y-6'>
                {
                 [
                  {
                    title: 'Full-Stack Developer',
                    company: 'Qream Solutions',
                    period: 'Aug 2025 - Present',
                    description: 'Working as a Full-Stack Developer, building and maintaining scalable web applications with React.js, Node.js, and modern backend technologies.',
                    achievements: [
                      'Developed and optimized full-stack web applications using React.js and Node.js',
                      'Enhanced system performance and user experience through efficient UI/UX improvements',
                      'Collaborated with backend and frontend teams to deliver integrated ERP solutions'
                    ]
                  },
                  {
                    title: 'Software Developer Intern',
                    company: 'Qream Solutions',
                    period: 'Mar 2025 - Aug 2025',
                    description: 'Contributed as a Frontend Developer in ERP projects, designing responsive UIs and integrating APIs within a microservice-based architecture.',
                    achievements: [
                      'Built intuitive and responsive user interfaces for HRMS, Inventory, and CRM systems',
                      'Integrated RESTful APIs and improved system performance',
                      'Collaborated with developers to deliver production-ready modules for live clients'
                    ]
                  }
                
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    className='relative flex items-start sm:items-center'
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className='absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 z-10'></div>
                    
                    {/* Content */}
                    <div className={`ml-10 sm:ml-0 sm:w-1/2 text-left ${index % 2 === 0 ? 'sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                      <motion.div 
                        className='bg-white dark:bg-slate-700 p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3'>
                          <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white'>
                            {exp.title}
                          </h3>
                          <span className='text-sm text-blue-600 dark:text-blue-400 font-medium'>
                            {exp.period}
                          </span>
                        </div>
                        <h4 className='text-base sm:text-lg text-gray-600 dark:text-gray-300 font-semibold mb-3'>
                          {exp.company}
                        </h4>
                        <p className='text-gray-600 dark:text-gray-300 mb-4 leading-relaxed'>
                          {exp.description}
                        </p>
                        <ul className='space-y-1'>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className='text-sm text-gray-500 dark:text-gray-400 flex items-center'>
                              <svg className='w-3 h-3 text-green-500 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection className='py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-900' id='projects'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div 
              className='text-center mb-8 sm:mb-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                Featured Projects
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300'>
                Some of my recent work
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <motion.div
                className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-green-600 dark:text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                    </svg>
                    </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>Sahaja Krushi</h3>
                    <p className='text-gray-600 dark:text-gray-300'>Agricultural Management Platform</p>
                  </div>
                </div>
                {/* <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>May–Aug 2025</p> */}
                <div className='space-y-3 mb-6'>
                  <div className='flex items-start'>
                    <svg className='w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>Digitalized farmers' operations for Tumkur Gram Panchayath (web + mobile)</span>
                  </div>
                  <div className='flex items-start'>
                    <svg className='w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>Role-based access for Super Admin, Admin, and Farmer</span>
                  </div>
                  <div className='flex items-start'>
                    <svg className='w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>Email/SMS notifications for crop updates with admin dashboard responses</span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {['Node.js', 'Express.js', 'MySQL', 'React.js', 'React Native', 'Redux Toolkit'].map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium'>
                          {tech}
                        </span>
                      ))}
                    </div>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <a href='https://sahaja-krushi-frontend.onrender.com/auth/login' target='_blank' rel='noreferrer' className='flex-1 inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium'>
                    <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                    Web App
                  </a>
                  <a href='https://sahaja-krushi-mobile.onrender.com/' target='_blank' rel='noreferrer' className='flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium'>
                    <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                    </svg>
                    Mobile App
                  </a>
                </div>
              </motion.div>

              <motion.div
                className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className='flex items-center mb-6'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4'>
                    <svg className='w-6 h-6 text-blue-600 dark:text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                    </svg>
                    </div>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>E-Grievance System</h3>
                    <p className='text-gray-600 dark:text-gray-300'>Civic Bridge</p>
                  </div>
                </div>
                <div className='space-y-3 mb-6'>
                  <div className='flex items-start'>
                    <svg className='w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>Complaint portal for rural citizens; admin assigns agents and tracks resolution</span>
                  </div>
                  <div className='flex items-start'>
                    <svg className='w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>Escalation and feedback workflows</span>
                  </div>
                  <div className='flex items-start'>
                    <svg className='w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300 text-sm'>Agent–public communication via text messages</span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2 mb-6'>
                  {['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href='https://civic-bridge-prajwalssite.netlify.app/' target='_blank' rel='noreferrer' className='w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                  Live Demo
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              className='text-center mt-8'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href='/projects'
                className='inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 shadow-sm'
              >
                View All Projects
                <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection className='py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800 '>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:-mt-10'>
            <motion.div 
              className='text-center mb-8 sm:mb-10'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                Get In Touch
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300'>
                I’m available for freelance projects — let’s work together on your next build.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
               
                
                <div className='space-y-6'>
                  {[
                    { icon: '📧', label: 'Email', value: 'prajwaldr125@gmail.com', link: 'mailto:prajwaldr125@gmail.com' },
                    { icon: '📱', label: 'Phone', value: '+91-79759-46713', link: 'tel:+917975946713' },
                    { icon: '📍', label: 'Location', value: 'Hirehalli, Tumkur', link: '#' },
                    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/prajwaldr', link: 'https://linkedin.com/in/prajwaldr' }
                  ].map((contact, index) => (
                    <motion.a
                      key={index}
                      href={contact.link}
                      className='flex items-center p-4 bg-gray-50 dark:bg-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors duration-200 group'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className='text-2xl mr-4'>{contact.icon}</div>
                      <div>
                        <div className='font-semibold text-gray-900 dark:text-white'>
                          {contact.label}
                        </div>
                        <div className='text-gray-600 dark:text-gray-300'>
                          {contact.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-6 rounded-xl'>
                  <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                    Send a Message
                  </h3>
                  <form className='space-y-5'>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                        Name
                      </label>
                      <input
                        type='text'
                        className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                        placeholder='Your name'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                        Email
                      </label>
                      <input
                        type='email'
                        className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                        placeholder='your@email.com'
                      />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white'
                        placeholder='Tell me about your project...'
                      ></textarea>
                    </div>
                    <motion.button
                      type='submit'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-md transition-colors duration-200 shadow-sm'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <motion.section 
          className='py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-slate-800 dark:to-slate-700'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative'>
            <motion.h2 
              className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-slate-100 mb-4'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to Bring Your Ideas to Life?
            </motion.h2>
            <motion.p 
              className='text-lg sm:text-xl text-blue-100 dark:text-slate-200 mb-8 max-w-2xl mx-auto'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Let's discuss your next project and create something amazing together.
            </motion.p>
            {/* Decorative animated screen */}
            <motion.div
              className='relative mx-auto mb-8 w-full max-w-3xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className='absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400/60 via-blue-500/60 to-purple-600/60 blur-md'
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className='relative rounded-2xl bg-white/15 dark:bg-slate-900/40 ring-1 ring-white/20 dark:ring-slate-700/50 shadow-2xl overflow-hidden'>
                {/* Window header */}
                <div className='flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-slate-800/50 border-b border-white/10 dark:border-slate-700/40'>
                  <span className='h-2.5 w-2.5 rounded-full bg-red-400/80'></span>
                  <span className='h-2.5 w-2.5 rounded-full bg-yellow-400/80'></span>
                  <span className='h-2.5 w-2.5 rounded-full bg-green-400/80'></span>
                </div>
                {/* Screen content */}
                <div className='relative px-5 py-4 sm:px-6 sm:py-6 text-left'>
                  <div className='text-xs sm:text-sm font-mono text-blue-50/90 dark:text-slate-200/90'>
                    <div className='mb-1'><span className='text-cyan-300'>const</span> idea = <span className='text-purple-300'>'your-next-project'</span></div>
                    <div className='mb-1'><span className='text-cyan-300'>function</span> build(idea) {'{'} <span className='text-emerald-300'>return</span> <span className='text-yellow-300'>"amazing"</span> {'}'}</div>
                    <div className='flex items-center'>
                      <span className='text-cyan-300'>deploy</span>(<span className='text-purple-300'>idea</span>)
                      <motion.span
                        className='ml-1 h-4 w-2 bg-blue-200/80'
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                  </div>
                  {/* Floating accents */}
                  <motion.div className='absolute -top-3 -right-3 h-6 w-6 rounded-full bg-blue-400/40 blur-sm'
                    animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                  <motion.div className='absolute -bottom-3 -left-3 h-8 w-8 rounded-full bg-purple-500/40 blur'
                    animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
                </div>
              </div>
            </motion.div>

            <motion.div
              className='flex flex-col sm:flex-row gap-4 justify-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/contact'
                  className='inline-flex items-center justify-center px-6 py-2.5 bg-white text-blue-700 dark:bg-slate-900 dark:text-white font-medium rounded-md hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors duration-200 shadow-sm'
                >
                  Start a Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
               
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Cinematic Tour Modal */}
        {isTourOpen && (
          <motion.div
            role='dialog'
            aria-modal='true'
            aria-label='Portfolio tour'
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Particles */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-2 h-2 bg-white rounded-full opacity-20'
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <motion.div
              className='relative w-full max-w-lg sm:max-w-2xl lg:max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden'
              initial={{ scale: isMobile ? 0.8 : 0.95, opacity: 0, rotateY: isMobile ? -15 : 0 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: isMobile ? 0.8 : 0.95, opacity: 0, rotateY: isMobile ? 15 : 0 }}
              transition={{ duration: isMobile ? 0.5 : 0.3, ease: "easeOut" }}
            >
              {/* Tour Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${tourSteps[currentTourStep]?.color || 'from-blue-500 to-purple-600'} relative overflow-hidden`}>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30'
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </div>
              
              <div className='p-5 sm:p-8'>
                {/* Close Button */}
                <motion.button
                  onClick={closeTour}
                  className='absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700'
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </motion.button>

                {/* Tour Content */}
                <motion.div
                  key={currentTourStep}
                  initial={{ opacity: 0, x: isMobile ? 50 : 0, scale: isMobile ? 0.9 : 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: isMobile ? -50 : 0, scale: isMobile ? 0.9 : 0.98 }}
                  transition={{ duration: isMobile ? 0.6 : 0.3, ease: "easeInOut" }}
                  className='text-center'
                >
                  {/* Step Indicator */}
                  <div className='flex justify-center mb-6'>
                    {tourSteps.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                          index === currentTourStep 
                            ? 'bg-blue-600 shadow-lg' 
                            : index < currentTourStep 
                              ? 'bg-green-500' 
                              : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  {/* Emoji Animation with Glow Effect */}
                  <motion.div
                    className='text-6xl sm:text-7xl md:text-8xl mb-6 relative'
                    initial={{ scale: isMobile ? 0 : 0.8, rotate: isMobile ? -180 : 0 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: isMobile ? 0.8 : 0.4, ease: "easeOut" }}
                  >
                    <motion.div
                      className='absolute inset-0 rounded-full opacity-30'
                      style={{
                        background: `radial-gradient(circle, ${tourSteps[currentTourStep]?.color?.split(' ')[1] || 'blue-500'} 0%, transparent 70%)`
                      }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className='relative z-10'>{tourSteps[currentTourStep]?.image || '👋'}</div>
                  </motion.div>

                  {/* Title with Typewriter Effect */}
                  <motion.h2
                    className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {tourSteps[currentTourStep]?.title || 'Welcome'}
                  </motion.h2>

                  {/* Subtitle with Gradient Animation */}
                  <motion.h3
                    className={`text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r ${tourSteps[currentTourStep]?.color || 'from-blue-500 to-purple-600'} bg-clip-text text-transparent mb-4 sm:mb-6`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {tourSteps[currentTourStep]?.subtitle || 'Let me show you around'}
                  </motion.h3>

                  {/* Content with Staggered Animation */}
                  <motion.p
                    className='text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {tourSteps[currentTourStep]?.content || 'Welcome to my portfolio!'}
                  </motion.p>

                  {/* Enhanced Progress Bar */}
                  <motion.div
                    className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-8 overflow-hidden'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className={`h-3 bg-gradient-to-r ${tourSteps[currentTourStep]?.color || 'from-blue-500 to-purple-600'} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentTourStep + 1) / tourSteps.length) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30'
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Enhanced Navigation */}
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-stretch sm:items-center'>
                  <motion.button
                    onClick={prevTourStep}
                    disabled={currentTourStep === 0}
                    className={`px-4 py-2.5 rounded-md font-medium transition-colors duration-200 ${
                      currentTourStep === 0
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                        : 'bg-gray-600 hover:bg-gray-700 text-white shadow-sm'
                    }`}
                    whileHover={currentTourStep > 0 ? { scale: isMobile ? 1.05 : 1.02, x: isMobile ? -2 : 0 } : {}}
                    whileTap={currentTourStep > 0 ? { scale: isMobile ? 0.95 : 0.98 } : {}}
                  >
                    <svg className='w-4 h-4 mr-2 inline' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                    Previous
                  </motion.button>

                  <motion.div 
                    className='order-first sm:order-none text-sm text-gray-500 dark:text-gray-400 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: isMobile ? 0.6 : 0.3 }}
                  >
                    {currentTourStep + 1} of {tourSteps.length}
                  </motion.div>

                  <motion.button
                    onClick={nextTourStep}
                    className={`px-4 py-2.5 rounded-md font-medium transition-colors duration-200 bg-gradient-to-r ${tourSteps[currentTourStep]?.color || 'from-blue-500 to-purple-600'} hover:opacity-90 text-white shadow-sm`}
                    whileHover={{ scale: isMobile ? 1.05 : 1.02, x: isMobile ? 2 : 0 }}
                    whileTap={{ scale: isMobile ? 0.95 : 0.98 }}
                  >
                    {currentTourStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
                    <svg className='w-4 h-4 ml-2 inline' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </motion.button>
                </div>

                {/* Keyboard Shortcuts Hint */}
                <motion.div
                  className='text-xs text-gray-400 dark:text-gray-500 text-center mt-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Use ← → arrow keys or spacebar to navigate • ESC to close
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Scroll to Top Button */}
        <motion.button
          className={`fixed bottom-8 right-8 z-50 p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-colors duration-200 ${
            showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ scale: 0 }}
          animate={{ scale: showScrollTop ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
          </svg>
        </motion.button>
      </main>
    </Layout>
  )
}