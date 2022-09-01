import { useState } from 'react'

export default function WaiverStats({ data }) {
    const [showStats, setShowStats] = useState(false)

  return (
    <div className='border-2 border-secondary mb-12 rounded-xl p-4 mx-auto w-3/4'>
        <div className="mx-auto p-2 mb-6 flex justify-center items-center gap-2 rounded-full border-2 border-tertiary w-1/2 transition ease-in hover:bg-tertiary hover:text-primary duration-150" onClick={() => setShowStats(showStats ? false : true)}>
            <h2 className='text-2xl underline'>Transaction Stats</h2>
            { !showStats ? 
                <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z"/></svg> 
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M14.15 30.75 12 28.6 24 16.6 36 28.55 33.85 30.7 24 20.85Z"/></svg>
            }
        </div>
        { showStats && <table className='text-center mx-auto animate-fadein'>
            <thead>
                <tr className=''>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Player</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Transactions</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Waivers</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Free Agents</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Success</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Total Profit</th>
                </tr>
            </thead>
            <tbody>
            { data.map((item, i) => (
                    <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary'>{item.manager}</td>
                        <td className='p-2 border-4 border-secondary'>{item.numberOfTransactions}</td>
                        <td className='p-2 border-4 border-secondary'>{item.numberOfWaivers }</td>
                        <td className='p-2 border-4 border-secondary'>{item.numberOfFreeAgents}</td>
                        <td className='p-2 border-4 border-secondary'>{`${item.successRate}%`}</td>
                        <td className='p-2 border-4 border-secondary'>{item.totalProfit}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>}
    </div>
  )
}
