import { useEffect, useState } from 'react'
import FilterButton from './FilterButton'

export default function HighestScoringPositions({ data }) {
    const { scoresByPosition } = data
    const [scores, setScores] = useState(null)
    const [position, setPosition] = useState('gk')

    useEffect(() => {
        scoresByPosition.sort((a, b) => b.gk - a.gk)

        setScores(scoresByPosition)
    }, [])

    const handleClick = (value) => {
        if(value === 'gk') { 
            setPosition('gk') 
            setScores(scores.sort((a, b) => b[value] - a[value]))
        }
        if(value === 'def') { 
            setPosition('def') 
            setScores(scores.sort((a, b) => b[value] - a[value]))
        }
        if(value === 'mid') { 
            setPosition('mid') 
            setScores(scores.sort((a, b) => b[value] - a[value]))
        }
        if(value === 'fwd') { 
            setPosition('fwd') 
            setScores(scores.sort((a, b) => b[value] - a[value]))
        }
    }

  return (
    <>
    { scores && 
        <div className='mb-12'>
            <h2 className='underline text-xl mb-2 text-center'>Highest Scoring Positions</h2>
            <div className='flex gap-2 mb-4'>
                <FilterButton value={'gk'} handleClick={handleClick} position={position} />
                <FilterButton value={'def'} handleClick={handleClick} position={position} />
                <FilterButton value={'mid'} handleClick={handleClick} position={position} />
                <FilterButton value={'fwd'} handleClick={handleClick} position={position} />
            </div>
            <table className='text-center mx-auto w-full'>
                <thead>
                    <tr className=''>
                        <th className='p-2 border-4 border-secondary'>Position</th>
                        <th className='p-2 border-4 border-secondary'>Manager</th>
                        <th className='p-2 border-4 border-secondary'>Points</th>
                    </tr>
                </thead>
                <tbody>
                { scores.map((item, i) => {
                    
                    
                    return (
                        <tr key={i} className=''>
                            <td className='p-2 border-4 border-secondary'>{position.toUpperCase()}</td>
                            <td className='p-2 border-4 border-secondary'>{item.player}</td>
                            { position === 'gk' && <td className='p-2 border-4 border-secondary'>{item.gk}</td>}
                            { position === 'def' && <td className='p-2 border-4 border-secondary'>{item.def}</td>}
                            { position === 'mid' && <td className='p-2 border-4 border-secondary'>{item.mid}</td>}
                            { position === 'fwd' && <td className='p-2 border-4 border-secondary'>{item.fwd}</td>}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    }
    </>
  )
}
