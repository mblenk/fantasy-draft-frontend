import React, { useState, useEffect } from 'react'
import { useAxios } from '../../hooks/useAxios'
import LeagueTable from '../../components/LeagueTable'
import AveragePositions from './AveragePositions'

export default function AllTimeTable() {
    const { fetchUserData } = useAxios()
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const res = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data?type=table`, "")
            setData(res.data)
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
