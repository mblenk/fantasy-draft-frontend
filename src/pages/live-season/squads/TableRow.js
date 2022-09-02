

export default function TableRow({ name, data, handleClick, position, type }) {

    const root = `${name}Total`
    let title 
    if(type === 'squad') {
        title = name !== 'squad' ? name.toUpperCase() : "Total"
    }
    if(type ==='onBench') {
        title = name === 'onBench' ? "On" : "Off"
    }
    
  return (
    
        <tr className=''>
            <td className='p-2 border-4 border-secondary'>
                <button 
                    className={`px-2 rounded-full w-full border-2 border-tertiary ${ position === name ? "bg-tertiary text-primary" : ""}`}
                    onClick={() => handleClick(name)}
                >
                    {title}
                </button>
            </td>
            { data.map((item, i) => (
                <td key={i * Math.random()} className='p-2 border-4 border-secondary'>{item[root]}</td>
            ))}
        </tr>
    
  )
}
