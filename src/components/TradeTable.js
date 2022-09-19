import React from 'react'

export default function TradeTable({ trades, setModalActive }) {
  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
        <table className='text-center mx-auto animate-fadein'>
            <thead>
                <tr className=''>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>GWK</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Offering Manager</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Receiving Manager</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Player(s) Offered</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Player(s) Requested</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>OM Score</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>RM Score</th>
                    <th className='p-2 lg:p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Manager in Profit</th>
                    <th className='p-4 border-4 border-secondary underline underline-offset-4 text-xl'>Profit</th>
                </tr>
            </thead>
            <tbody>
            { trades.map((item, i) => (
                  <tr key={i} className=''>
                      <td className='p-2 border-4 border-secondary'>{item.gameweek}</td>
                      <td className='p-2 border-4 border-secondary'>{item.offering_manager}</td>
                      <td className='p-2 border-4 border-secondary'>{item.receiving_manager}</td>
                      <td className='p-2 border-4 border-secondary'>
                        <div className="flex flex-col">{item.playersOffered.map(player => <span key={Math.random()}>{player.player_out}</span>)}</div>
                      </td>
                      <td className='p-2 border-4 border-secondary'>
                        <div className="flex flex-col">{item.playersReceived.map(player => <span key={Math.random()}>{player.player_in}</span>)}</div>
                      </td>
                      <td className='p-2 border-4 border-secondary'>{item.receiving_score}</td>
                      <td className='p-2 border-4 border-secondary'>{item.offering_score}</td>
                      <td className='p-2 border-4 border-secondary'>{item.manager_in_profit}</td>
                      <td className='p-2 border-4 border-secondary'>
                            <button
                                className='text-tertiary border-2 border-tertiary px-2 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150'
                                onClick={() => setModalActive({ type: 'trade', data: item })}
                            >{`${Math.abs(item.profit)} pts`}</button>
                        </td>
                  </tr>
                )
            )}
            </tbody>
        </table>
    </div>
  )
}
