import { get, postForObject } from "../utils/http"

const baseUrl = "https://codecyprus.org/th/api"

function useGet(endpoint, ...pathVariables) {
    return get(baseUrl + endpoint, ...pathVariables)
}

function usePostForObject(endpoint, object, ...pathVariables) {
    return postForObject(baseUrl + endpoint, ...pathVariables)
}

export function getAvailableHunts() {
    return useGet("/list")
}

export function joinHunt(playerName, huntId) {
    return useGet(
        "/start",
        [
            { name: "player",           value: playerName },
            { name: "app",              value: "TreasurePleasure" },
            { name: "treasure-hunt-id", value: huntId }
        ]
    )
}