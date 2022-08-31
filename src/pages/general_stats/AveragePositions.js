import React from 'react'

export default function AveragePositions({ data }) {
    const { years, players, positions, averagePositions } = data

  return (
    <div className='text-tertiary animate-fadein lg:w-3/5 p-2 mb-12 mx-auto'>
        <h1 className='text-center underline text-2xl p-2'>Positions Each Year</h1>
        <table className='text-center'>
            <thead>
                <tr className=''>
                    <th className='p-2 border-4 border-secondary'>Year</th>
                    { players.map(player => (
                        <th key={Math.random()} className='p-2 border-4 border-secondary'>{player}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                { years.map((year, i) => (
                    <tr key={i * Math.random()} className=''>
                        <td className='p-2 border-4 border-secondary'>{year}</td>
                        { players.map(player => (
                            <td key={Math.random()} className='p-2 border-4 border-secondary'>{positions[year][player] ? positions[year][player] : 'N/A'}</td>     
                        ))}
                    </tr>
                ))}
                <tr>
                    <td className='p-2 border-4 border-secondary'>Average</td>
                    { averagePositions.map(average => (
                        <td key={Math.random() * 846.24521} className='p-2 border-4 border-secondary'>{average.average}</td>
                    ))}
                </tr>
            </tbody>
        </table>
    </div>
  )
}
