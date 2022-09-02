import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'

export default function SquadTotals({ data, type }) {
    const [squadTotals, setSquadTotals] = useState(null)
    const [position, setPosition] = useState(type === 'squad' ? 'squad' : 'onBench')

    const { squadScores } = data
    const weeklySquadScores = squadScores.weekly
    const playerNames = Object.keys(weeklySquadScores)

    useEffect(() => {
        const getTotals = playerNames.map(player => {
            const gkTotal = weeklySquadScores[player].reduce((a, b) => a + b.gk, 0)
            const defTotal = weeklySquadScores[player].reduce((a, b) => a + b.def, 0)
            const midTotal = weeklySquadScores[player].reduce((a, b) => a + b.mid, 0)
            const fwdTotal = weeklySquadScores[player].reduce((a, b) => a + b.fwd, 0)
            const squadTotal = gkTotal + defTotal + midTotal + fwdTotal
            const offBenchTotal = weeklySquadScores[player].reduce((a, b) => a + b.pointsOffBench, 0)
            const onBenchTotal = weeklySquadScores[player].reduce((a, b) => a + b.benchPoints, 0)

            return {
                player,
                gkTotal,
                defTotal,
                midTotal,
                fwdTotal,
                squadTotal,
                offBenchTotal,
                onBenchTotal
            }
        })
        type === 'squad' ? getTotals.sort((a, b) => b.squadTotal - a.squadTotal) : getTotals.sort((a, b) => b.onBenchTotal - a.onBenchTotal)

        setSquadTotals(getTotals)
    }, [])

    const handleClick = (name) => {
    const root = `${name}Total`

        if(name === 'gk' && type === 'squad') { 
            setPosition('gk') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }
        if(name === 'def' && type === 'squad') { 
            setPosition('def') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }
        if(name === 'mid' && type === 'squad') { 
            setPosition('mid') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }
        if(name === 'fwd' && type === 'squad') { 
            setPosition('fwd') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }
        if(name === 'squad' && type === 'squad') { 
            setPosition('squad') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }
        if(name === 'onBench' && type === 'onBench') { 
            setPosition('onBench') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }
        if(name === 'offBench' && type === 'onBench') { 
            setPosition('offBench') 
            setSquadTotals(squadTotals.sort((a, b) => b[root] - a[root]))
        }

    }

  return (
    <div className='overflow-x-auto mb-6'>
        { squadTotals && <>
            { type ==='squad' && <h2 className='mb-2 underline text-xl'>Squad Totals:</h2>}
            { type ==='onBench' && <h2 className='mb-2 underline text-xl'>Points On/Off Bench:</h2>}
            <table className='text-center'>
                <thead>
                    <tr className=''>
                        { type ==='squad' && <th className='p-2 border-4 border-secondary'>Position</th>}
                        { type ==='onBench' && <th className='p-2 border-4 border-secondary'>Off/On</th>}
                        { squadTotals.map((squad, i) => (
                            <th key={i * 1.125} className='p-2 border-4 border-secondary'>{squad.player}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                   { type === 'squad' && <TableRow name={'gk'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                   { type === 'squad' && <TableRow name={'def'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                   { type === 'squad' && <TableRow name={'mid'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                   { type === 'squad' &&  <TableRow name={'fwd'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                   { type === 'squad' && <TableRow name={'squad'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                   { type === 'onBench' && <TableRow name={'onBench'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                   { type === 'onBench' && <TableRow name={'offBench'} data={squadTotals} handleClick={handleClick} position={position} type={type} />}
                </tbody>
            </table>
        </>}
    </div>
  )
}
