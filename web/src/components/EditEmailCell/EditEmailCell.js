import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EmailForm from 'src/components/EmailForm'

export const QUERY = gql`
  query FIND_EMAIL_BY_ID($id: String!) {
    email: email(id: $id) {
      id
      from
      subject
      content
    }
  }
`
const UPDATE_EMAIL_MUTATION = gql`
  mutation UpdateEmailMutation($id: String!, $input: UpdateEmailInput!) {
    updateEmail(id: $id, input: $input) {
      id
      from
      subject
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ email }) => {
  const [updateEmail, { loading, error }] = useMutation(UPDATE_EMAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Email updated')
      navigate(routes.emails())
    },
  })

  const onSave = (input, id) => {
    updateEmail({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Email {email.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EmailForm
          email={email}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
