import React from 'react'

export default function SquadStats({ data }) {
    const { totalStats } = data
    const players = Object.keys(totalStats)

  return (
    <div className='overflow-x-auto'>   
        <h2 className='mb-2 underline text-xl'>Squad Stats:</h2>
        <table className='text-center'>
            <thead>
                <tr className=''>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Manager</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Minutes Played</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Goals Scored</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Assists</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Clean Sheets</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Goals Conceded</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Own Goals</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Pens Saved</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Pens Missed</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Yellow Cards</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Red Cards</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Saves</th>
                    <th className='p-2 border-4 border-secondary lg:w-20'>Bonus Points</th>
                </tr>
            </thead>
            <tbody>
                { players.map((player, i) => (
                    <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{player}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].minutes}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].goals_scored}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].assists}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].clean_sheets}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].goals_conceded}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].own_goals}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].penalties_saved}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].penalties_missed}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].yellow_cards}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].red_cards}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].saves}</td>
                        <td className='p-2 border-4 border-secondary lg:w-20'>{totalStats[player].bonus}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
