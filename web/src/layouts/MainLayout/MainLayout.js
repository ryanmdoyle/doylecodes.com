import SiteHeader from 'src/components/SiteHeader/SiteHeader'

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto h-full py-8">
        <SiteHeader />
        {children}
      </div>
    </div>
  )
}

export default MainLayout
