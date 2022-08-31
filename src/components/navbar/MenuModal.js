import { useState } from 'react'
import menuClose from '../../assets/close_menu.png'
import NavMenu from './NavMenu'


export default function MenuModal({ setBurgerMenu, navOptions, burgerMenu }) {

  const [fadeOut, setFadeOut] = useState(false)

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      setBurgerMenu(false)
    }, 400)
  }

  return (
        <div className={`fixed top-0 left-0 flex items-center justify-center z-10 w-full h-full bg-black/70 animate-fadein ${ fadeOut ? "animate-fadeout" : "animate-fadein" }`}>
            <div className="bg-primary lg:my-12 p-4 w-3/4 h-5/6 lg:w-3/4 lg:h-3/4 rounded-xl relative lg:flex lg:gap-4 border-secondary border-8 flex justify-center items-center overflow-y-auto">
                <NavMenu navOptions={navOptions} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
                <button className="absolute top-2 right-2" onClick={handleClick}>
                  <img src={menuClose} alt="" height="40" width="40" />
                </button>
            </div>
        </div>
  )
}