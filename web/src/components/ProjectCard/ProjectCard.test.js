import { render } from '@redwoodjs/testing'

import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectCard />)
    }).not.toThrow()
  })
})
