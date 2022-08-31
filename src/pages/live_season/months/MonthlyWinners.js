import React from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'
import RankingRow from './RankingRow'

export default function MonthlyWinners({ months }) {
    const { playerIds } = useAuthContext()


  return (
    <div className='overflow-x-auto mb-12'>
        <h2 className='text-2xl underline mb-2 text-center'>Monthly Rankings;</h2>
        <table className='text-center'>
            <thead>
                <tr className=''>
                    <th className='p-2 border-4 border-secondary w-2/12'>Rank</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Aug</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Sept</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Oct</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Nov</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Dec</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Jan</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Feb</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Mar</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Apr</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>May</th>
                </tr>
            </thead>
            <tbody>
                { playerIds.map((player, index) => (
                    <RankingRow index={index} months={months} key={Math.random()} />
                ))}
            </tbody>
        </table>
    </div>
  )
}
