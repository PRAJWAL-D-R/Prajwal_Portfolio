import { useState, useCallback } from 'react'

export function useLoader() {
  const [isLoading, setIsLoading] = useState(false)

  const startLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const stopLoading = useCallback(() => {
    setIsLoading(false)
  }, [])

  const withLoading = useCallback(async <T>(
    asyncFunction: () => Promise<T>,
    minDelay: number = 300
  ): Promise<T> => {
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
  }, [startLoading, stopLoading])

  return {
    isLoading,
    startLoading,
    stopLoading,
    withLoading
  }
}
