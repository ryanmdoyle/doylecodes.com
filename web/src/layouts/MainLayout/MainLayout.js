import SiteHeader from 'src/components/SiteHeader/SiteHeader'
import Nav from 'src/components/Nav/Nav'

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-whiteSoft site-background">
      <div className="container mx-auto h-full py-8">
        <SiteHeader />
        {children}
        <Nav />
      </div>
    </div>
  )
}

export default MainLayout
