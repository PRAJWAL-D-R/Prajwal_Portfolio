import Layout from '@/components/Layout'

export default function Custom404() {
  return (
    <Layout>
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 dark:text-white mb-4'>404</h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>Page Not Found</p>
          <a 
            href='/' 
            className='inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200'
          >
            Go Home
          </a>
        </div>
      </main>
    </Layout>
  )
}
