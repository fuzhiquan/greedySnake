import Snake from "./snake"
import Food from "./food"
import ScorePanel from "./scorePanel"

export default class GameContrl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    constructor() {
        this.snake = new Snake
        this.food = new Food
        this.scorePanel = new ScorePanel
    }

    init(): void {
        this.snake.init()
        this.food.change()
        this.scorePanel.init()
    }
}