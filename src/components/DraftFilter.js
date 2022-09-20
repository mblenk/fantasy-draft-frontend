import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Select from 'react-select'
import { useFilter } from '../hooks/useFilter'

export default function DraftFilter({ data, setFilteredData, count, setCount }) {
    const [player, setPlayer] = useState(null)
    const [managers, setManagers] = useState(null)
    const [round, setRound] = useState(null)

    const { pathname } = useLocation()

    const { managerOptions, randomManagerOptions, elementOptions, roundOptions } = useFilter(data)

    const handleSubmit = (e) => {
        e.preventDefault()

        const playerFilter = player ? player.map(player => {
            return data.filter(pick => pick.element === player.value)
        }).flat() : data

        const managerFilter = managers ? managers.map(manager => {
            return playerFilter.filter(item => item.manager === manager.value)
        }).flat() : playerFilter

        const roundFilter = round ? managerFilter.filter(item => item.round === round.value) : managerFilter

        setFilteredData(roundFilter)
        setCount(roundFilter.length)
    }

    const handleClearFilter = (e) => {
        setManagers(null)
        setPlayer(null)
        setRound(null)
        setCount(data.length)
        setFilteredData(data)
    }

  return (
    <form className='mb-6 p-4 lg:px-0' onSubmit={handleSubmit}>
        <h2 className='underline text-2xl mb-2'>Filters</h2>
        <div className='flex gap-4 justify-center p-4 mb-2 border-2 border-secondary lg:w-3/5 mx-auto rounded-xl'>
            <label className='flex flex-col gap-2 text-primary w-2/5'>
                <span className='text-tertiary underline text-xl'>Player</span>
                <Select 
                    options={elementOptions} 
                    value={player}
                    onChange={(option) => setPlayer(option)}
                    isMulti={true}
                />
            </label>
            <label className='flex flex-col gap-2 text-primary'>
                <span className='text-tertiary underline text-xl'>Manager</span>
                <Select 
                    options={pathname === '/draft_finder' ? randomManagerOptions : managerOptions} 
                    isMulti={true}
                    value={managers}
                    onChange={(option) => setManagers(option)}
                />
            </label>
            <label className='flex flex-col gap-2 text-primary'>
                <span className='text-tertiary underline text-xl'>Round</span>
                <Select 
                    options={roundOptions} 
                    value={round}
                    onChange={(option) => setRound(option)}
                />
            </label>
        </div>
        <div className="flex gap-4 justify-center">
            <button type="submit" className='border-2 border-tertiary p-2 w-3/12 lg:w-1/12 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'>Filter</button>
            <button 
                type="button"
                className='border-2 border-tertiary p-2 w-3/12 lg:w-1/12 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'
                onClick={handleClearFilter}
            >Clear</button>
        </div>
        <h2 className='mt-4'>Count: {count}</h2>
    </form>
  )
}

