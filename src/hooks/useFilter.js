import { useAuthContext } from './useAuthContext'


export const useFilter = (data) => {
    const { playerIds } = useAuthContext()

    const gwkOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38].map(number => {
        return {
            value: number,
            label: number
        }
    })

    const managerOptions = playerIds.map(player => {
        return {
            value: player.name,
            label: player.name
        }
    })
    const randomManagerOptions = ['A','B','C','D','E','F','G','H'].map(manager => {
        return {
            value: manager,
            label: manager
        }
    })

    const statusOptions = [
        {
            value:'Successful',
            label: "Successful"
        },
        {
            value:'Player in unavailable',
            label: "Player in unavailable"
        },
        {
            value:'Player out unavailable',
            label: "Player out unavailable"
        }
    ]

    const typeOptions = [
        {
            value: "Waiver",
            label: "Waiver"
        },
        {
            value: "Free Agent",
            label: "Free Agent"
        }
    ]
    const profitOptions = [{ value: 'Sort High', label: 'Sort High' }, { value: 'Sort Low', label: 'Sort Low'}]

    const elementOptions = data.map(pick => {
    return {
        value: pick.element,
        label: pick.element_name
    } 
    })

    const roundOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(number => {
        return {
            value: number,
            label: number
        }
    })

    return { gwkOptions, managerOptions, statusOptions, typeOptions, profitOptions, elementOptions, roundOptions, randomManagerOptions }
}