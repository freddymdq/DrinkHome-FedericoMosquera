import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content justify-around">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-dark lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                <li><a href=''>Cervezas</a></li>
            <li tabIndex={0}><a href='' className="justify-between">Vinos<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg></a>
                <ul className="p-2 bg-neutral">
                    <li><a href=''>Tinto</a></li>
                    <li><a href=''>Blanco</a></li>
                </ul>
            </li>
            <li><a href=''>Whisky</a></li>
            </ul>
        </div>
        {/* LOGO */}
        <a href='' className="btn btn-ghost normal-case text-xl">Drink Home</a>
    </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-1  rounded-box">
      <li><a href='' className="btn btn-ghost m-1  normal-case">Cervezas</a></li>
      <li><a href='' className="btn  btn-ghost m-1 normal-case">Whisky</a></li>
      <li tabIndex={0}>
        <a href='' className="btn btn-ghost m-1 normal-case">Vinos
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a href='' className="btn btn-ghost text-same normal-case">Tinto</a></li>
          <li><a href='' className="btn btn-ghost text-same normal-case">Blanco</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <CartWidget/>
    
  </div>


  )
}

export default NavBar