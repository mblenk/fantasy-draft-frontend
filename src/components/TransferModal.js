import { useState } from 'react'

export default function ProjectModal({ setModalActive, waiver }) {
  const [fadeOut, setFadeOut] = useState(false)
  const { player_in_name, player_out_name, player_in_score, player_out_score, player_in_released, profit, gameweek, player_out_status, player_out_status_added } = waiver

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      setModalActive(null)
    }, 500)
  }

  return (
        <div className={`fixed top-0 left-0 z-10 w-full h-full bg-black/70 animate-fadein flex justify-center items-center ${ fadeOut ? "animate-fadeout" : "animate-fadein" }`} onClick={handleClick}>
            <div className='w-1/2 h-4/5 bg-primary rounded-xl p-4 flex flex-col gap-2 justify-center items-center'>
                <h2 className='underline text-2xl mb-4'>Waiver Details</h2>
                <h2>{`Waiver made in GWK ${gameweek}`}</h2>
                <h2>{`Player in: ${player_in_name}`}</h2>
                <h2>{`Player out: ${player_out_name}`}</h2>
                <h2>{`${player_in_name} points during waiver lifetime: ${player_in_score}`}</h2>
                <h2>{`${player_out_name} points during waiver lifetime: ${player_out_score}`}</h2>
                <h2>{player_out_status ? `Waiver Profit: ${profit}` : `Waiver Profit: ${profit} pts`}</h2>
                <h2>{`${player_in_name} released: ${player_in_released ? `GWK ${player_in_released}` : 'N/A'}`}</h2>
                <br />
                { player_out_status && <>
                  <h2 className='text-center'>No longer being tracked for Profit due to following status for {player_out_name}:</h2>
                  <h2 className='text-center text-secondary'>{player_out_status}</h2>
                  <h2 className='text-center'>Tracking stopped as of GWK {player_out_status_added}</h2>
                </> }
            </div>
            
        </div>
  )
}