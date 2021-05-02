import { Link, routes } from '@redwoodjs/router'

const WelcomePage = () => {
  return (
    <>
      <p>
        Find me in <code>./web/src/pages/WelcomePage/WelcomePage.js</code>
      </p>
      <p>
        My default route is named <code>welcome</code>, link to me with `
        <Link to={routes.welcome()}>Welcome</Link>`
      </p>
    </>
  )
}

export default WelcomePage
