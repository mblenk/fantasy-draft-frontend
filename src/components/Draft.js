import { useState } from 'react'
import DraftFilter from './DraftFilter'
import DraftTable from './DraftTable'


export default function Draft({ data }) {
  const [filteredData, setFilteredData] = useState(data)

  return (
    <div className="text-center mx-auto animate-fadein w-full">
        <DraftFilter 
            data={data}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
        />
        <DraftTable 
          data={filteredData}
        />
    </div>
  )
}
