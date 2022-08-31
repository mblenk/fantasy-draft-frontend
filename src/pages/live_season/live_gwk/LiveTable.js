import React from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'

export default function LiveTable({ data }) {
    const { leagueDetails, gwkStatus } = data
    const { playerIds } = useAuthContext()


  return (
    <div>
        <h2 className='underline text-xl mb-2 text-center'>Live Table - GWK {gwkStatus.current_event}</h2>
        <table className='text-center'>
            <thead>
                <tr className=''>
                    <th className='p-2 border-4 border-secondary w-2/12'>Rank</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Player</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>GWK</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Total</th>
                </tr>
            </thead>
            <tbody>
            { leagueDetails.standings.map((item, i) => {
                const findPlayer = playerIds.filter(entry => entry.id === item.league_entry)
                const name = findPlayer[0].name
                
                return (
                    <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary w-2/12'>{item.rank}</td>
                        <td className='p-2 border-4 border-secondary w-2/12'>{name}</td>
                        <td className='p-2 border-4 border-secondary w-2/12'>{item.event_total}</td>
                        <td className='p-2 border-4 border-secondary w-2/12'>{item.total}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}
