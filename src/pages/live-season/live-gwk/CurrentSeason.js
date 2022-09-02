import React, { useEffect, useState } from 'react'
import { useAxios } from '../../../hooks/useAxios'
import { useAuthContext } from '../../../hooks/useAuthContext'
import PreviousYear from '../../years/Year'

export default function CurrentSeason() {
  const { fetchUserData, updateUserData } = useAxios()
  const [data, setData] = useState(null)
  const [latestGameweek, setLatestGameweek] = useState(null)
  const { playerIds } = useAuthContext()

  
  useEffect(() => {
    const getData = async () => {
      const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/liveStats`, "")
      const { current_event, current_event_finished } = res.data.gwkStatus
      const update = await updateUserData(`${process.env.REACT_APP_API_URL}/liveData/updateScores`, "" , {
        playerIds,
        number: current_event,
        finished: current_event_finished
      })
      current_event_finished ? setLatestGameweek(current_event) : setLatestGameweek(current_event - 1)
      setData(res.data)
    }
    getData()
  }, [])

  return (
    <div className='mx-auto text-tertiary animate-fadein'>
      { !data && <h2 className='lg:w-5/6 mx-auto text-2xl'>Fetching data...</h2>}
      { data && 
        <div className='animate-fadein'>
          <h2 className='w-5/6 mx-auto mb-6 text-lg text-center'>Stats on this page do not include active gameweeks - the latest gameweek included in these stats is GWK {latestGameweek}</h2>
          <PreviousYear year={'2022-23'} />  
        </div>
      }
    </div>
  )
}
