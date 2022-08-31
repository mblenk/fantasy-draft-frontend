import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'


export default function LeagueTable({ data, season }) {
    const [scores, setScores] = useState(null)
    const { year } = useAuthContext()


    useEffect(() => {
        season === 'All-Time' ? setScores(data) : setScores(data.leagueTable)
    }, [data])

  return (
    <>
        { scores && <div className='text-tertiary animate-fadein lg:w-2/5 p-2 mb-12 mx-auto'>
            <div className="">
                <h2 className='text-2xl underline p-2 text-center'> League Table - { season }</h2>
                <table className='text-center'>
                    <thead>
                        <tr className=''>
                            <th className='p-2 border-4 border-secondary w-2/12'>Rank</th>
                            <th className='p-2 border-4 border-secondary w-2/12'>Player</th>
                            { season === 'All-Time' && <th className='p-2 border-4 border-secondary w-2/12'>Season</th>}
                            <th className='p-2 border-4 border-secondary w-2/12'>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        { scores.map((item, i) => (
                            <tr key={i} className=''>
                                <td className='p-2 border-4 border-secondary w-2/12'>{i + 1}</td>
                                <td className='p-2 border-4 border-secondary w-2/12'>{item.player}</td>
                                { season === 'All-Time' && <td className='p-2 border-4 border-secondary w-2/12'>{item.season}</td>}
                                { season !== 'All-Time' && <td className='p-2 border-4 border-secondary w-2/12'>{item.score}</td>}
                                { season === 'All-Time' && 
                                    <td 
                                        className={`${ item.season === year ? "bg-tertiary text-primary" : ""}  
                                        ${ item.hosed ? "bg-red-500" : "" } 
                                        ${ item.winner ? "bg-green-600" : "" } 
                                        p-2 border-4 border-secondary w-2/12`}
                                    >{item.score}</td>}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>}
    </>
  )
}


