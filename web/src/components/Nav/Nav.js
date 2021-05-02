import { Link, routes } from '@redwoodjs/router'

const Nav = () => {
  return (
    <div className="flex justify-center items-center absolute container w-full bottom-8">
      <nav className="flex justify-between items-center w-2/3 lg:w-1/2 font-display text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-purpleLight">
        <Link to={routes.welcome()}>About</Link>
        <span>|</span>
        <Link to={routes.work()}>Work</Link>
        <span>|</span>
        <Link to={routes.contact()}>Contact</Link>
      </nav>
    </div>
  )
}

export default Nav
