import { get, postForObject } from "../utils/http"

const baseUrl = "https://codecyprus.org/th/api"

const fetchCurrentLeaderboard = "/leaderboard"

function useGet(endpoint, ...pathVariables) {
    return get(baseUrl + endpoint, ...pathVariables)
}

function usePostForObject(endpoint, object, ...pathVariables) {
    return postForObject(baseUrl + endpoint, ...pathVariables)
}

export class TreasureHuntApiService {

    constructor() {}

    getAvailableHunts() {
        return useGet("/list")
    }

    joinHunt(playerName, huntId) {
        return useGet(
            "/start",
            [
                { name: "player",           value: playerName },
                { name: "app",              value: "TreasurePleasure" },
                { name: "treasure-hunt-id", value: huntId }
            ]
        )
    }

    getNextQuestion(sessionId) {
        return useGet(
            "/question",
            [{ name: "session", value: sessionId }]
        )
    }

    sendAnswer(sessionId, answer) {
        return useGet(
            "/answer",
            [
                { name: "session", value: sessionId },
                { name: "answer",  value: answer }
            ]
        )
    }

    shareLocation(sessionId, latitude, longitude) {
        return useGet(
            "/location",
            [
                { name: "session",   value: sessionId },
                { name: "latitude",  value: latitude },
                { name: "longitude", value: longitude }
            ]
        )
    }

    skipCurrentQuestion(sessionId) {
        return useGet(
            "/skip",
            [{ name: "session", value: sessionId }]
        )
    }

    getCurrentSCore(sessionId) {
        return useGet(
            "/score",
            [{ name: "session", value: sessionId }]
        )
    }

    fetchCurrentLeaderboardUsingSession(sessionId, sorted, limit = undefined) {
        return useGet(
            fetchCurrentLeaderboard,
            [
                { name: "session", value: sessionId },
                { name: "sorted",  value: sorted },
                { name: "limit",   value: sorted ? limit : undefined }
            ]
        )
    }

    fetchCurrentLeaderboardUsingSession(sessionId) {
        return this.fetchCurrentLeaderboardUsingSession(sessionId, false)
    }

    fetchCurrentLeaderboardUsingHunt(huntId, sorted, limit = undefined) {
        return useGet(
            fetchCurrentLeaderboard,
            [
                { name: "treasure-hunt-id", value: huntId },
                { name: "sorted",           value: sorted },
                { name: "limit",            value: sorted ? limit : undefined }
            ]
        )
    }

    fetchCurrentLeaderboardUsingHunt(huntId) {
        return this.fetchCurrentLeaderboardUsingHunt(huntId, false)
    }

}