import React, { useState } from 'react'

export default function GapToTheHose({ data }) {
    const [dropdown, setDropdown] = useState(false)
    const dataSetsIndex = data.length - 1


  return (
    <div className='my-2'>
        <div className="flex">
          <h2 className='text-xl underline p-2'>Gap to the Hose</h2>
          { !dropdown ? 
            <svg onClick={() => setDropdown(true)} xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z"/></svg> 
            :
            <svg onClick={() => setDropdown(false)} xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M14.15 30.75 12 28.6 24 16.6 36 28.55 33.85 30.7 24 20.85Z"/></svg>
          }
        </div>
        { dropdown && 
        <div className="overflow-x-auto">
          <table className='text-center'>
              <thead>
                  <tr className=''>
                    <th className='p-2 border-4 border-secondary w-2/12'>GWK</th>
                    { data[dataSetsIndex].gaps.map((item, i) => (
                      <th key={Math.random()} className='p-2 border-4 border-secondary w-2/12'>{item.player}</th>
                    ))}
                  </tr>
              </thead>
              <tbody>
                  { data.map((item, i) => (
                      <tr key={i} className=''>
                        <td className='p-2 border-4 border-secondary w-2/12'>{item.week}</td>
                        { data[dataSetsIndex].gaps.map((item, index) => {
                          const gap = data[i].gaps.find(a => a.player === item.player).gap
                          return (
                            <td key={Math.random()} className='p-2 border-4 border-secondary w-2/12'>{gap}</td>
                          )
                        })}
                      </tr>
                  ))}
              </tbody>
          </table>
        </div>
      }
    </div>
  )
}
