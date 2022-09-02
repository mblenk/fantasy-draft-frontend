import React from 'react'

export default function FilterButton({ value, handleClick, position }) {
    const capitalise = value.toUpperCase()
  return (
    <button 
        className={`px-2 rounded-full w-1/4 border-2 border-tertiary ${ position === value ? "bg-tertiary text-primary" : ""}`}
        onClick={() => handleClick(value)}
    >{capitalise}</button>
  )
}


