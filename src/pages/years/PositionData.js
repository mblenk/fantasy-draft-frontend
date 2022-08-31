import React, { useState } from 'react'

export default function PositionData({ data, title }) {
    const keys = Object.keys(data[0])
    const dataName = keys[1]
    const [dropdown, setDropdown] = useState(false)

  return (
    <div className='my-2'>
        <div className="flex">
          <h2 className='text-xl underline p-2'>{title}</h2>
          { !dropdown ? 
            <svg onClick={() => setDropdown(true)} xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z"/></svg> 
            :
            <svg onClick={() => setDropdown(false)} xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M14.15 30.75 12 28.6 24 16.6 36 28.55 33.85 30.7 24 20.85Z"/></svg>
          }
        </div>
        { dropdown && <div className='animate-fadein overflow-x-auto'>
            <table>
              <thead>
                <tr>
                  { data.map(player => (
                    <th key={Math.random()} className='border-4 border-secondary text-center p-2'>{player.player}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  { data.map(player => (
                    <td key={Math.random()} className='border-4 border-secondary text-center p-2'>{player[dataName]}</td>
                  ))}
                </tr>
              </tbody>
            </table>
        </div>}
    </div>
  )
}
