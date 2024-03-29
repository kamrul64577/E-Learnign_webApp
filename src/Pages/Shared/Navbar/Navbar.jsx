import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const MenuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
    </React.Fragment>


    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="bg-neutral menu menu-compact dropdown-content mt-2  p-2 shadow  w-52">
                        {MenuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">LearnWithUs</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {MenuItems}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
