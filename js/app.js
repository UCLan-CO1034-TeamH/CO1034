// import { TreasureHuntApiService } from "./api/TreasureHuntAPI.js"

const huntApiService = new TreasureHuntApiService()
let sessionService = null;

async function getAvailableHunts() {
    let result = []
    const hunts = await huntApiService.getAvailableHunts()
    hunts.forEach(hunt => {
        if (hunt.startsOn <= Date.now()) {
            result.push(hunt)
        }
    });
    return result
}

function browseOfficialGames() {
    const buttonBrowseOfficialGames = document.getElementById("browseOfficialGames")
    const loadingAvailableHunts = document.createElement("p")
    loadingAvailableHunts.textContent = "Loading available hunts..."
    buttonBrowseOfficialGames.replaceWith(loadingAvailableHunts)
    document.getElementById("playSyntheticGame")?.remove()
    huntApiService.getAvailableHunts()
        .then((hunts) => {
            console.log("Available hunts:", hunts)
        })
        .catch((error) => {
            
        })
}

function playSyntheticGame() {

}