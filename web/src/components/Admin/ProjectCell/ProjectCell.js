import Project from 'src/components/Admin/Project'

export const QUERY = gql`
  query FIND_PROJECT_BY_ID($id: String!) {
    project: project(id: $id) {
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

export const Empty = () => <div>Project not found</div>

export const Success = ({ project }) => {
  return <Project project={project} />
}
