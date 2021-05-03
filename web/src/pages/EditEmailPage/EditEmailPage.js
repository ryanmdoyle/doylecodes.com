import EmailsLayout from 'src/layouts/EmailsLayout'
import EditEmailCell from 'src/components/EditEmailCell'

const EditEmailPage = ({ id }) => {
  return (
    <EmailsLayout>
      <EditEmailCell id={id} />
    </EmailsLayout>
  )
}

export default EditEmailPage
