import React from 'react'

export default function WaiverTable({ data, handleTracking, isPending, setModalActive }) {

  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
        <table className='text-center mx-auto animate-fadein'>
            <thead>
                <tr className=''>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>GWK</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Type</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Player In</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Player Out</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Manager</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Status</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Profit</th>
                </tr>
            </thead>
            <tbody>
            { data.map((item, i) => (
                    <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary'>{item.gameweek}</td>
                        <td className='p-2 border-4 border-secondary'>{item.type === 'Waiver' ? 'W' : 'FA'}</td>
                        <td className='p-2 border-4 border-secondary'>{item.player_in_name}</td>
                        <td className='p-2 border-4 border-secondary'>{item.player_out_name}</td>
                        <td className='p-2 border-4 border-secondary'>{item.manager}</td>
                        <td className='p-2 border-4 border-secondary'>{item.result}</td>
                        <td className='p-2 border-4 border-secondary'>
                            {item.result !== 'Successful' && <p className='text-tertiary'>N/A</p>}
                            {item.result === 'Successful' &&
                                <button
                                    className='text-tertiary border-2 border-tertiary px-2 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'
                                    onClick={() => setModalActive({type: 'waiver', data:item})}
                                >{item.player_out_status ? "N/A" : `${item.profit} pts`}</button>
                            }
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    </div>
  )
}
