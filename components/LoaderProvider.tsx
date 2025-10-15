import React, { createContext, useContext, useState, useCallback } from 'react'
import { Loading } from './Loading'

interface LoaderContextType {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
  withLoading: (asyncFunction: () => Promise<any>, minDelay?: number) => Promise<any>
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined)

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const withLoading = useCallback(
    async (
      asyncFunction: () => Promise<any>,
      minDelay: number = 300
    ): Promise<any> => {
      startLoading()
      
      try {
        const [result] = await Promise.all([
          asyncFunction(),
          new Promise(resolve => setTimeout(resolve, minDelay))
        ])
        return result
      } finally {
        stopLoading()
      }
    },
    [startLoading, stopLoading]
  )

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading, withLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider')
  }
  return context
}
