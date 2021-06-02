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
      toast.success('Email sent. Thanks!')
      navigate(routes.welcome())
    },
  })

  const onSave = (input) => {
    createEmail({ variables: { input } })
  }

  return (
    <div className=" p-4">
      <h2 className="font-display text-purpleLight font-bold text-center text-3xl">
        Get in touch!
      </h2>

      <EmailForm onSave={onSave} loading={loading} error={error} />
    </div>
  )
}

export default NewEmail
