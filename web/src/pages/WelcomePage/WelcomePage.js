import { Link, routes } from '@redwoodjs/router'

const WelcomePage = () => {
  return (
    <div>
      <h1>WelcomePage</h1>
      <p>
        Find me in <code>./web/src/pages/WelcomePage/WelcomePage.js</code>
      </p>
      <p>
        My default route is named <code>welcome</code>, link to me with `
        <Link to={routes.welcome()}>Welcome</Link>`
      </p>
    </div>
  )
}

export default WelcomePage
