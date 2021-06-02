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
          name="name"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="block mt-4 text-red-600 font-body text-lg"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.email?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError
          name="name"
          className="text-red-600 font-body text-sm uppercase"
        />

        <Label
          name="email"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="block mt-4 text-red-600 font-body text-lg"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.email?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: true,
            pattern:
              // eslint-disable-next-line no-control-regex
              /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
          }}
        />
        <FieldError
          name="email"
          className="text-red-600 font-body text-sm uppercase"
        />

        <Label
          name="subject"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="block mt-4 text-red-600 font-body text-lg"
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
        <FieldError
          name="subject"
          className="text-red-600 font-body text-sm uppercase"
        />

        <Label
          name="content"
          className="block mt-4 text-purpleLight font-body text-lg"
          errorClassName="block mt-4 text-red-600 font-body text-lg"
        >
          Message
        </Label>
        <TextAreaField
          name="content"
          defaultValue={props.email?.content}
          className="rw-input h-56"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError
          name="content"
          className="text-red-600 font-body text-sm uppercase"
        />

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
