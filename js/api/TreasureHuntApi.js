// import { get, postForObject } from "../utils/http"

const baseUrl = "https://codecyprus.org/th/api"

const fetchCurrentLeaderboard = "/leaderboard"

async function useGet(endpoint, responseToContentMapper, ...pathVariables) {
    const response = await get(baseUrl + endpoint, ...pathVariables)
    if (response.status === "OK") {
        return responseToContentMapper(response)
    } else {
        let sum = ""
        response.errorMessages.forEach((errorMessage, index) => {
            sum += errorMessage
            sum += index < response.errorMessages.length - 1 ? "; " : "."
        });
        throw new Error(sum)
    }
}

// function usePostForObject(endpoint, object, ...pathVariables) {
//     return postForObject(baseUrl + endpoint, object, ...pathVariables)
// }

class TreasureHuntApiService {

    constructor() {}

    getAvailableHunts() {
        return useGet(
            "/list",
            (response) => response.treasureHunts.map(huntObject => constructAvailableHunt(huntObject))
        )
    }

    joinHunt(playerName, huntId) {
        return useGet(
            "/start",
            (response) => new ActiveHunt(response.session, response.numOfQuestions),
            { name: "player",           value: playerName },
            { name: "app",              value: "TreasurePleasure" },
            { name: "treasure-hunt-id", value: huntId }
        )
    }

    getNextQuestion(sessionId) {
        return useGet(
            "/question",
            { name: "session", value: sessionId }
        )
    }

    sendAnswer(sessionId, answer) {
        return useGet(
            "/answer",
            { name: "session", value: sessionId },
            { name: "answer",  value: answer }
        )
    }

    shareLocation(sessionId, latitude, longitude) {
        return useGet(
            "/location",
            { name: "session",   value: sessionId },
            { name: "latitude",  value: latitude },
            { name: "longitude", value: longitude }
        )
    }

    skipCurrentQuestion(sessionId) {
        return useGet(
            "/skip",
            { name: "session", value: sessionId }
        )
    }

    getCurrentScore(sessionId) {
        return useGet(
            "/score",
            { name: "session", value: sessionId }
        )
    }

    fetchCurrentLeaderboardUsingSession(sessionId, sorted = false, limit = undefined) {
        return useGet(
            fetchCurrentLeaderboard,
            { name: "session", value: sessionId },
            { name: "sorted",  value: sorted },
            { name: "limit",   value: sorted ? limit : undefined }
        )
    }

    fetchCurrentLeaderboardUsingHunt(huntId, sorted = false, limit = undefined) {
        return useGet(
            fetchCurrentLeaderboard,
            { name: "treasure-hunt-id", value: huntId },
            { name: "sorted",           value: sorted },
            { name: "limit",            value: sorted ? limit : undefined }
        )
    }

}