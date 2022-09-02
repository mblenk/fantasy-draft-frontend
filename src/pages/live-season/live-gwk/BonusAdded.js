import React from 'react'

export default function BonusAdded({ data }) {

  const { bonus } = data
  return (
    <div className='text-center mb-12 mx-auto'>
        <h2 className='underline text-xl mb-2'>Gameweek Dates:</h2>
        { bonus.status.map((item) => (
            <div className='flex gap-2' key={Math.random() * 1000}>
                {/* <h2>{`GWK${item.event}`}</h2> */}
                <h2>{`${item.date}:`}</h2>
                <h2>{item.bonus_added ? "Bonus Added" : "Bonus Pending"}</h2>
            </div>
        ))}
    </div>
  )
}
