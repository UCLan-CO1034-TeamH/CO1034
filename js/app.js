const elementsIds = {
    blockAvailableOfficialHunts: "availableOfficialHunts",
    blockEnterName:              "blockEnterName",
    blockMainMenuButtons:        "mainMenuButtons",
    buttonBrowseOfficialGames:   "browseOfficialGames",
    buttonPlaySyntheticGame:     "playSyntheticGame",
    formEnterName:               "formEnterName",
    inputName:                   "inputName",
    paragraphEnterName:          "paragraphEnterName",
    paragraphLoading:            "loading",
    paragraphSelectHunt:         "selectHunt",
    textName:                    "textName",
}

const huntApiService = new TreasureHuntApiService()

const invisibilityClassName = "hidden"

let playerName = null

let sessionService = null;

async function getAvailableHunts() {
    let result = []
    const hunts = await huntApiService.getAvailableHunts()
    const now = Date.now();
    console.log("Current time: " + now)
    hunts.forEach(hunt => {
        console.log(hunt)
        if (hunt.startsOn <= now) {
            result.push(hunt)
        } else {
            console.log("Hunt " + hunt.name + " is not available yet. Starts on: " + hunt.startsOn)
        }
    });
    return result
}

function browseOfficialGames() {
    disableIdVisibility(elementsIds.blockMainMenuButtons)
     enableIdVisibility(elementsIds.paragraphLoading)
    const blockAvailableOfficialHunts = document.getElementById(elementsIds.blockAvailableOfficialHunts)
    blockAvailableOfficialHunts.replaceChildren()
    enableElementVisibility(blockAvailableOfficialHunts)
    getAvailableHunts()
        .then(hunts => {
            disableIdVisibility(elementsIds.paragraphLoading)
            hunts.forEach(hunt => {
                const  blockIndividualHunt = document.createElement("div")
                const buttonIndividualHunt = document.createElement("button")
                buttonIndividualHunt.onclick = () => playOfficialGame(hunt.uuid)
                buttonIndividualHunt.innerText = hunt.name
                blockIndividualHunt.appendChild(buttonIndividualHunt)
                blockAvailableOfficialHunts.appendChild(blockIndividualHunt)
            })
        })
        .catch((error) => {
            
        })
}

function disableElementVisibility(element) {
    element.classList.add(invisibilityClassName)
}

function disableIdVisibility(id) {
    disableElementVisibility(document.getElementById(id))
}

function displayMainMenu() {
    disableIdVisibility(elementsIds.blockEnterName)
    disableIdVisibility(elementsIds.blockAvailableOfficialHunts)
    enableIdVisibility(elementsIds.blockMainMenuButtons)
    document.getElementById(elementsIds.textName).textContent = playerName
}

function enableElementVisibility(element) {
    element.classList.remove(invisibilityClassName)
}

function enableIdVisibility(id) {
    enableElementVisibility(document.getElementById(id))
}

function enterName() {
    const inputName = document.getElementById(elementsIds.inputName)
    const nameTrimmed = inputName.value.trim()
    if (nameTrimmed === "") {
        alert("Your name must not be blank.")
        inputName.value = ""
        return
    }
    playerName = nameTrimmed
    displayMainMenu()
}

function playOfficialGame(huntId) {
    console.log("UUID: " + huntId)
}

function toggleElementVisibility(element) {
    element.classList.toggle(invisibilityClassName)
}

function toggleIdVisibility(id) {
    toggleElementVisibility(document.getElementById(id))
}

function playSyntheticGame() {

}