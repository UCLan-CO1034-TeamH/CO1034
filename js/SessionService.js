export class SessionService {

    constructor(sessionId, huntApiService) {
        this.sessionId = sessionId
        this.huntApiService = huntApiService
    }

    getNextQuestion() {
        return this.huntApiService.getNextQuestion(this.sessionId)
    }

    sendAnswer(answer) {
        return this.huntApiService.sendAnswer(this.sessionId, answer)
    }

    shareLocation(latitude, longitude) {
        return this.huntApiService.shareLocation(this.sessionId, latitude, longitude)
    }

    skipCurrentQuestion() {
        return this.huntApiService.skipCurrentQuestion(this.sessionId)
    }

    getCurrentScore() {
        return this.huntApiService.getCurrentScore(this.sessionId)
    }

    fetchCurrentLeaderboard(sorted, limit = undefined) {
        return this.huntApiService.fetchCurrentLeaderboardUsingSession(this.sessionId, sorted, limit)
    }

    fetchCurrentLeaderboard() {
        return this.huntApiService.fetchCurrentLeaderboardUsingSession(this.sessionId)
    }

}