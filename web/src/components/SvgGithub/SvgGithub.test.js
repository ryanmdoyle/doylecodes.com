import { render } from '@redwoodjs/testing'

import SvgGithub from './SvgGithub'

describe('SvgGithub', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SvgGithub />)
    }).not.toThrow()
  })
})
