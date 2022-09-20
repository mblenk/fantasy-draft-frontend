import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from './useAuthContext'



export const useAxios = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(null)
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()


    const fetchUserData = async (url, id) => {
      setError(null)
      setIsPending(true)
      try {
        const { token } = JSON.parse(localStorage.getItem('user'))

        const response = await axios.get(url + id, {
            headers: {
              authorization: `${token}`, 
            },
            withCredentials: true, 
            credentials: 'include'
          }
        )
        setIsPending(false)
        return response

      }
      catch(err) {
        console.log(err.response.data)
        setError(err)
        setIsPending(false)

        if(err.response.data === 'JWT Expired') {
          localStorage.removeItem('user')
          dispatch({ type: 'LOGOUT' })
          navigate('/login')
        }
      }
    }

    const updateUserData = async (url, id, object) => {
      setError(null)
      setIsPending(true)
      try {
        const response = await axios.patch(url + id, object, { 
          withCredentials: true, 
          credentials: 'include' 
        })
        setIsPending(false)
      }
      catch(err) {
        setError(err.message)
        setIsPending(false)
      }
    }

    return { fetchUserData, updateUserData, error, isPending }
}