import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { motion } from 'framer-motion'

import Layout from '@/components/Layout'
import * as config from '@/lib/config'

export default function AboutPage() {
  return (
    <Layout>
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
        {/* Hero Section */}
        <motion.section
          className='py-8 sm:py-12 lg:py-16'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div className='text-center mb-12 sm:mb-16' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <motion.div className='relative inline-block mb-6 sm:mb-8' initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
                <div className='relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto'>
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30'></div>
                  <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl'>
                    <Image
                      src='/my image.jpg'
                      alt={`${config.author} profile photo`}
                      fill
                      className='object-cover'
                      priority
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                    />
                  </div>
                </div>
              </motion.div>
              
              <motion.h1 className='text-3xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4'
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                {config.author}
              </motion.h1>
              <motion.p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 max-w-3xl mx-auto px-4'
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
                {config.description} I’m currently open to freelance engagements — feel free to reach out via email or phone.
              </motion.p>
              
              <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-5'
                initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
                <span className='flex items-center gap-2'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                  </svg>
                  Hirehalli, Tumkur
                </span>
                <span className='hidden sm:block'>•</span>
                <a href='tel:+917975946713' className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
                  +91-79759-46713
                </a>
                <span className='hidden sm:block'>•</span>
                <a href='mailto:prajwaldr125@gmail.com' className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all'>
                  prajwaldr125@gmail.com
                </a>
              </motion.div>

              <motion.div className='flex justify-center space-x-3 sm:space-x-4 mt-3 sm:mt-4'
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
                {config.github && (
                  <a
                    href={`https://github.com/${config.github}`}
                    target='_blank'
                    rel='noreferrer'
                    className='p-2 sm:p-3 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                  >
                    <svg className='h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                    </svg>
                  </a>
                )}
                {config.linkedin && (
                  <a
                    href={`https://www.linkedin.com/in/${config.linkedin}`}
                    target='_blank'
                    rel='noreferrer'
                    className='p-2 sm:p-3 bg-white dark:bg-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
                  >
                    <svg className='h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-300' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                    </svg>
                  </a>
                )}
                {/* Download Resume button */}
                <Link
                  href='/Prajwal_D_R_Resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-blue-700 rounded-md transition-colors duration-200 shadow-sm'
                >
                  Download Resume
                  <svg className='ml-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Sections */}
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-10 lg:space-y-12'>
          {/* Objective Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className='flex items-center mb-3 sm:mb-5'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                </svg>
              </div>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Objective</h2>
            </div>
            <p className='text-base sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed'>
              MCA graduate and Full-Stack Developer passionate about building scalable web applications with React and
              Node.js. Experienced in designing user-friendly interfaces, integrating APIs, and delivering real-time
              solutions in live projects.
            </p>
          </motion.section>

          {/* Education Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.05 }}>
            <div className='flex items-center mb-3 sm:mb-5'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.083 12.083 0 01.665-6.479L12 14z' />
                </svg>
              </div>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Education</h2>
            </div>
            <div className='space-y-3 sm:space-y-5'>
              <div className='border-l-4 border-blue-500 pl-4 sm:pl-6'>
                <h3 className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-white'>Master of Computer Applications (MCA)</h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>Siddaganga Institute of Technology, Tumkur</p>
                <p className='text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base'>CGPA: 9.08</p>
              </div>
              <div className='border-l-4 border-green-500 pl-4 sm:pl-6'>
                <h3 className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-white'>Bachelor of Computer Applications (BCA)</h3>
                <p className='text-sm sm:text-base text-gray-600 dark:text-gray-300'>Vidyavahini First Grade College, Tumkur</p>
                <p className='text-green-600 dark:text-green-400 font-semibold text-sm sm:text-base'>CGPA: 8.7</p>
              </div>
            </div>
          </motion.section>

          {/* Internship Experience Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className='flex items-center mb-3 sm:mb-5'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0'>
                <svg className='w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6' />
                </svg>
              </div>
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white'>Internship Experience</h2>
            </div>
            <div className='bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-3 sm:p-5'>
              <h3 className='text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2'>Software Developer Intern</h3>
              <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-3 sm:mb-4'>Qream Solutions · Mar–Aug 2025</p>
              <ul className='space-y-2 sm:space-y-3'>
                <li className='flex items-start'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 mr-2 sm:mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-sm sm:text-base text-gray-700 dark:text-gray-300'>Worked on live projects as a Frontend Developer, designing intuitive and responsive UIs.</span>
                </li>
                <li className='flex items-start'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 mr-2 sm:mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-sm sm:text-base text-gray-700 dark:text-gray-300'>Contributed to ERP solutions such as HRMS, Procurement, Inventory, LMS, and CRM systems.</span>
                </li>
                <li className='flex items-start'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 mr-2 sm:mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-sm sm:text-base text-gray-700 dark:text-gray-300'>Integrated REST APIs, collaborated on backend API development, and followed microservice architecture.</span>
                </li>
                <li className='flex items-start'>
                  <svg className='w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 mr-2 sm:mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-sm sm:text-base text-gray-700 dark:text-gray-300'>Delivered UI/UX enhancements, improving usability and performance across multiple modules.</span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4'>
                <svg className='w-6 h-6 text-orange-600 dark:text-orange-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                </svg>
              </div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>Projects</h2>
            </div>
            
            <div className='space-y-6'>
              {/* Sahaja Krushi Project */}
              <div className='bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-5'>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>Sahaja Krushi – Agricultural Management Platform</h3>
                <p className='text-lg text-gray-600 dark:text-gray-300 mb-4'>May–Aug 2025</p>
                <ul className='space-y-3 mb-4'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Digitalized farmers' operations for Tumkur Gram Panchayath with a responsive web and mobile application.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Implemented role-based access for Super Admin, Admin, and Farmer across the platform.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Real-time notifications via email/SMS for crop updates, with admin dashboard for responses.</span>
                  </li>
                </ul>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {['Node.js', 'Express.js', 'MySQL', 'React.js', 'React Native', 'Redux Toolkit', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <a href='https://sahaja-krushi-frontend.onrender.com/auth/login' target='_blank' rel='noreferrer' className='inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors'>
                    <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                    </svg>
                    Web App
                  </a>
                  <a href='https://sahaja-krushi-mobile.onrender.com/' target='_blank' rel='noreferrer' className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'>
                    <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
                    </svg>
                    Mobile App
                  </a>
                </div>
              </div>

              {/* E-Grievance System Project */}
              <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-5'>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>E-Grievance System – Civic Bridge</h3>
                <ul className='space-y-3 mb-4'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Portal for rural citizens to register complaints; Admin assigns agents and tracks resolution.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Escalation and feedback system ensures timely issue resolution.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Agents and public interact through text messages for updates and responses.</span>
                  </li>
                </ul>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>
                <a href='https://civic-bridge-prajwalssite.netlify.app/' target='_blank' rel='noreferrer' className='inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                  Live Demo
                </a>
              </div>

              {/* Smart Learning Management System Project */}
              <div className='bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-5'>
                <h3 className='text-2xl font-semibold text-gray-900 dark:text-white mb-2'>Smart Learning Management System</h3>
                <ul className='space-y-3 mb-4'>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Trainers create courses and certifications and assign them to different employees.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Employees take assessments; results are automatically calculated based on percentage.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Employees receive certificates upon successful completion; feedback can be provided by both sides.</span>
                  </li>
                  <li className='flex items-start'>
                    <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700 dark:text-gray-300'>Email notifications are sent when a trainer assigns a course, assessment, or certificate.</span>
                  </li>
                </ul>
                <div className='flex flex-wrap gap-2'>
                  {['React', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express.js', 'SQL', 'Figma'].map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Technical Skills Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4'>
                <svg className='w-6 h-6 text-indigo-600 dark:text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' />
                </svg>
              </div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>Technical Skills</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Languages</h3>
                <div className='flex flex-wrap gap-2'>
                  {['Core Java', 'JavaScript', 'TypeScript'].map((skill) => (
                    <span key={skill} className='px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {['HTML', 'CSS', 'Tailwind CSS', 'React.js'].map((skill) => (
                    <span key={skill} className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {['Node.js', 'Express.js'].map((skill) => (
                    <span key={skill} className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-3'>Database & Tools</h3>
                <div className='flex flex-wrap gap-2'>
                  {['SQL', 'MongoDB', 'Git', 'Figma', 'VS Code', 'Postman'].map((skill) => (
                    <span key={skill} className='px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium'>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className='flex items-center mb-6'>
              <div className='w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mr-4'>
                <svg className='w-6 h-6 text-yellow-600 dark:text-yellow-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
                </svg>
              </div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>Certifications</h2>
            </div>
            <div className='space-y-3'>
              {[
                { name: 'Programming in Java', issuer: 'NPTEL', year: '2025' },
                { name: 'Full Stack Development Bootcamp', issuer: 'Udemy', year: '2024' },
                { name: 'MERN Stack Certification', issuer: 'FacePrep', year: '2024' }
              ].map((cert, index) => (
                <div key={index} className='flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg'>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{cert.name}</h3>
                    <p className='text-gray-600 dark:text-gray-300'>{cert.issuer}</p>
                  </div>
                  <span className='px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium'>
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Hobbies Section */}
          <motion.section className='bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg'
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.25 }}>
            <div className='flex items-center mb-4'>
              <div className='w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4'>
                <svg className='w-6 h-6 text-pink-600 dark:text-pink-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
              </div>
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>Hobbies & Interests</h2>
            </div>
            <div className='flex flex-wrap gap-4'>
              {['Fitness', 'Travelling'].map((hobby) => (
                <span key={hobby} className='px-6 py-3 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-lg font-medium'>
                  {hobby}
                </span>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </Layout>
  )
}


