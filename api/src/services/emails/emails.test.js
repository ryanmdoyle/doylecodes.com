import { emails, email, createEmail, updateEmail, deleteEmail } from './emails'

describe('emails', () => {
  scenario('returns all emails', async (scenario) => {
    const result = await emails()

    expect(result.length).toEqual(Object.keys(scenario.email).length)
  })

  scenario('returns a single email', async (scenario) => {
    const result = await email({ id: scenario.email.one.id })

    expect(result).toEqual(scenario.email.one)
  })

  scenario('creates a email', async (scenario) => {
    const result = await createEmail({
      input: { from: 'String', subject: 'String', content: 'String' },
    })

    expect(result.from).toEqual('String')
    expect(result.subject).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a email', async (scenario) => {
    const original = await email({ id: scenario.email.one.id })
    const result = await updateEmail({
      id: original.id,
      input: { from: 'String2' },
    })

    expect(result.from).toEqual('String2')
  })

  scenario('deletes a email', async (scenario) => {
    const original = await deleteEmail({ id: scenario.email.one.id })
    const result = await email({ id: original.id })

    expect(result).toEqual(null)
  })
})
