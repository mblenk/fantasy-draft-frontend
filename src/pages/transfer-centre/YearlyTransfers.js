import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hooks/useAxios'
import Waivers from '../../components/Waivers'
import Trades from '../../components/Trades'
import Draft from '../../components/Draft'
import { useParams } from 'react-router-dom'



export default function YearlyTransfers() {
    const [data, setData] = useState(null)
    const [chooseContent, setChooseContent] = useState('Waivers')
    const { fetchUserData } = useAxios()
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            const { data } = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data/`, id)

            setData(data)
        }
        getData()
    }, [])


  return (
    <div className='lg:w-5/6 mx-auto text-tertiary pb-12'>
        { !data && <h2 className='text-2xl'>Fetching Data...</h2>}
        { data && 
            <div className="">
                <div className='flex p-2 mx-auto justify-center mb-4 gap-4'>
                    <button 
                        className='border-2 border-tertiary p-2 lg:w-1/6 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150' 
                        onClick={() => setChooseContent('Waivers')}
                    >Waivers</button>
                    <button 
                        className='border-2 border-tertiary p-2 lg:w-1/6 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150' 
                        onClick={() => setChooseContent('Trades')}
                    >Trades</button>
                    <button 
                        className='border-2 border-tertiary p-2 lg:w-1/6 rounded-full transition ease-in hover:bg-tertiary hover:text-primary duration-150' 
                        onClick={() => setChooseContent('Draft')}
                    >Draft</button>
                </div>
                { chooseContent === 'Waivers' && 
                    <Waivers 
                        data={data.waivers}
                        stats={data.transactionStats} 
                        // setTrackingSet={setTrackingSet} 
                    /> 
                }
                { chooseContent === 'Trades' && 
                    <Trades 
                        data={data.trades} 
                    /> 
                }
                { chooseContent === 'Draft' && 
                    <Draft
                        data={data.draftPicks}
                    /> 
                }
            </div>
        }
    </div>
  )
}