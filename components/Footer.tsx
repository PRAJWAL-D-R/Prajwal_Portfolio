import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import * as React from 'react'

import * as config from '@/lib/config'

export function FooterImpl() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full max-w-[1100px] mx-auto mt-auto'>
      {/* Decorative gradient line */}
      <div className='h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-8'></div>
      
      <div className='p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm'>
        {/* Copyright with fade-in animation */}
        <div className='text-[80%] text-gray-600 dark:text-gray-400 animate-fade-in'>
          <span className='inline-block hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300'>
            © {currentYear} {config.author}
          </span>
        </div>

        {/* Social Links with staggered animations */}
        <div className='flex items-center gap-1 select-none'>
          {config.twitter && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2]/10'
              href={`https://twitter.com/${config.twitter}`}
              title={`Twitter @${config.twitter}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ animationDelay: '0ms' }}
            >
              <span className='absolute inset-0 bg-[#1DA1F2]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaTwitter className='relative z-10' />
            </a>
          )}

          {config.mastodon && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#6364FF] rounded-lg hover:bg-[#6364FF]/10'
              href={config.mastodon}
              title={`Mastodon ${config.getMastodonHandle()}`}
              rel='me'
              style={{ animationDelay: '50ms' }}
            >
              <span className='absolute inset-0 bg-[#6364FF]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaMastodon className='relative z-10' />
            </a>
          )}

          {config.zhihu && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#0066FF] rounded-lg hover:bg-[#0066FF]/10'
              href={`https://zhihu.com/people/${config.zhihu}`}
              title={`Zhihu @${config.zhihu}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ animationDelay: '100ms' }}
            >
              <span className='absolute inset-0 bg-[#0066FF]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaZhihu className='relative z-10' />
            </a>
          )}

          {config.github && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#333] dark:hover:text-white rounded-lg hover:bg-gray-900/10 dark:hover:bg-white/10'
              href={`https://github.com/${config.github}`}
              title={`GitHub @${config.github}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ animationDelay: '150ms' }}
            >
              <span className='absolute inset-0 bg-gray-900/20 dark:bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaGithub className='relative z-10' />
            </a>
          )}

          {config.linkedin && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] rounded-lg hover:bg-[#0A66C2]/10'
              href={`https://www.linkedin.com/in/${config.linkedin}`}
              title={`LinkedIn ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ animationDelay: '200ms' }}
            >
              <span className='absolute inset-0 bg-[#0A66C2]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaLinkedin className='relative z-10' />
            </a>
          )}

          {config.newsletter && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#FF6B6B] rounded-lg hover:bg-[#FF6B6B]/10'
              href={`${config.newsletter}`}
              title={`Newsletter ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ animationDelay: '250ms' }}
            >
              <span className='absolute inset-0 bg-[#FF6B6B]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaEnvelopeOpenText className='relative z-10' />
            </a>
          )}

          {config.youtube && (
            <a
              className='group relative cursor-pointer text-2xl inline-flex p-2.5 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400 hover:text-[#FF0000] rounded-lg hover:bg-[#FF0000]/10'
              href={`https://www.youtube.com/${config.youtube}`}
              title={`YouTube ${config.author}`}
              target='_blank'
              rel='noopener noreferrer'
              style={{ animationDelay: '300ms' }}
            >
              <span className='absolute inset-0 bg-[#FF0000]/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300'></span>
              <FaYoutube className='relative z-10' />
            </a>
          )}
        </div>

        {/* Optional: Made with love section */}
        <div className='text-[75%] text-gray-500 dark:text-gray-500 hidden sm:block'>
          <span className='inline-flex items-center gap-1 hover:text-red-500 transition-colors duration-300'>
            Made with <span className='animate-pulse text-red-500'>♥</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)