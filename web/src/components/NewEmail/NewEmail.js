import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import EmailForm from 'src/components/EmailForm'

import { QUERY } from 'src/components/EmailsCell'

const CREATE_EMAIL_MUTATION = gql`
  mutation CreateEmailMutation($input: CreateEmailInput!) {
    createEmail(input: $input) {
      id
    }
  }
`

const NewEmail = () => {
  const [createEmail, { loading, error }] = useMutation(CREATE_EMAIL_MUTATION, {
    onCompleted: () => {
      toast.success('Email created')
      navigate(routes.emails())
    },
  })

  const onSave = (input) => {
    createEmail({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Email</h2>
      </header>
      <div className="rw-segment-main">
        <EmailForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewEmail
