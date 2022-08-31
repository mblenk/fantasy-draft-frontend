import React from 'react'

export default function CurrentMonth({ months }) {
  const { scores, month, start_event, stop_event, current_event } = months.liveMonth

  return (
    <div className='text-center mb-8'>
      <h2 className='text-2xl underline mb-2'>Current Month: {month}</h2>
      <p>Month Start: GWK {start_event}</p>
      <p>Month End: GWK {stop_event}</p>
      <p>Current Gameweek: GWK {current_event}</p>
       <table className='text-center mt-2'>
            <thead>
                <tr className=''>
                    <th className='p-2 border-4 border-secondary w-2/12'>Rank</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Player</th>
                    <th className='p-2 border-4 border-secondary w-2/12'>Score</th>
                </tr>
            </thead>
            <tbody>
                { scores.map((item, i) => (
                    <tr key={Math.random()} className=''>
                        <td className='p-2 border-4 border-secondary w-2/12'>{i + 1}</td>
                        <td className='p-2 border-4 border-secondary w-2/12'>{item.player}</td>
                        <td className='p-2 border-4 border-secondary w-2/12'>{item.score}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p className=' mt-2'>This table updates post-gameweek</p>
    </div>
  )
}


