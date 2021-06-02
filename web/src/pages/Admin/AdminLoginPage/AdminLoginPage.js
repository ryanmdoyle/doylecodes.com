import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const AdminLoginPage = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()
  return (
    <div className="h-48 flex justify-center items-center">
      {!isAuthenticated && (
        <button
          className="w-24 h-8 flex justify-center items-center bg-purpleLight hover:bg-purpleDark text-white rounded-md"
          onClick={logIn}
        >
          Login
        </button>
      )}
      {isAuthenticated && (
        <>
          <button
            className="px-2 h-8 flex justify-center items-center bg-purpleLight hover:bg-purpleDark text-white rounded-md"
            onClick={logIn}
          >
            Edit Projects
          </button>
          <br></br>
          <button
            className="px-2 h-8 flex justify-center items-center bg-purpleLight hover:bg-purpleDark text-white rounded-md"
            onClick={logOut}
          >
            Logout
          </button>
        </>
      )}
    </div>
  )
}

export default AdminLoginPage
