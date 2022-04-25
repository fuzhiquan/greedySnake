export default class Snake {
    element: HTMLElement
    head: HTMLElement
    eleSiblings: HTMLCollection
    constructor() {
        this.element = document.getElementById("snake") as HTMLElement
        this.head = document.querySelector("#snake > li") as HTMLElement
        this.eleSiblings = document.getElementById("snake")!.getElementsByTagName("li") as HTMLCollection
    }

    init(): void {
        this.element.innerHTML = "<li></li>"
    }
}