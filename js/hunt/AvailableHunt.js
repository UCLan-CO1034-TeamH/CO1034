class AvailableHunt {
    constructor(uuid, name, description, ownerEmail, endsOn, maxDuration) {
        this.uuid = uuid
        this.name = name
        this.description = description
        this.ownerEmail = ownerEmail
        this.endsOn = endsOn
        this.maxDuration = maxDuration
    }
}

function constructAvailableHunt(huntObject) {
    return new AvailableHunt(
        huntObject.uuid,
        huntObject.name,
        huntObject.description,
        huntObject.ownerEmail,
        huntObject.endsOn,
        huntObject.maxDuration
    )
}