import { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import { useParams } from "react-router-dom";
import LeagueTable from '../../components/LeagueTable';
import Stats from '../../components/Stats';

export default function PreviousYear({ year }) {
    const { id } = useParams() 
    const { fetchUserData } = useAxios()
    const [data, setData] = useState(null)
    let urlParam = ''

    year ? urlParam = year : urlParam = id

    useEffect(() => {
      const getData = async () => {
        const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data/`, urlParam)
        setData(res.data)
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


