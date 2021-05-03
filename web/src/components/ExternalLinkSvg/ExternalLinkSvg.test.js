import { render } from '@redwoodjs/testing'

import ExternalLinkSVG from './ExternalLinkSVG'

describe('ExternalLinkSVG', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExternalLinkSVG />)
    }).not.toThrow()
  })
})
