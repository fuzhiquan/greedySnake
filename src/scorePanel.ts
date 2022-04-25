export default class ScorePanel {
    scoreEle: HTMLElement
    levelEle: HTMLElement

    maxScore: number
    maxLevel: number
    constructor(maxScore: number = 10, maxLevel: number = 10) {
        this.scoreEle = document.querySelector("#foot .score") as HTMLElement
        this.levelEle = document.querySelector("#foot .level") as HTMLElement

        this.maxScore = maxScore
        this.maxLevel = maxLevel
    }

    init(): void {
        this.scoreEle.textContent = "0"
        this.levelEle.textContent = "1"
    }

    addScore(): void {
        const score = parseInt(this.scoreEle.textContent as string)
        const afterScore = score + 1
        this.scoreEle.textContent = String(afterScore)

        if(afterScore % this.maxScore === 0) {
            this.upLevel()
        }
    }

    upLevel(): void {
        const level = parseInt(this.levelEle.textContent as string)
        const afterLevel = level + 1
        this.levelEle.textContent = String(afterLevel)
    }
}