const questionTypes = {
    BOOLEAN: "BOOLEAN",
    INTEGER: "INTEGER",
    DECIMAL_FRACTION: "NUMERIC",
    MULTIPLE_CHOICE: "MCQ",
    TEXT: "TEXT"
}

class Question {
    constructor(completed, questionText, questionType, canBeSkipped, requiresLocation, index, correctScore, wrongScore, skipScore) {
        this.completed = completed
        this.questionText = questionText
        this.questionType = questionType
        this.canBeSkipped = canBeSkipped
        this.requiresLocation = requiresLocation
        this.index = index
        this.correctScore = correctScore
        this.wrongScore = wrongScore
        this.skipScore = skipScore
    }
}