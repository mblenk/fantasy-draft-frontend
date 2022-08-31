import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

export default function NavOptions({ options, showDropdown, setShowDropdown, setBurgerMenu }) {
    
    const handleDropdown = () => {
        showDropdown === options.title ? setShowDropdown(false) : setShowDropdown(options.title)
    }

  return (
    <li className="relative hover:underline hover:decoration-tertiary hover:underline-offset-2">
        {options.submenu ? (
        <>
            <button type="button" aria-haspopup="menu" onClick={handleDropdown} className={`${showDropdown === options.title ? "lg:transition ease-in text-tertiary lg:border-2 lg:border-b-0 lg:border-tertiary lg:rounded-t-lg duration-200" : ""} flex p-2 font-semibold text-lg`}>
                {options.title}{" "}
            </button>
            <Dropdown submenus={options.submenu} showDropdown={showDropdown} setShowDropdown={setShowDropdown} name={options.title} setBurgerMenu={setBurgerMenu} />
        </>
        ) : (
            <NavLink to={options.url} className={`flex p-2 font-semibold text-lg`}>{options.title}</NavLink>
        )}
   </li>
  )
}
