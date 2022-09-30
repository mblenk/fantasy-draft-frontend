import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LeagueTable from '../../components/LeagueTable'
import { useAxios } from '../../hooks/useAxios'
import { useAuthContext } from '../../hooks/useAuthContext'
import Stats from '../../components/Stats'

export default function AllTime() {
  const { fetchUserData } = useAxios()
  const [data, setData] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data?type=stats`, "")
        setData(res.data)
      } catch (error) {
        console.log(error.message)

        if(error.message === 'Cannot destructure property \'token\' of \'JSON.parse(...)\' as it is null.' || error.message === 'Cannot read properties of null (reading \'token\')'){
          dispatch({ type: 'LOGOUT' })
          navigate('/login')
          alert('Your login session has expired.')
        }
      }
      
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
