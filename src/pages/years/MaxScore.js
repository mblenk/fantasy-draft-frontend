import React, { useState }from 'react'

export default function MaxScore({ maxScores, setMaxScores }) {
  const [sortHigh, setSortHigh] = useState(true)
  const [dropdown, setDropdown] = useState(false)

  const handleClick = () => {
    if(sortHigh) {
      const update = maxScores.sort((a, b) => a.minScore - b.minScore)
      setMaxScores(update)
      setSortHigh(false)
    }
    if(!sortHigh) {
      const update = maxScores.sort((a, b) => b.maxScore - a.maxScore)
      setMaxScores(update)
      setSortHigh(true)
    }
  }

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <div className="flex justify-between ">
          <h2 className='text-xl underline p-2'>Max and Min scores</h2>
          { !dropdown ? 
            <svg onClick={() => setDropdown(true)} xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M24 30.75 12 18.75 14.15 16.6 24 26.5 33.85 16.65 36 18.8Z"/></svg> 
            :
            <svg onClick={() => setDropdown(false)} xmlns="http://www.w3.org/2000/svg" height="36" width="36" fill='#1BA098'><path d="M14.15 30.75 12 28.6 24 16.6 36 28.55 33.85 30.7 24 20.85Z"/></svg>
          }
        </div>
        { sortHigh && dropdown ? <button onClick={handleClick} className='bg-tertiary px-2 rounded-xl text-primary text-sm h-3/4 w-1/6'>Sort Low</button>
        :
        dropdown && <button onClick={handleClick} className='bg-tertiary px-2 rounded-xl text-primary text-sm h-3/4 w-1/6'>Sort High</button>
        }       
      </div>
      { dropdown && <div className='animate-fadein overflow-x-auto'>
            <table>
              <thead>
                <tr>
                  { maxScores.map(player => (
                    <th key={Math.random()} className='border-4 border-secondary text-center p-2'>{player.player}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  { maxScores.map(player => (
                    <td key={Math.random()} className='border-4 border-secondary text-center p-2'>{player.maxScore}</td>
                  ))}
                </tr>
                <tr>
                  { maxScores.map(player => (
                    <td key={Math.random()} className='border-4 border-secondary text-center p-2'>{player.minScore}</td>
                  ))}
                </tr>
              </tbody>
            </table>
      </div>} 
    </>
  )
}
