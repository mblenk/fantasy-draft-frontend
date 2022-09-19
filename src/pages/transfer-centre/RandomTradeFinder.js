import React from 'react'
import { useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import TradeTable from '../../components/TradeTable'
import TransferModal from '../../components/TransferModal'
import { data } from 'autoprefixer'


export default function RandomTradeFinder() {
    const [leagueData, setLeagueData] = useState(null)
    const [modalActive, setModalActive] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { fetchUserData } = useAxios()

    const handleClick = async () => {
        setIsPending(true)
        try {
            const { data } = await fetchUserData(`${process.env.REACT_APP_API_URL}/liveData/getRandomTrades`, "")

            setLeagueData(data)
            setIsPending(false)
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div className='text-center px-2 lg:px-0'>
        <h2 className='text-2xl underline mb-2'>Random League Trades Finder</h2>
        <p className='text-xl'>Ever wondered what sort of trades people make in other leagues? Well wonder no more! Click the button below to find trades from a random league.</p>
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
        {leagueData && 
        <>
            <h2 className='mb-2'>League ID: {leagueData.leagueId}</h2>
            <TradeTable 
                trades={leagueData.trades}
                setModalActive={setModalActive}
            />
        </>
        }
        { modalActive && <TransferModal 
            setModalActive={setModalActive} 
            transaction={modalActive} 
        />}
    </div>
  )
}


