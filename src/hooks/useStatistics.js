

export const useStatistics = () => {

    const maxMinScores = (data) => {
        const maxScore = Object.keys(data.scores.players).map(player => {
            const values = Object.values(data.scores.players[player])
            const maxScore = Math.max(...values)
            const minScore = Math.min(...values)

            return { player, minScore, maxScore } 
        })
        maxScore.sort((a, b) => b.maxScore - a.maxScore)
        return maxScore
    }

    const gwkWinsLosses = (data) => {
       const weeks = Object.keys(data.scores.players.Matt)
       const weeklyPlayers = Object.keys(data.scores.players)

       if(weeklyPlayers.length === 8) {
            const weeklyPositions = weeks.map(week => {
                const weekByWeek = weeklyPlayers.map(player => {
                    return { player, score: data.scores.players[player][week]}
                })    
                weekByWeek.sort((a,b) => b.score - a.score)
                return weekByWeek
            })

            const finalPositions = {}

            weeklyPlayers.forEach(player => {
                    const playerPositions = weeklyPositions.map(week => {
                        const index = week.findIndex((name) => name.player === player)
                        const position = index + 1
                        return position
                    })
                    finalPositions[player] = playerPositions
            })
            return finalPositions
       }

       if(weeklyPlayers.length === 9) {
            const weeklyPositions = weeks.map(week => {
                const weekByWeek = weeklyPlayers.map(player => {
                    const didPlayerPlay = data.scores.players[player].hasOwnProperty(week)
                    if(didPlayerPlay) {
                        return { player, score: data.scores.players[player][week] }
                    }
                })    
                weekByWeek.sort((a,b) => b.score - a.score)
                weekByWeek.pop()
                return weekByWeek
            })

            const finalPositions = {}

            weeklyPlayers.forEach(player => {
                const playerPositions = weeklyPositions.map(week => {
                    const index = week.findIndex((name) => name.player === player)
                    if(index !== -1) {
                        const position = index + 1
                        return position
                    }
                })
                finalPositions[player] = playerPositions
            })
            return finalPositions
        }
    }

    const overallPosition = (data) => {
        const root = data.scores.players
        const weeks = Object.keys(root.Matt)
        const weeklyPlayers = Object.keys(root)

        if(weeklyPlayers.length === 8) {
            const playerProgressions = weeklyPlayers.map(player => {
                const values = Object.values(root[player])
                let totalScore = 0
                const progressiveScores = values.map((item, i) => {
                    const score = item + totalScore
                    totalScore = score
                    return score 
                })
                return { player, scores: progressiveScores }
            })
    
            const weekByWeek = weeks.map((week, i) => {
                const weeklyCumulativeScores = playerProgressions.map(player => {
                    const score = player.scores[i]
                    return { player: player.player, score }
                })
                weeklyCumulativeScores.sort((a,b) => b.score - a.score)
                return weeklyCumulativeScores
            })
    
            const finalPositions = {}
    
            weeklyPlayers.forEach(player => {
                const playerPositions = weekByWeek.map(week => {
                    const index = week.findIndex((name) => name.player === player)
                    const position = index + 1
                    return position
                })
                finalPositions[player] = playerPositions
            })
     
            return finalPositions
        }

        if(weeklyPlayers.length === 9) {
            const playerProgressions = weeklyPlayers.map(player => {
                // const gameweeks = Object.keys(root[player])
                let totalScore = 0
                const progressiveScores = weeks.map((item, i) => {
                    if(root[player].hasOwnProperty(item)) {
                        const score = root[player][item] + totalScore
                        totalScore = score
                        return { [item]: score }
                    }
                    if(!root[player].hasOwnProperty(item)) {
                        const score = 0
                        return { [item]: score }
                    }
                })
                return { player, scores: progressiveScores }
            })
    
            const weekByWeek = weeks.map((week, i) => {
                const weeklyCumulativeScores = playerProgressions.map(player => {
                    const score = player.scores[i][week]
                    return { player: player.player, score }
                })
                weeklyCumulativeScores.sort((a,b) => b.score - a.score)
                return weeklyCumulativeScores
            })
    
            const finalPositions = {}
    
            weeklyPlayers.forEach(player => {
                const playerPositions = weekByWeek.map(week => {
                    const index = week.findIndex((name) => name.player === player)
                    const position = index + 1
                    return position
                })
                finalPositions[player] = playerPositions
            })
     
            return finalPositions
        }
    }

    const countGwkWins = (data) => {
        const players = Object.keys(data)
        const weeklyWins = players.map(player => {
            let counter = 0
            data[player].forEach(position => {
                if(position === 1){
                    counter++
                }
            })
            return { player, wins: counter}
        })
        weeklyWins.sort((a, b) => b.wins - a.wins)
        return weeklyWins
    }

    const countGwkLosses = (data) => {
        const players = Object.keys(data)
        const weeklyLosses = players.map(player => {
            let counter = 0
            data[player].forEach(position => {
                if(position === 8){
                    counter++
                }
            })
            return { player, losses: counter}
        })
        weeklyLosses.sort((a, b) => b.losses - a.losses)
        return weeklyLosses
    }

    const findAveragePosition = (data) => {
        const players = Object.keys(data)
        const averagePosition = players.map(player => {
            const length = data[player].length
            const total = data[player].reduce((a, b) => a + b, 0)
            const average = Math.round((total / length) * 100) / 100
            
            return { player, average }
        })
        averagePosition.sort((a, b) => a.average - b.average)
        return averagePosition
    }

    const gwksAtTop = (data) => {
        const players = Object.keys(data)

        const firstPosition = players.map(player => {
            let counter = 0
            data[player].forEach(position => {
                if(position === 1){
                    counter++
                }
            })
            return { player, weeksAtTop: counter}
        })
        firstPosition.sort((a, b) => b.weeksAtTop - a.weeksAtTop)
        return firstPosition
    }

    const gwksAtBottom = (data) => {
        const players = Object.keys(data)
        const lastPosition = players.map(player => {
            let counter = 0
            data[player].forEach(position => {
                if(position === 8){
                    counter++
                }
            })
            return { player, weeksAtBottom: counter}
        })
        lastPosition.sort((a, b) => b.weeksAtBottom - a.weeksAtBottom)
        return lastPosition
    }

    return { maxMinScores, gwkWinsLosses, overallPosition, countGwkWins, countGwkLosses, findAveragePosition, gwksAtTop, gwksAtBottom }
}