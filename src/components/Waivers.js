import { useState } from 'react'
// import { useAxios } from '../hooks/useAxios'
import WaiverFilters from './WaiverFilters'
import WaiverTable from './WaiverTable'
import TransferModal from './TransferModal'


export default function Waivers({ data, setTrackingSet }) {
    const [isPending] = useState(null)
    const [filteredData, setFilteredData] = useState(data)
    const [modalActive, setModalActive] = useState(null)

    // const handleTracking = async (waiver) => {
    //     setIsPending(waiver.id)
    //     const update = await updateUserData('http://localhost:5000/api/liveData/updateTransferTracking', "", {
    //             waivers: data,
    //             waiverToUpdate: waiver
    //         }
    //     )
    //     setTimeout(() => {
    //         setTrackingSet(waiver.id)
    //         setIsPending(null)
    //     }, 1000)
    // }

  return (
    <div className="text-center mx-auto animate-fadein w-full">
        <WaiverFilters 
            data={data}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
        />
        <WaiverTable
            data={filteredData}
            // handleTracking={handleTracking}
            isPending={isPending}
            setModalActive={setModalActive}
        />
        { modalActive && <TransferModal 
            setModalActive={setModalActive} 
            waiver={modalActive} 
        />}
    </div>
  )
}
