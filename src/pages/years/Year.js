import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useParams } from "react-router-dom";
import LeagueTable from '../../components/LeagueTable';
import Stats from '../../components/Stats';

export default function PreviousYear({ year }) {
    const { id } = useParams() 
    const { fetchUserData } = useAxios()
    const [data, setData] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()
    let urlParam = ''

    year ? urlParam = year : urlParam = id

    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data/`, urlParam)
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
    }, [id])

  return (
    <div className='w-11/12 lg:w-5/6 mx-auto'> 
      { data && 
        <div className='lg:flex justify-between gap-8'>
          <LeagueTable data={data} season={urlParam} /> 
          <Stats 
            data={data} 
            title={'Season Stats:'}
            subtitleOne={'Average Position'}
            subtitleTwo={'Weeks at the Top'}
            subtitleThree={'Weeks at the Bottom'}
          />
        </div>     
      }
    </div>
  )
}


