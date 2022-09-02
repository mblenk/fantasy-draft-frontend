import React from 'react'

export default function DreamTeam({ data }) {
    const { elementStats, dreamTeam, gwkTeams, element_types } = data

  return (
    <div className='mb-12'>
        <h2 className='underline text-xl mb-2 text-center'>GWK Dream Team</h2>
        <table className='text-center'>
            <thead>
                <tr className=''>
                    <th className='p-2 border-4 border-secondary'>Position</th>
                    <th className='p-2 border-4 border-secondary'>Player</th>
                    <th className='p-2 border-4 border-secondary'>Points</th>
                    <th className='p-2 border-4 border-secondary'>Owner</th>
                </tr>
            </thead>
            <tbody>
            { dreamTeam.elements.map((item, i) => {
                const playerName = elementStats.filter(element => item.element_id === element.id)
                const position = element_types.filter(position => playerName[0].element_type === position.id)

                let owner = "FA"
                gwkTeams.forEach(squad => {
                    const teamCheck = squad.team.filter(player => item.element_id === player.element)
                    owner = teamCheck.length > 0 ? squad.player : owner
                })
                
                return (
                    <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary'>{position[0].singular_name_short}</td>
                        <td className='p-2 border-4 border-secondary'>{playerName[0].web_name}</td>
                        <td className='p-2 border-4 border-secondary'>{item.total_points}</td>
                        <td className='p-2 border-4 border-secondary'>{owner}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
  )
}
