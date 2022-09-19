import { useState } from 'react'

export default function TransferModal({ setModalActive, transaction }) {
  const [fadeOut, setFadeOut] = useState(false)
  const { player_in_name, player_out_name, player_in_score, player_out_score, player_in_released, profit, gameweek, player_out_status, player_out_status_added, offering_manager, receiving_manager, playersOffered, playersReceived, offering_score, receiving_score, manager_in_profit } = transaction.data

  const handleClick = () => {
    setFadeOut(true)
    setTimeout(() => {
      setModalActive(null)
    }, 500)
  }

  return (
        <div className={`fixed top-0 left-0 z-10 w-full h-full bg-black/70 animate-fadein flex justify-center items-center ${ fadeOut ? "animate-fadeout" : "animate-fadein" }`} onClick={handleClick}>
            { transaction.type === 'waiver' && <div className='w-3/4 lg:w-1/2 h-4/5 bg-primary rounded-xl py-6 px-4 flex flex-col gap-2 justify-center items-center'>
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
            </div>}
            { transaction.type === 'trade' && <div className='w-3/4 lg:w-1/2 h-4/5 bg-primary rounded-xl py-6 px-4 lg:py-4 flex flex-col gap-2 items-center overflow-y-auto'>
                <h2 className='underline text-2xl mb-4'>Trade Details</h2>
                <h2>{`Trade made in GWK ${gameweek}`}</h2>
                <h2>{`Offering Manager: ${offering_manager}`}</h2>
                <h2>{`Receiving Manager: ${receiving_manager}`}</h2>
                <div className="flex flex-col lg:flex-row gap-4 my-2 ">
                  <div className="flex flex-col">
                    <h2>Players Offered:</h2>
                      <table>
                        <thead>
                          <tr>
                            <th className='p-2 border-4 border-secondary underline underline-offset-4'>Player</th>
                            <th className='p-2 border-4 border-secondary underline underline-offset-4'>Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          { playersOffered.map(player => (
                            <tr>
                              <td className='p-2 border-4 border-secondary'>{player.player_out}</td>
                              <td className='p-2 border-4 border-secondary'>{player.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                  </div>
                  <div className="flex flex-col">
                    <h2>Players Received:</h2>
                      <table>
                        <thead>
                          <tr>
                            <th className='p-2 border-4 border-secondary underline underline-offset-4'>Player</th>
                            <th className='p-2 border-4 border-secondary underline underline-offset-4'>Score</th>
                          </tr>
                        </thead>
                        <tbody>
                          { playersReceived.map(player => (
                            <tr>
                              <td className='p-2 border-4 border-secondary'>{player.player_in}</td>
                              <td className='p-2 border-4 border-secondary'>{player.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                  </div>
                </div>
                <h2>{`Offering Manager's score:  ${receiving_score} pts`}</h2>
                <h2>{`Receiving Manager's score:  ${offering_score} pts`}</h2>
                <h2>{`Manager in profit:  ${manager_in_profit}`}</h2>
                <h2>{`Profit from trade:  ${Math.abs(profit)} pts`}</h2>
            </div>}
        </div>
  )
}