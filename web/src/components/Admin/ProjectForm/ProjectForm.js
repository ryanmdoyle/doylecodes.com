import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ProjectForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.project?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.project?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.project?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="technologies"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Technologies
        </Label>
        <TextField
          name="technologies"
          defaultValue={props.project?.technologies}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="technologies" className="rw-field-error" />

        <Label
          name="imageLink"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image link
        </Label>
        <TextField
          name="imageLink"
          defaultValue={props.project?.imageLink}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="imageLink" className="rw-field-error" />

        <Label
          name="github"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Github
        </Label>
        <TextField
          name="github"
          defaultValue={props.project?.github}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="github" className="rw-field-error" />

        <Label
          name="href"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Href
        </Label>
        <TextField
          name="href"
          defaultValue={props.project?.href}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="href" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm
