import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../hooks/useAxios'
import { useAuthContext } from '../../hooks/useAuthContext'
import Waivers from '../../components/Waivers'
import Trades from '../../components/Trades'
import Draft from '../../components/Draft'
import { useParams } from 'react-router-dom'



export default function YearlyTransfers() {
    const [data, setData] = useState(null)
    const [chooseContent, setChooseContent] = useState('Waivers')
    const { fetchUserData } = useAxios()
    const { id } = useParams()
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await fetchUserData(`${process.env.REACT_APP_API_URL}/year/data/`, id)
                
                setData(data)
            } catch (error) {
                console.log(error.message)

                if(error.message === 'Cannot destructure property \'token\' of \'JSON.parse(...)\' as it is null.' || error.message === 'Cannot read properties of null (reading \'token\')'){
                    dispatch({ type: 'LOGOUT' })
                    navigate('/login')
                    alert('Your login session has expired.')
                }
            }
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