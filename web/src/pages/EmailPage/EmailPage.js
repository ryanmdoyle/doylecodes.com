import EmailsLayout from 'src/layouts/EmailsLayout'
import EmailCell from 'src/components/EmailCell'

const EmailPage = ({ id }) => {
  return (
    <EmailsLayout>
      <EmailCell id={id} />
    </EmailsLayout>
  )
}

export default EmailPage
