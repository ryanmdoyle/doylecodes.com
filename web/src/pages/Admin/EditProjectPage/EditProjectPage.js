import ProjectsLayout from 'src/layouts/Admin/ProjectsLayout'
import EditProjectCell from 'src/components/Admin/EditProjectCell'

const EditProjectPage = ({ id }) => {
  return (
    <ProjectsLayout>
      <EditProjectCell id={id} />
    </ProjectsLayout>
  )
}

export default EditProjectPage
