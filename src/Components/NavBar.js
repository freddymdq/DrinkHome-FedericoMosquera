import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content justify-around">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-dark lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                <li><a>Cervezas</a></li>
            <li tabIndex={0}><a className="justify-between">Vinos<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg></a>
                <ul className="p-2 bg-neutral">
                    <li><a>Tinto</a></li>
                    <li><a>Blanco</a></li>
                </ul>
            </li>
            <li><a>Whisky</a></li>
            </ul>
        </div>
        {/* LOGO */}
        <a className="btn btn-ghost normal-case text-xl">Drink Home</a>
    </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-1  rounded-box">
      <li><a className="btn btn-ghost m-1  normal-case">Cervezas</a></li>
      <li><a className="btn  btn-ghost m-1 normal-case">Whisky</a></li>
      <li tabIndex={0}>
        <a className="btn btn-ghost m-1 normal-case">Vinos
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a className="btn btn-ghost text-same normal-case">Tinto</a></li>
          <li><a className="btn btn-ghost text-same normal-case">Blanco</a></li>
        </ul>
      </li>
    </ul>
  </div>
  {/* CARTWIDGET */}
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item bg-success">5</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-neutral shadow ">
        <div class="card-body">
          <span class="font-bold text-lg text-neutral-content">5 Items</span>
          <span class="text">Total: $999</span>
          <div class="card-actions">
            <button class="btn btn-success btn-block">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

  )
}

export default NavBar