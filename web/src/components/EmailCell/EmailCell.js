import Email from 'src/components/Email'

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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Email not found</div>

export const Success = ({ email }) => {
  return <Email email={email} />
}
