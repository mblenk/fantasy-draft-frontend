import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import { useAuthContext } from '../../hooks/useAuthContext'
import LeagueTable from '../../components/LeagueTable'
import AveragePositions from './AveragePositions'

export default function AllTimeTable() {
    const { fetchUserData } = useAxios()
    const [data, setData] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data?type=table`, "")
                setData(res.data)
            } catch (error) {
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
        <div className="w-full lg:flex justify-between gap-4">
            { data && <LeagueTable data={data.tableData} season={'All-Time'} />}
            { data && <AveragePositions data={data.positionData} />}
        </div>
    </div>
  )
}
