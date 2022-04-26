export default class ScorePanel {
    scoreEle: HTMLElement
    levelEle: HTMLElement
    maxScore: number
    maxLevel: number
    constructor(maxScore: number = 5, maxLevel: number = 10) {
        this.scoreEle = document.querySelector("#foot .score") as HTMLElement
        this.levelEle = document.querySelector("#foot .level") as HTMLElement

        this.maxScore = maxScore
        this.maxLevel = maxLevel
    }

    init(): void {
        this.score = 0
        this.level = 1
    }

    set score(score: number) {
        this.scoreEle.textContent = `${score}`
    }

    set level(level: number) {
        this.levelEle.textContent = `${level}`
    }

    get level(): number {
        return parseInt(this.levelEle.textContent as string)
    }

    addScore(): void {
        const score: number = parseInt(this.scoreEle.textContent as string)
        const afterScore: number = score + 1
        this.score = afterScore

        if(afterScore % this.maxScore === 0) {
            this.upLevel()
        }
    }

    upLevel(): void {
        const level: number = parseInt(this.levelEle.textContent as string)
        const afterLevel: number = level + 1
        this.level = afterLevel
    }
}