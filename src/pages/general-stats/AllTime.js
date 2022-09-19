import React, { useState, useEffect } from 'react'
import LeagueTable from '../../components/LeagueTable'
import { useAxios } from '../../hooks/useAxios'
import Stats from '../../components/Stats'

export default function AllTime() {
  const { fetchUserData } = useAxios()
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data?type=stats`, "")
      setData(res.data)
    }
    getData()
  }, [])


  return (
    <div className='w-11/12 lg:w-5/6 mx-auto'>
      { data && 
        <div className='lg:flex justify-between gap-8'>
          <LeagueTable 
            data={data}
            season={'Total Scores'}
          />
          <Stats 
            data={data} 
            title={'All-Time Stats'}
            subtitleOne={'Average Position (Total Score)'}
            subtitleTwo={'Weeks at the Top'}
            subtitleThree={'Weeks at the Bottom'}
          />   
        </div>
      }
    </div>
  )
}
