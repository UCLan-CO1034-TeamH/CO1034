// import { TreasureHuntApiService } from "./api/TreasureHuntAPI.js"

const huntApiService = new TreasureHuntApiService()
let sessionService = null;

const elementsIds = {
    blockAvailableOfficialHunts: "availableOfficialHunts",
    blockMainMenuButtons: "mainMenuButtons",
    buttonBrowseOfficialGames: "browseOfficialGames",
    buttonPlaySyntheticGame: "playSyntheticGame",
    paragraphLoading: "loading",
    paragraphSelectHunt: "selectHunt",

}

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

const invisibilityClassName = "hidden"

function disableElementVisibility(element) {
    element.classList.remove(invisibilityClassName)
}

function enableElementVisibility(element) {
    element.classList.add(invisibilityClassName)
}

function toggleElementVisibility(element) {
    element.classList.toggle(invisibilityClassName)
}

function disableIdVisibility(id) {
    disableElementVisibility(document.getElementById(id))
}

function enableIdVisibility(id) {
    enableElementVisibility(document.getElementById(id))
}

function toggleIdVisibility(id) {
    toggleElementVisibility(document.getElementById(id))
}

function browseOfficialGames() {
    disableIdVisibility(elementsIds.blockMainMenuButtons)
    enableIdVisibility(elementsIds.paragraphLoading)
    const blockAvailableOfficialHunts = document.getElementById(elementsIds.blockAvailableOfficialHunts)
    huntApiService.getAvailableHunts()
        .then(hunts => {
            hunts.forEach(hunt => {
                const  blockIndividualHunt = document.createElement("div")
                const buttonIndividualHunt = document.createElement("button")
                buttonIndividualHunt.onclick
            })
        })
        .catch((error) => {
            
        })
}

function playSyntheticGame() {

}