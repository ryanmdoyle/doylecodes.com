export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      title
      description
      technologies
      github
      href
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ projects }) => {
  return <div>{JSON.stringify(projects)}</div>
}
