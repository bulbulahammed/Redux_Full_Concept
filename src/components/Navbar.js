import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <Link className="justify-between">No-Redux
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </Link>
                        <ul className="p-2 bg-primary text-white">
                            <li><Link to="/useState">UseState</Link></li>
                            <li><Link to="/parentToChild">PtoChild</Link></li>
                            <li><Link to="/longForm">Long Form</Link></li>
                            <li><Link to="/shortForm">Short Form</Link></li>
                        </ul>
                    </li>
                    <li tabIndex={0}>
                        <Link className="justify-between">Redux
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </Link>
                        <ul className="p-2 bg-primary text-white">
                            <li><Link to="/">Submenu 1</Link></li>
                            <li><Link to="/">Submenu 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Redux</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to="/">Home</Link></li>
                <li tabIndex={0}>
                    <Link to="/">No-Redux
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>
                    <ul className="p-2 bg-primary text-white">
                        <li><Link to="/useState">useState</Link></li>
                        <li><Link to="/parentToChild">PtoChild</Link></li>
                        <li><Link to="/longForm">Long Form</Link></li>
                            <li><Link to="/shortForm">Short Form</Link></li>
                    </ul>
                </li>
                <li tabIndex={0}>
                    <Link to="/">Redux
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </Link>
                    <ul className="p-2 bg-primary text-white">
                        <li><Link to="/">Submenu 1</Link></li>
                        <li><Link to="/">Submenu 2</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar















{/* <div className="navbar bg-primary text-white">
<div className="navbar-start">
    <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary text-white rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <ul>
            <li><Link to="/">Submenu</Link></li>
        </ul>
    </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-xl">Redux</Link>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link to="/">Home</Link></li>
    </ul>
</div>
</div> */}