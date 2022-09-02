import { useState, useEffect } from 'react'
import { useAxios } from '../../../hooks/useAxios'
import SquadStats from './SquadStats'
import SquadTotals from './SquadTotals'


export default function Squads() {
    const [data, setData] = useState(null)
    const { fetchUserData } = useAxios()


    useEffect(() => {
        const getData = async () => {
        const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/liveStats`, "")
        setData(res.data)
        }
        getData()
    }, [])


  return (
    <div className='w-5/6 mx-auto text-tertiary mb-12'>
        { !data && <h2 className='text-2xl'>Fetching Data...</h2>}
        { data && 
          <div  className='animate-fadein'>
            <div className='lg:flex gap-8 mb-6'>
              <SquadTotals data={data} type={'squad'} />  
              <SquadTotals data={data} type={'onBench'} />  
            </div>
            <SquadStats data={data.squadScores} />
          </div>
        }
    </div>
  )
}
