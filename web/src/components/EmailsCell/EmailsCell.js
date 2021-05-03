import { Link, routes } from '@redwoodjs/router'

import Emails from 'src/components/Emails'

export const QUERY = gql`
  query EMAILS {
    emails {
      id
      from
      subject
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No emails yet. '}
      <Link to={routes.newEmail()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ emails }) => {
  return <Emails emails={emails} />
}
