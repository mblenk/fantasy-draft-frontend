

export const useTransfers = () => {

    const formatWaivers = (waivers, elementStats, playerIds) => {
        const formattedWaivers = waivers.map(transaction => {
            let type = ''
            let result = ''
            
            transaction.kind === "f" ? type = "Free Agent" : type = "Waiver"
            transaction.result === "a" ? result = "Successful" : transaction.result === "di" ? result = "Player in unavailable" : result = "Player out unavailable"

            const playerInFilter = elementStats.filter(element => element.id === transaction.element_in)
            const player_in_name = playerInFilter[0].web_name
            const playerOutFilter = elementStats.filter(element => element.id === transaction.element_out)
            const player_out_name = playerOutFilter[0].web_name
            const managerFilter = playerIds.filter(player => player.entry_id === transaction.entry)
            const manager = managerFilter[0].name

            return {
                added: transaction.added,
                player_in_id: transaction.element_in,
                player_out_id: transaction.element_out,
                player_in_name, 
                player_out_name,
                gameweek: transaction.event,
                type, 
                result, 
                manager,
                manager_id: transaction.entry,
                tracked: false,
                id: transaction.id,
                player_in_retained: true,
                player_in_released: null,
                profit: 0
            }
        })
        return formattedWaivers
    }

    const formatTrades = (trades, elementStats, playerIds) => {
        const formattedTrades = trades.map(trade => {
            const playersInvolved = trade.tradeitem_set.map(playerSwap => {
                const findPlayerIn = elementStats.filter(element => element.id === playerSwap.element_in )
                const findPlayerOut = elementStats.filter(element => element.id === playerSwap.element_out )
                const player_in = findPlayerIn[0].web_name
                const player_out = findPlayerOut[0].web_name

                return { player_in, player_out }
            })

            const findOfferingManager = playerIds.filter(manager => manager.entry_id === trade.offered_entry)
            const findReceivingManager = playerIds.filter(manager => manager.entry_id === trade.received_entry)
            const offering_manager = findOfferingManager[0].name
            const receiving_manager = findReceivingManager[0].name

            return {
                gameweek: trade.event,
                offering_manager, 
                receiving_manager,
                offer_time: trade.offer_time,
                response_time: trade.response_time,
                trade_content: playersInvolved,
                id: trade.id 
            }

        })
        return formattedTrades
    }


    return { formatWaivers, formatTrades }
}