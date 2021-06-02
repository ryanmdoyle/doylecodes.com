import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/EmailsCell'

const DELETE_EMAIL_MUTATION = gql`
  mutation DeleteEmailMutation($id: String!) {
    deleteEmail(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Email = ({ email }) => {
  const [deleteEmail] = useMutation(DELETE_EMAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Email deleted')
      navigate(routes.emails())
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete email ' + id + '?')) {
      deleteEmail({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Email {email.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{email.id}</td>
            </tr>
            <tr>
              <th>From</th>
              <td>{email.email}</td>
            </tr>
            <tr>
              <th>Subject</th>
              <td>{email.subject}</td>
            </tr>
            <tr>
              <th>Content</th>
              <td>{email.content}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editEmail({ id: email.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(email.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Email
