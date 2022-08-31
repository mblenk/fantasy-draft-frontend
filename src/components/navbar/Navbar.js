import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'
import menu from '../../assets/menu.png'
import MenuModal from './MenuModal'
import NavMenu from './NavMenu'

export default function Navbar() {
    const { user } = useAuthContext()
    const [burgerMenu, setBurgerMenu] = useState(false)

    const navOptions = [
        {
            title: "Current Season",
            submenu: [  
                {
                    title:"Live GWK",
                    url:"/live-gameweek"
                },
                {
                    title:"Stats",
                    url:"/current-season-stats"
                },
                {
                    title:"Months",
                    url:"/monthly_standings"
                },
                {
                    title:"Transfers",
                    url:"/transfers"
                },
                {
                    title:"Squads",
                    url:"/squad_stats"
                }
            ]
        },
        {
            title: "Previous Seasons",
            submenu: [
                {
                    title:"2017-18",
                    url:"year/2017-18"
                },
                {
                    title:"2018-19",
                    url:"year/2018-19"
                },
                {
                    title:"2019-20",
                    url:"year/2019-20"
                },
                {
                    title:"2020-21",
                    url:"year/2020-21"
                },
                {
                    title:"2021-22",
                    url:"year/2021-22"
                },
                // {
                //     title:"2022-23",
                //     url:"year/2022-23"
                // }
            ]
        },
        {
            title: "General Stats",
            submenu: [
                {
                    title:"All-Time",
                    url:"all-time"
                },
                {
                    title:"Table",
                    url:"all-time-league-table"
                }
            ]
        },
        {
            title: "Transfer History",
            submenu: [
                {
                    title:"2022-23",
                    url:"transfers/2022-23"
                }
            ]
        },
    ]

  return (
    <div className='flex text-center justify-between items-center bg-primary text-secondary border-b-2 border-b-tertiary p-4 lg:p-8 lg:w-5/6 lg:mx-auto mb-4 relative'>
        <NavLink to="/">
            <span className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-0 text-tertiary">Fantasy Draft</span>
        </NavLink>
        <img src={menu} alt="menu icon" className='h-10 lg:hidden animate-fadein' onClick={() => setBurgerMenu(true)}/>
        { user && 
            <>
                <NavMenu navOptions={navOptions} setBurgerMenu={setBurgerMenu} />
                { burgerMenu && 
                    <MenuModal 
                        burgerMenu={burgerMenu}
                        setBurgerMenu={setBurgerMenu} 
                        navOptions={navOptions} 
                    /> 
                }
            </>
        }
    </div>
  )
}

