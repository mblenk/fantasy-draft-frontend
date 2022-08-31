import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import axios from 'axios'
import NavOptions from './NavOptions'


export default function NavMenu({ navOptions, burgerMenu, setBurgerMenu }) {
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = async () => {
        await axios.get(`${process.env.REACT_APP_API_URL}/user/logout`, { 
          withCredentials: true, 
          credentials: 'include' 
        })
        localStorage.removeItem('user')
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }

  return (
    <nav className={`${ burgerMenu ? "flex flex-col gap-4 justify-center items-center animate-fadein" : "hidden lg:flex items-center justify-center text-center animate-fadein" }`}>
        <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0 justify-center list-none">
            {navOptions.map((menu, index) => {
                return <NavOptions 
                          options={menu} 
                          key={index} 
                          showDropdown={showDropdown} 
                          setShowDropdown={setShowDropdown}
                          setBurgerMenu={setBurgerMenu} 
                        />;
            })}
        </ul>
        <button 
            className='ml-2 bg-primary border-tertiary text-secondary border-2 w-3/4 lg:w-1/6 p-2 rounded-full hover:bg-tertiary hover:text-primary font-semibold'
            onClick={handleClick}
        >Logout</button>
    </nav>
  )
}
