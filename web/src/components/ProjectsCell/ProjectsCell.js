import ProjectCard from 'src/components/ProjectCard/ProjectCard'
export const QUERY = gql`
  query ProjectsQuery {
    projects {
      id
      title
      description
      technologies
      imageLink
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
  return projects.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        id={project.id}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        imageLink={project.imageLink}
        github={project.github}
        href={project.href}
      />
    )
  })
}
