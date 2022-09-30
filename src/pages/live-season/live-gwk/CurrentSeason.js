import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../../hooks/useAxios'
import { useAuthContext } from '../../../hooks/useAuthContext'
import PreviousYear from '../../years/Year'

export default function CurrentSeason() {
  const { fetchUserData, updateUserData } = useAxios()
  const [data, setData] = useState(null)
  const [latestGameweek, setLatestGameweek] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/liveStats`, "")
        const { current_event, current_event_finished } = res.data.gwkStatus
        const update = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/updateScores`, "")
        current_event_finished ? setLatestGameweek(current_event) : setLatestGameweek(current_event - 1)
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
