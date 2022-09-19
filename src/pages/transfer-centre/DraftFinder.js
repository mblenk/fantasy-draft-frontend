import { useState } from 'react'
import DraftTable from '../../components/DraftTable'
import DraftFilter from '../../components/DraftFilter'
import { useAxios } from '../../hooks/useAxios'

export default function DraftFinder() {
    const [data, setData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { fetchUserData } = useAxios()

    const handleClick = async () => {
        setIsPending(true)
        setError(null)
        try {
            const { data } = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/getRandomDraft`, "")

            setData(data)
            setFilteredData(data.draft)
            setIsPending(false)
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='lg:w-5/6 mx-auto text-tertiary pb-12 text-center'>
        <h2 className='text-2xl underline mb-2'>Random League Draft Finder</h2>
        <p className='text-xl'>Ever wondered what draft orders look like in other leagues? Well wonder no more! Click the button below to find the draft from a random league.</p>
        { error && <h2>{error}</h2>}
        { !isPending ? <button 
            className='border-2 border-tertiary p-2 my-6 lg:w-1/6 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'
            onClick={handleClick}
        >Find random league</button>
        :
         <button 
            className='border-2 border-tertiary p-2 my-6 lg:w-1/6 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'
            disabled
        >Finding league...</button>}
        { filteredData && 
            <>
                <h2 className='mb-2'>League ID: {data.leagueId}</h2>
                <DraftFilter 
                    data={data.draft}
                    setFilteredData={setFilteredData}
                /> 
                <DraftTable 
                    data={filteredData}
                />
            </>
        }               
    </div>
  )
}
