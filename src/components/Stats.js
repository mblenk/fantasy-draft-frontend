import { useEffect, useState } from 'react'
import GapToTheHose from '../pages/years/GapToTheHose'
import GwkWinsLosses from '../pages/years/GwkWinsLosses'
import MaxScore from '../pages/years/MaxScore'
import PositionData from '../pages/years/PositionData'

export default function Stats({ data, title, subtitleOne, subtitleTwo, subtitleThree }) {
    const {
      maxAndMinScores,
      gwkLosses,
      gwkWins,
      averagePosition,
      weeksAtTop,
      weeksAtBottom
    } = data.statistics
    const [maxScores, setMaxScores] = useState(null)
     
    useEffect(() => {
      setMaxScores(maxAndMinScores)
    }, [data])

  return (
    <div className='lg:w-3/5 p-4 text-tertiary animate-fadein border-4 border-secondary rounded-xl flex flex-col gap-2'> 
      { maxScores && 
        <>
          <h2 className='text-center text-2xl underline'>{title}</h2>
          <MaxScore maxScores={maxScores} setMaxScores={setMaxScores} />   
          <GwkWinsLosses data={gwkWins} />
          <GwkWinsLosses data={gwkLosses} />
          <PositionData data={averagePosition} title={subtitleOne}/>
          <PositionData data={weeksAtTop} title={subtitleTwo}/>
          <PositionData data={weeksAtBottom} title={subtitleThree}/>
          { title !== 'All-Time Stats' && <GapToTheHose data={data.hoseGaps} />}
        </>
      }   
    </div>
  )
}
