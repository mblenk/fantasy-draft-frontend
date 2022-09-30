import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../../hooks/useAxios'
import { useAuthContext } from '../../../hooks/useAuthContext'
import SquadStats from './SquadStats'
import SquadTotals from './SquadTotals'


export default function Squads() {
    const [data, setData] = useState(null)
    const { fetchUserData } = useAxios()
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
          try {
            const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/liveStats`, "")
            setData(res.data)
          } catch (error) {
            // setError(error.message)
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
