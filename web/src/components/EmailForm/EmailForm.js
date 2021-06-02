import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const EmailForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.email?.id)
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
          name="from"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="rw-label rw-label-error"
        >
          From
        </Label>
        <TextField
          name="from"
          defaultValue={props.email?.from}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="from" className="rw-field-error" />

        <Label
          name="subject"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="rw-label rw-label-error"
        >
          Subject
        </Label>
        <TextField
          name="subject"
          defaultValue={props.email?.subject}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="subject" className="rw-field-error" />

        <Label
          name="content"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>
        <TextAreaField
          name="content"
          defaultValue={props.email?.content}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="content" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="cursor-pointer font-body text-whiteSoft bg-purpleLight py-2 px-4 rounded-md hover:bg-gold hover:text-purpleDark"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EmailForm
