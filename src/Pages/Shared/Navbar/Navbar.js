import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const menuItems = (
    <>
      <li>
        <Link className="rounded-lg m-1" to="/">
          Home
        </Link>
        <Link className="rounded-lg m-1">Catagories</Link>
        <Link className="rounded-lg m-1">Products</Link>
        <Link className="rounded-lg m-1" to="/blogs">
          Blog
        </Link>
        <Link className="rounded-lg m-1">FAQ</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <p className="btn btn-ghost normal-case text-xl">Pacific Pic</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <Link to="/dashboard" className="btn mx-2 btn-outline btn-accent btn-sm">
                DashBoard
              </Link>
              <button onClick={logOut} className="btn btn-outline btn-accent btn-sm mr-5">
                Log Out
              </button>
            </>
          ) : (
            <Link className="btn btn-outline btn-accent btn-sm mr-2" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
