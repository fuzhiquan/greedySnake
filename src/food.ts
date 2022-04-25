export default class Food {
    element: HTMLElement
    stageEle: HTMLElement

    constructor() {
        this.element = document.getElementById("food") as HTMLElement
        this.stageEle = document.getElementById("stage") as HTMLElement
    }

    get X(): number {
        return this.element.offsetLeft
    }

    get Y(): number {
        return this.element.offsetTop
    }

    change() {
        const foodW = this.element.offsetWidth
        const randomX = Math.random()
        const randomY = Math.random()
        const x = Math.round(randomX * 10) * Math.round((this.stageEle.offsetWidth - foodW) / foodW)
        const y = Math.round(randomY * 10) * Math.round((this.stageEle.offsetHeight - foodW) / foodW)

        this.element.style.left = `${x}px`
        this.element.style.top = `${y}px`
    }
}