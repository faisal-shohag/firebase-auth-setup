import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = use(AuthContext)

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        {
          !user && <>
              <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
          </> 
        }

        <li><NavLink to="/add-blog">Add Blog</NavLink></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden md:flex lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to="/">Home</NavLink></li>
     {
          !user && <>
              <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/registration">Registration</NavLink></li>
          </> 
        }
    <li><NavLink to="/add-blog">Add Blog</NavLink></li>
       
    </ul>
  </div>
  <div className="navbar-end gap-3">
    {user && <>
            <Link to="/profile"><img className="w-10 h-10 rounded-full" src={user.photoURL ? user.photoURL : 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg'}/>
</Link>
            <button className="btn btn-error btn-xs" onClick={logout}>Logout</button>
      </>}
  </div>
</div>
    );
};

export default Navbar;