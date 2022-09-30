import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../../hooks/useAxios'
import CurrentMonth from './CurrentMonth'
import MonthlyWinners from './MonthlyWinners'
import { useAuthContext } from '../../../hooks/useAuthContext'


export default function Months() {
    const [data, setData] = useState(null)
    const { fetchUserData } = useAxios()
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()


    useEffect(() => {
        const getData = async () => {
            try {
            const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/getAndUpdateMonths`, "")
            setData(res.data)
        
            } catch (error) {
                console.log(error.message)

                if(error.message === 'Cannot destructure property \'token\' of \'JSON.parse(...)\' as it is null.'){
                    dispatch({ type: 'LOGOUT' })
                    navigate('/login')
                    alert('Your login session has expired.')
                }
            }
        }
        getData()
       
    }, [])


  return (
    <>
        { !data && <h2 className='text-2xl text-tertiary text-center '>Fetching Data...</h2>}
        { data && 
        <div className='text-tertiary w-5/6 mx-auto lg:flex justify-center gap-24 animate-fadein'>
            <CurrentMonth months={data} />
            <MonthlyWinners months={data} />
        </div>
        }
    </>
  )
}
