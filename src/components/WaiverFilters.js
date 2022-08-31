import { useState } from 'react'
import Select from 'react-select'
import { useFilter } from '../hooks/useFilter'

export default function WaiverFilters({ data, setFilteredData }) {
    const [gwkStart, setGwkStart] = useState({ value: 1, label: 1 })
    const [gwkEnd, setGwkEnd] = useState({ value: 38, label: 38 })
    const [type, setType] = useState(null)
    const [managers, setManagers] = useState(null)
    const [status, setStatus] = useState(null)
    const [profit, setProfit] = useState(null)
    const [count, setCount] = useState(data.length)

    const { gwkOptions, managerOptions, statusOptions, typeOptions, profitOptions } = useFilter(data)

    const handleSubmit = (e) => {
        e.preventDefault()

        const gwkFilter = data.filter(waiver => gwkStart.value <= waiver.gameweek && waiver.gameweek <= gwkEnd.value)

        const typeFilter = type ? gwkFilter.filter(waiver => waiver.type === type.value) : gwkFilter

        const managerFilter = managers ? managers.map(manager => {
            return typeFilter.filter(item => item.manager === manager.value)
        }).flat() : typeFilter

        const statusFilter = status ? status.map(status => {
            return managerFilter.filter(item => item.result === status.value)
        }).flat() : managerFilter

        const profitFilter = !profit ? 
            statusFilter : 
            profit.value === 'Sort High' ? 
            statusFilter.sort((a, b) => b.profit - a.profit) :
            statusFilter.sort((a, b) => a.profit - b.profit) 

        setFilteredData(profitFilter)
        setCount(profitFilter.length)
    }

    const handleClearFilter = (e) => {
        setGwkEnd({ value: 38, label: 38 })
        setGwkStart({ value: 1, label: 1 })
        setManagers(null)
        setType(null)
        setStatus(null)
        setProfit(null)
        setCount(data.length)
        setFilteredData(data)
    }

  return (
    <form className='mb-6' onSubmit={handleSubmit}>
        <h2 className='underline text-2xl mb-2'>Filters</h2>
        <div className='flex flex-col lg:flex-row gap-4 justify-center p-4 mb-2 border-2 border-secondary w-11/12 lg:w-3/4 mx-auto rounded-xl'>
            <label className='flex flex-col gap-2'>
                <span className='underline text-xl'>Gameweeks</span>
                <div className="flex gap-2 justify-center">
                    <label className='flex gap-2 items-center text-primary'>
                        <span className='text-tertiary'>From:</span>
                        <Select 
                            options={gwkOptions} 
                            value={gwkStart}
                            onChange={(option) => setGwkStart(option)}
                        />
                    </label>
                    <label className='flex gap-2 items-center text-primary'>
                        <span className='text-tertiary'>To:</span>
                        <Select 
                            options={gwkOptions} 
                            value={gwkEnd}
                            onChange={(option) => setGwkEnd(option)}
                        />
                    </label>
                </div>
            </label>
            <label className='flex flex-col gap-2 text-primary'>
                <span className='text-tertiary underline text-xl'>Type</span>
                <Select 
                    options={typeOptions} 
                    value={type}
                    onChange={(option) => setType(option)}
                />
            </label>
            <label className='flex flex-col gap-2 text-primary'>
                <span className='text-tertiary underline text-xl'>Manager</span>
                <Select 
                    options={managerOptions} 
                    isMulti={true}
                    value={managers}
                    onChange={(option) => setManagers(option)}
                />
            </label>
            <label className='flex flex-col gap-2 text-primary'>
                <span className='text-tertiary underline text-xl'>Status</span>
                <Select 
                    options={statusOptions} 
                    isMulti={true}
                    value={status}
                    onChange={(option) => setStatus(option)}
                />
            </label>
            <label className='flex flex-col gap-2 text-primary'>
                <span className='text-tertiary underline text-xl'>Profit</span>
                <Select 
                    options={profitOptions} 
                    value={profit}
                    onChange={(option) => setProfit(option)}
                />
            </label>
        </div>
        <div className="flex gap-4 justify-center">
            <button type="submit" className='border-2 border-tertiary p-2 lg:w-1/12 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'>Filter</button>
            <button 
                type="button"
                className='border-2 border-tertiary p-2 lg:w-1/12 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'
                onClick={handleClearFilter}
            >Clear</button>
        </div>
        <h2 className='mt-4'>Count: {count}</h2>
    </form>
  )
}
