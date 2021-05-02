import SiteHeader from 'src/components/SiteHeader/SiteHeader'
import Nav from 'src/components/Nav/Nav'

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-whiteSoft site-background flex flex-col">
      <div>
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
