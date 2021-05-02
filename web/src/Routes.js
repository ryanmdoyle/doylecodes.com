// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route notfound page={NotFoundPage} />
        <Route path="/" page={WelcomePage} name="welcome" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/work" page={WorkPage} name="work" />
      </Set>
    </Router>
  )
}

export default Routes
