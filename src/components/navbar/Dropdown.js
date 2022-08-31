import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Dropdown({ submenus, showDropdown, setShowDropdown, name, setBurgerMenu }) {

  const handleClick = () => {
    setShowDropdown(false)
    setTimeout(() => {
      setBurgerMenu(false)
    }, 400)
  }

  return (
    <ul className={`${showDropdown === name ? "transition ease-in block duration-100" : "hidden"} w-full mx-auto lg:absolute lg:right-0 lg:left-0 z-50 bg-primary lg:border-2 lg:border-tertiary lg:rounded-b-lg`}>
        {submenus.map((submenu, index) => (
            <li key={index} className="p-2 lg:border-t-2 text-tertiary border-t-tertiary hover:bg-tertiary hover:text-primary">
                <NavLink to={submenu.url} onClick={handleClick} className='no-underline'>{submenu.title}</NavLink>
            </li>
        ))}
    </ul>
  )
}

