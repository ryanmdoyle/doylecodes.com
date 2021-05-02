import { Link, routes } from '@redwoodjs/router'

const WorkPage = () => {
  return (
    <>
      <h1>WorkPage</h1>
      <p>
        Find me in <code>./web/src/pages/WorkPage/WorkPage.js</code>
      </p>
      <p>
        My default route is named <code>work</code>, link to me with `
        <Link to={routes.work()}>Work</Link>`
      </p>
    </>
  )
}

export default WorkPage
