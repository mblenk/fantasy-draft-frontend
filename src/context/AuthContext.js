//react
import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'AUTH_IS_READY':
            return { ...state, user: action.payload, authIsReady: true }
        default:
            return state
    } 
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
        playerIds: [
            {
                name:"Matt",
                entry_id:75081,
                id:75140
            },
            {
                name:"Tom",
                entry_id:74697,
                id:74756
            },
            {
                name:"Dan",
                entry_id:138413,
                id:138578
            },
            {
                name:"Nick",
                entry_id:72961,
                id:73019
            },
            {
                name:"James",
                entry_id:184489,
                id:184752
            },
            {
                name:"Sam",
                entry_id:143292,
                id:143463
            },
            {
                name:"Ollie",
                entry_id:62522,
                id:62565
            },
            {
                name:"Doug",
                entry_id:28784,
                id:28800
            }
        ],
        year: '2022-23'
    })

    useEffect(() => {
        // const getUser = () => {
        //     try {
                // const user = await axios.get('http://localhost:5000/user/check', { 
                // withCredentials: true, 
                // credentials: 'include' 
                // })
                const user = JSON.parse(localStorage.getItem('user'))
                if(user) {
                    dispatch({ type: 'AUTH_IS_READY', payload: user })
                }
        //     }
        //     catch(err) {
        //         dispatch({ type: 'AUTH_IS_READY', payload: null })
        //     }
            
        // } 
        // getUser()
    }, [])


    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}