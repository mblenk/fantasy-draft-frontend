import React from 'react'

export default function RankingRow({ index, months }) {
  return (
    <tr key={index * Math.random()} className=''>
        <td className='p-2 border-4 border-secondary w-2/12'>{index + 1}</td>
        {   
            Object.keys(months).filter(month => month !== 'liveMonth').map((item, i) => {
                const monthName = item
                
                if(months[monthName].hasOwnProperty('scores')) {
                    return (
                        <td key={Math.random()} className='p-2 border-4 border-secondary w-2/12'>{months[monthName].scores[index].player}</td>
                    )
                }

                return (
                    <td key={Math.random()} className='p-2 border-4 border-secondary w-2/12'>TBC</td>
                )
            })
        } 
    </tr>
  )
}
