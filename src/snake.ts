type HeadPoint = {x: number, y: number}
export default class Snake {
    element: HTMLElement
    head: HTMLElement
    bodies: HTMLCollection
    overEle: HTMLElement

    constructor() {
        this.element = document.getElementById("snake") as HTMLElement
        this.head = document.querySelector("#snake > li") as HTMLElement
        this.bodies = document.getElementById("snake")!.getElementsByTagName("li") as HTMLCollection
        this.overEle = document.getElementById("over") as HTMLElement
    }

    getHeadPoint(): HeadPoint{
        return {
            x: this.head.offsetLeft,
            y: this.head.offsetTop
        }
    }

    set X(x: number) {
        if(x === this.head.offsetLeft) {
            return
        }
        this.checkCollision(x, null)
        this.moveBody()
        this.head.style.left = `${x}px`
    }

    set Y(y: number) {
        if(y === this.head.offsetTop) {
            return
        }
        this.checkCollision(null, y)
        this.moveBody()
        this.head.style.top = `${y}px`
    }

    /**
     * 碰撞检测
     * @returns
     */
    checkCollision(x: number | null, y: number | null) {
        const checkX = x != null && (x < 0 || x >= this.element.parentElement!.offsetWidth)
        const checkY = y != null && (y < 0 || y >= this.element.parentElement!.offsetHeight)
        if(checkX || checkY) {
            const diff = this.element.parentElement!.offsetHeight / 2 - this.overEle.offsetHeight
            this.overEle.style.top = `${Math.round(diff)}px`
            throw new Error("撞墙了")
        }
    }

    appendBody(): void {
        this.element.insertAdjacentHTML("beforeend", "<li></li>")
        this.moveBody()
    }

    moveBody(): void {
        const len: number = this.bodies.length

        for(let i = len - 1; i > 0; i --) {
            const pre: HTMLElement = this.bodies[i - 1] as HTMLElement
            const ele: HTMLElement = this.bodies[i] as HTMLElement

            ele.style.left = `${pre.offsetLeft}px`
            ele.style.top = `${pre.offsetTop}px`
        }
    }
}