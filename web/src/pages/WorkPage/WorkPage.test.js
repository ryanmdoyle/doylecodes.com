import { render } from '@redwoodjs/testing'

import WorkPage from './WorkPage'

describe('WorkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkPage />)
    }).not.toThrow()
  })
})
