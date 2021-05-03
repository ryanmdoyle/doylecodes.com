import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const EmailsLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.emails()} className="rw-link">
            Emails
          </Link>
        </h1>
        <Link to={routes.newEmail()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Email
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default EmailsLayout
