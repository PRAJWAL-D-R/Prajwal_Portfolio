import * as React from 'react'

import { useDarkMode } from '@/lib/use-dark-mode'

import { Footer } from './Footer'
import { SiteHeader } from './SiteHeader'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useDarkMode()

  // Mirror the theme class onto a wrapping div so Tailwind's dark: variants
  // consistently apply to all page content, not just components relying on
  // CSS variables on <body>.
  const themeClassName = isDarkMode ? 'dark-mode' : 'light-mode'

  return (
    <div className={`min-h-screen flex flex-col ${themeClassName}`}>
      <SiteHeader />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}


