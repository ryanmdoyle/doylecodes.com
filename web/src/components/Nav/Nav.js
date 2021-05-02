import { NavLink, routes } from '@redwoodjs/router'

const Nav = () => {
  return (
    <div className="flex justify-center items-center absolute container w-full bottom-8">
      <nav className="flex justify-between items-center w-2/3 lg:w-1/2 font-display text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-purpleLight">
        <NavLink
          to={routes.work()}
          className="border-b-4 border-transparent hover:border-gold"
          activeClassName="border-gold"
        >
          Work
        </NavLink>
        <span>|</span>
        <NavLink
          to={routes.welcome()}
          className="border-b-4 border-transparent hover:border-gold"
          activeClassName="border-gold"
        >
          About
        </NavLink>
        <span>|</span>
        <NavLink
          to={routes.contact()}
          className="border-b-4 border-transparent hover:border-gold"
          activeClassName="border-gold"
        >
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
