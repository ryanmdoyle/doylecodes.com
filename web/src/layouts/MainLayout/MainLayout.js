import { Toaster } from '@redwoodjs/web/toast'

import SiteHeader from 'src/components/SiteHeader/SiteHeader'
import Nav from 'src/components/Nav/Nav'

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-whiteSoft site-background flex flex-col">
      <Toaster
        position="top-right"
        toastOptions={{ success: { duration: 5000 } }}
      />
      <div className="mt-8">
        <SiteHeader />
      </div>
      <div className="container mx-auto h-full p-8 overflow-y-scroll">
        {children}
      </div>
      <div>
        <Nav />
      </div>
    </div>
  )
}

export default MainLayout
