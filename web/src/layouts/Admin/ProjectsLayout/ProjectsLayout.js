import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const ProjectsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.adminProjects()} className="rw-link">
            Projects
          </Link>
        </h1>
        <Link
          to={routes.adminNewProject()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Project
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default ProjectsLayout
