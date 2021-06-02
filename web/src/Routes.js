// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

import AdminLoginPage from 'src/pages/Admin/AdminLoginPage/AdminLoginPage'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route notfound page={NotFoundPage} />
        <Route path="/" page={WelcomePage} name="welcome" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/work" page={WorkPage} name="work" />
      </Set>
      <Private unauthenticated="welcome" role={['ADMIN']}>
        <Route path="/admin/login" page={AdminLoginPage} name="login" />
        <Route path="/emails/new" page={NewEmailPage} name="newEmail" />
        <Route path="/emails/{id}/edit" page={EditEmailPage} name="editEmail" />
        <Route path="/emails/{id}" page={EmailPage} name="email" />
        <Route path="/emails" page={EmailsPage} name="emails" />
        <Route path="/admin/projects/new" page={AdminNewProjectPage} name="adminNewProject" />
        <Route path="/admin/projects/{id}/edit" page={AdminEditProjectPage} name="adminEditProject" />
        <Route path="/admin/projects/{id}" page={AdminProjectPage} name="adminProject" />
        <Route path="/admin/projects" page={AdminProjectsPage} name="adminProjects" />
      </Private>
    </Router>
  )
}

export default Routes
