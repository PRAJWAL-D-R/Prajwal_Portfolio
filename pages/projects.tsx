import Link from 'next/link'
import * as React from 'react'

import Layout from '@/components/Layout'

export default function ProjectsPage() {
  return (
    <Layout>
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800'>
        {/* Hero Section */}
        <section className='py-12 sm:py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3'>
              My Projects
            </h1>
            <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
              A showcase of my work including full-stack web applications, mobile apps, and innovative solutions built with modern technologies.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 min-h-screen'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch'>
            {/* Sahaja Krushi Project */}
            <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-green-600 dark:text-green-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Sahaja Krushi</h2>
                  <p className='text-gray-600 dark:text-gray-300'>Agricultural Management Platform</p>
                </div>
              </div>
              
              <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>May–Aug 2025</p>
              
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
                {['Node.js', 'Express.js', 'MySQL', 'React.js', 'React Native', 'Redux Toolkit', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex flex-col sm:flex-row gap-3 mt-auto'>
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
            </div>

            {/* E-Grievance System Project */}
            <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-blue-600 dark:text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>E-Grievance System</h2>
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

              <a href='https://civic-bridge-prajwalssite.netlify.app/' target='_blank' rel='noreferrer' className='w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium mt-auto'>
                <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
                Live Demo
              </a>
            </div>

            {/* Restaurant Booking System Project */}
            <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-orange-600 dark:text-orange-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 10h16M5 14h14a2 2 0 012 2v3H3v-3a2 2 0 012-2z' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Restaurant Booking System</h2>
                  <p className='text-gray-600 dark:text-gray-300'>Online Reservation & Menu Platform</p>
                </div>
              </div>

              <div className='space-y-3 mb-6'>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Users can browse food items, view categories, and book dining slots.</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Owner and kitchen views to manage reservations, orders, and preparation.</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-orange-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Location and address details with slot-based availability per branch.</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex mt-auto'>
                <a href='https://vercel-frontend-eight-mu.vercel.app/' target='_blank' rel='noreferrer' className='inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors text-sm font-medium'>
                  <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>

            {/* Smart Learning Management System Project */}
            <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-purple-600 dark:text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Smart Learning Management System</h2>
                  <p className='text-gray-600 dark:text-gray-300'>Educational Platform</p>
                </div>
              </div>
              
              <div className='space-y-3 mb-6'>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Course and certification management; assignment to employees</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Automated assessment evaluation and certificate issuance</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-purple-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Email notifications for course/assessment/certificate assignments</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {['React', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express.js', 'SQL', 'Figma'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs font-medium'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex mt-auto'>
                <span className='inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium opacity-80'>
                  Internal Platform
                </span>
              </div>
            </div>

            {/* Educational Support Platform (Societal Project) */}
            <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-teal-600 dark:text-teal-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0118 20.083 11.952 11.952 0 0012 22c-2.68 0-5.175-.934-7.16-2.517A12.083 12.083 0 015.84 10.578L12 14z' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Educational Support Platform</h2>
                  <p className='text-gray-600 dark:text-gray-300'>Societal Impact Project</p>
                </div>
              </div>

              <div className='space-y-3 mb-6'>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Connects government schools lacking facilities with donors and volunteers.</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Schools can request books, furniture, and infrastructure support.</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Donors contribute funds or items directly with transparent tracking.</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Figma'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs font-medium'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex mt-auto'>
                <span className='inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium opacity-80 cursor-not-allowed'>
                  Societal Project
                </span>
              </div>
            </div>

            {/* Customer Relationship Management System */}
            <div className='bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mr-4'>
                  <svg className='w-6 h-6 text-sky-600 dark:text-sky-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>Customer Relationship Management (CRM)</h2>
                  <p className='text-gray-600 dark:text-gray-300'>Leads, Deals, Contacts, Companies</p>
                </div>
              </div>

              <div className='space-y-3 mb-6'>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-sky-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Role-based access for sales reps, managers, and admins; manage leads, deals, contacts, and companies.</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-sky-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Pipeline tracking with integrated warehouse, inventory, and communication modules.</span>
                </div>
                <div className='flex items-start'>
                  <svg className='w-5 h-5 text-sky-500 mt-1 mr-3 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                  <span className='text-gray-700 dark:text-gray-300 text-sm'>Deal creation, assignment, follow-up reminders, reporting dashboards; qualified leads convert directly to deals.</span>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 mb-6'>
                {['React', 'Tailwind CSS', 'Redux Toolkit', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Figma'].map((tech) => (
                  <span key={tech} className='px-3 py-1 bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 rounded-full text-xs font-medium'>
                    {tech}
                  </span>
                ))}
              </div>

              <div className='flex mt-auto'>
                <span className='inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg text-sm font-medium opacity-80'>
                  In Development
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Interested in working together?
            </h2>
            <p className='text-xl text-blue-100 mb-8'>
              Let's discuss how we can bring your ideas to life with innovative solutions.
            </p>
            {/* Code-styled banner */}
            <div className='relative mx-auto mb-6 w-full max-w-2xl'>
              <div className='absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-300/50 via-blue-400/50 to-purple-500/50 blur-sm'></div>
              <div className='relative rounded-lg bg-white/10 ring-1 ring-white/20 shadow-lg overflow-hidden text-left'>
                <div className='flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border-b border-white/10'>
                  <span className='h-2 w-2 rounded-full bg-red-400/80'></span>
                  <span className='h-2 w-2 rounded-full bg-yellow-400/80'></span>
                  <span className='h-2 w-2 rounded-full bg-green-400/80'></span>
                </div>
                <div className='px-4 py-3 font-mono text-xs sm:text-sm leading-6 text-blue-50/90'>
                  <div className='mb-0.5'><span className='text-cyan-300'>const</span> project = <span className='text-purple-300'>'your-idea'</span></div>
                  <div className='mb-0.5'><span className='text-cyan-300'>const</span> stack = [<span className='text-yellow-300'>'React'</span>, <span className='text-yellow-300'>'Node'</span>, <span className='text-yellow-300'>'SQL'</span>]</div>
                  <div><span className='text-cyan-300'>deploy</span>(project, stack) <span className='text-emerald-300'>//=</span> <span className='text-emerald-300'>"production-ready"</span><span className='align-middle inline-block ml-1 h-3 w-1.5 bg-blue-200/80'></span></div>
                </div>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg'
              >
                Get In Touch
              </Link>
              <Link
                href='/about'
                className='inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200'
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>
    </main>
    </Layout>
  )
}


