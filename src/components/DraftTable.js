import React from 'react'

export default function WaiverTable({ data, handleTracking, isPending, setModalActive }) {

  return (
    <div className="overflow-x-auto p-2">
        <table className='text-center mx-auto animate-fadein w-1/2'>
            <thead>
                <tr className=''>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl lg:w-1/12'>Pick</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl lg:w-1/12'>Round</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Manager</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Player</th>
                </tr>
            </thead>
            <tbody>
            { data.map((item, i) => (
                    <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary'>{item.pick}</td>
                        <td className='p-2 border-4 border-secondary'>{item.round}</td>
                        <td className='p-2 border-4 border-secondary'>{item.manager}</td>
                        <td className='p-2 border-4 border-secondary'>{item.element_name}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    </div>
  )
}
