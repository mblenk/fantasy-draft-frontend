import React from 'react'

export default function RankingRow({ index, months }) {
  return (
    <tr key={index * Math.random()} className=''>
        <td className='p-2 border-4 border-secondary'>{index + 1}</td>
        {   
            Object.keys(months).filter(month => month !== 'liveMonth').map((item, i) => {
                const monthName = item
                
                if(months[monthName].hasOwnProperty('scores')) {
                    return (
                        <React.Fragment key={Math.random()}>
                            <td className='p-2 border-4 border-secondary'>{months[monthName].scores[index].player}</td>
                            <td className='p-2 border-4 border-secondary'>{months[monthName].scores[index].score}</td>
                        </React.Fragment>
                    )
                }

                return (
                    <React.Fragment key={Math.random()}>
                        <td className='p-2 border-4 border-secondary'>-</td>
                        <td className='p-2 border-4 border-secondary'>-</td>
                    </React.Fragment> 
                )
            })
        } 
    </tr>
  )
}
