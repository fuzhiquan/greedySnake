import Snake from "./snake"
import Food from "./food"
import ScorePanel from "./scorePanel"

export default class GameContrl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    direction: string = ""

    constructor() {
        this.snake = new Snake
        this.food = new Food
        this.scorePanel = new ScorePanel
    }

    init(): void {
        this.food.change()
        this.scorePanel.init()
        document.addEventListener("keydown", this.keydownHandler.bind(this))
        this.run()
    }

    keydownHandler(e: KeyboardEvent): void {
        this.direction = e.key
    }

    run(): void {
        const headW = this.snake.head.offsetWidth
        let {x, y} = this.snake.getHeadPoint()
        switch(this.direction) {
            case "ArrowUp":
            case "up":
                y -= headW
                break
            case "ArrowDown":
            case "down":
                y += headW
                break
            case "ArrowLeft":
            case "left":
                x -= headW
                break
            case "ArrowRight":
            case "right":
                x += headW
                break
        }

        this.snake.X = x
        this.snake.Y = y
        if(this.eatFood()) {
            this.food.change()
            this.snake.appendBody()
            this.scorePanel.addScore()
        }
        const speed: number = 300 - this.scorePanel.level * 30
        setTimeout(this.run.bind(this), speed)
    }

    eatFood(): boolean {
        const {x, y} = this.snake.getHeadPoint()
        if(this.food.X === x && this.food.Y === y) {
            return true
        }
        return false
    }
}