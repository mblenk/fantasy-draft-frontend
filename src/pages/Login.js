import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import axios from 'axios'

export default function Login() {
    const { dispatch } = useAuthContext()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setUsernameError('')
        setPasswordError('')
        
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, {
                username,
                password,
            },
            { 
                withCredentials: true, 
                credentials: 'include' 
            })
            if(res.data.user){
                console.log(res.data)
                localStorage.setItem('user', JSON.stringify(res.data))
                dispatch({ type: 'LOGIN', payload: res.data })
                navigate('/')
            }
        } 
        catch(err) {
            console.log(err)
            if(err.response.data) {
                setUsernameError(err.response.data.errors.username)
                setPasswordError(err.response.data.errors.password)
            }
            if(err.message === "Network Error") {
                setPasswordError('A connection could not be establised with the server. Please try again later.')
            }
        
        }
    }

  return (
    
        <form className='w-1/2 mx-auto flex flex-col gap-4 items-center text-center p-8 text-tertiary' onSubmit={handleSubmit}>
            <label className='flex flex-col items-center gap-4'> 
                <span className='text-xl'>Username:</span>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className='p-2 rounded-full bg-primary border-2 border-secondary text-tertiary focus:outline-none focus-visible:ring-4 ring-secondary transition-shadow'
                />
            { usernameError && <p>{usernameError}</p> }
            </label>
            <label className='flex flex-col items-center gap-4'> 
                <span className='text-xl'>Password:</span>
                <input 
                    type="password" 
                    value={password}  
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='p-2 rounded-full bg-primary border-2 border-secondary text-tertiary focus:outline-none focus-visible:ring-4 ring-secondary transition-shadow'
                />
            { passwordError && <p>{passwordError}</p> }
            </label>
            <button className='bg-primary border-secondary border-2 w-3/4 lg:w-1/4 p-2 rounded-full hover:bg-secondary hover:text-primary focus:outline-none focus-visible:ring-4 ring-secondary transition-shadow'>Log In</button>
        </form>
    
  )
}
