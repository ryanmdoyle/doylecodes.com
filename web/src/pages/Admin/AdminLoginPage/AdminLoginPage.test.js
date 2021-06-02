import { render } from '@redwoodjs/testing'

import AdminLoginPage from './AdminLoginPage'

describe('AdminLoginPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminLoginPage />)
    }).not.toThrow()
  })
})
