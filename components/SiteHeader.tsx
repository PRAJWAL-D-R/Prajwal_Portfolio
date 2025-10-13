import cs from 'classnames'
import NextLink from 'next/link'
import * as React from 'react'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import { navigationLinks } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const [hasMounted, setHasMounted] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  
  const toggle = () => setOpen((v) => !v)

  const onToggleDarkMode = React.useCallback(
    (e: any) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cs(
        'w-full sticky top-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200 dark:border-gray-700' 
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50'
      )}
    >
      <div className='max-w-6xl mx-auto px-4 sm:px-5 lg:px-6'>
        <div className='flex items-center justify-between h-14'>
          {/* Logo with gradient animation */}
          <NextLink 
            href='/' 
            className='text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 dark:hover:from-purple-400 dark:hover:to-blue-400 transition-all duration-300 transform hover:scale-105'
          >
            Prajwal D R
          </NextLink>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-0.5'>
            {navigationLinks?.map((l, i) => {
              if (!l) return null
              const href = l.pageId ? '#' : l.url || '#'
              if (!href.startsWith('/')) return null
              return (
                <NextLink 
                  key={i} 
                  href={href} 
                  className='relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 px-3 py-1.5 rounded-md hover:bg-gray-100/80 dark:hover:bg-gray-800/80 group overflow-hidden'
                >
                  <span className='relative z-10'>{l.title}</span>
                  <span className='absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out'></span>
                </NextLink>
              )
            })}
            
            {/* Theme Toggle in Desktop Nav */}
            {hasMounted && (
              <button
                onClick={onToggleDarkMode}
                className='relative ml-1.5 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group overflow-hidden'
                title='Toggle dark mode'
                aria-label='Toggle dark mode'
              >
                <span className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg'></span>
                <span className='relative z-10 block transition-transform duration-500 group-hover:rotate-180'>
                  {isDarkMode ? <IoMoonSharp className='w-5 h-5' /> : <IoSunnyOutline className='w-5 h-5' />}
                </span>
              </button>
            )}
          </nav>

          {/* Mobile menu button and theme toggle */}
          <div className='md:hidden flex items-center space-x-1.5'>
            {hasMounted && (
              <button
                onClick={onToggleDarkMode}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300'
                aria-label='Toggle dark mode'
              >
                <span className='transition-transform duration-500 hover:rotate-180 block'>
                  {isDarkMode ? <IoMoonSharp className='w-5 h-5' /> : <IoSunnyOutline className='w-5 h-5' />}
                </span>
              </button>
            )}
            
            <button
              onClick={toggle}
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300'
              aria-expanded={open}
              aria-label='Toggle navigation menu'
            >
              <span className='sr-only'>Open main menu</span>
              {/* Animated Hamburger/Close icon */}
              <div className='w-6 h-6 flex flex-col justify-center items-center'>
                <span className={cs(
                  'block w-6 h-0.5 bg-current transition-all duration-300 ease-out',
                  open ? 'rotate-45 translate-y-0.5' : '-translate-y-1.5'
                )}></span>
                <span className={cs(
                  'block w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1',
                  open ? 'opacity-0' : 'opacity-100'
                )}></span>
                <span className={cs(
                  'block w-6 h-0.5 bg-current transition-all duration-300 ease-out',
                  open ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5'
                )}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with slide-down animation */}
        <div 
          className={cs(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className='px-2 pt-1.5 pb-2 space-y-1 sm:px-3 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-gray-700'>
            {navigationLinks?.map((l, i) => {
              if (!l) return null
              const href = l.pageId ? '#' : l.url || '#'
              if (!href.startsWith('/')) return null
              return (
                <NextLink
                  key={i}
                  href={href}
                  className='block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-700 rounded-md transition-all duration-200 transform hover:translate-x-1'
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {l.title}
                </NextLink>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}