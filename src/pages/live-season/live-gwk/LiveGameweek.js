
import BonusAdded from './BonusAdded'
import React, { useEffect, useState } from 'react'
import { useAxios } from '../../../hooks/useAxios'
import LiveTable from './LiveTable'
import { useAuthContext } from '../../../hooks/useAuthContext'
import DreamTeam from './DreamTeam'
import HighestScoringPositions from './HighestScoringPositions'

export default function LiveGameweek() {
    const { fetchUserData, updateUserData } = useAxios()
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const { playerIds } = useAuthContext()
    
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/liveStats`, "")
          const update = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/updateScores`, "")
          setData(res.data)
        } catch (error) {
          setError(error.message)
        }
      }
      getData()
    }, [])

  return (
    <div className='mx-auto w-5/6 text-tertiary animate-fadein pb-6'>
        { !data && !error && <h2 className='text-2xl'>Fetching data...</h2>}
        { error && <h2 className='text-2xl'>The Fantasy Football Servers are currently updating, please try again later.</h2> }
        { data && 
            <div className='animate-fadein'>
                {/* <h2>{`Live Gameweek: GWK ${data.bonus.status[0].event}`}</h2> */}
                <div className='lg:flex gap-8 justify-between'>
                  <div className="flex flex-col gap-8">
                    <LiveTable data={data}  />
                    <BonusAdded data={data} />
                  </div>
                  <HighestScoringPositions data={data}/>
                  <DreamTeam data={data} />
                </div>
            </div> 
        }
    </div>
  )
}
