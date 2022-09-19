import React, { useEffect, useState } from 'react'
import { useAxios } from '../../../hooks/useAxios'
import CurrentMonth from './CurrentMonth'
import MonthlyWinners from './MonthlyWinners'


export default function Months() {
    const [data, setData] = useState(null)
    const { fetchUserData } = useAxios()


    useEffect(() => {
        const getData = async () => {
            const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/getAndUpdateMonths`, "")
            setData(res.data)
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
