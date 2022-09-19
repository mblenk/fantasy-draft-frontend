import { useState } from 'react'
import RandomTradeFinder from '../pages/transfer-centre/RandomTradeFinder'
import TradeTable from './TradeTable'
import TransferModal from './TransferModal'


export default function Trades({ data }) {
  const [modalActive, setModalActive] = useState(null)

  return (
    <div className="text-center mx-auto animate-fadein w-full">
        { data.length === 0 && <h2 className='text-2xl'>No trade data to display</h2>}
        { data.length > 0 && <TradeTable 
          trades={data}
          setModalActive={setModalActive} 
        />}
        { modalActive && <TransferModal 
            setModalActive={setModalActive} 
            transaction={modalActive} 
        />}
    </div>
  )
}
