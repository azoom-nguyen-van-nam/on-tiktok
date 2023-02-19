import Snake from './Snake'
import Bait from './Bait'

class Game {
  private speedUnit = 500
  private score = ref<number>(0)
  private snake: Snake
  private bait: Bait

  constructor(snake: Snake, bait: Bait, score: number = 0) {
    this.score.value = score
    this.snake = snake
    this.bait = bait
  }
  getSpeedUnit() {
    return this.speedUnit
  }
  setSpeedUnit(speedUnit: number) {
    this.speedUnit = speedUnit
  }
  public getScore() {
    return this.score
  }
  public addScore(score: number) {
    this.score.value += score
  }

  public isAte() {
    if (
      this.snake.getSnakeHead().getPosition().x === this.bait.getPosition().x &&
      this.snake.getSnakeHead().getPosition().y === this.bait.getPosition().y
    ) {
      return true
    }
    return false
  }

  public isDead() {
    if (
      this.snake.getSnakeHead().getPosition().x < 0 ||
      this.snake.getSnakeHead().getPosition().x > 600 ||
      this.snake.getSnakeHead().getPosition().y < 0 ||
      this.snake.getSnakeHead().getPosition().y > 400
    ) {
      return true
    }
    return false
  }

  public start() {
    const timer = setInterval(() => {
      this.snake.run()
      if (this.isAte()) {
        this.bait.setPosition(getBaitPosition())
        this.score.value += 10
        this.snake.addUnitSnake()
      }
      if (this.isDead()) {
        clearInterval(timer)
        alert('Game over')
      }
    }, this.speedUnit)
  }
  public restart() {
    this.score.value = 0
    this.bait.setPosition(getBaitPosition())
    this.start()
  }
}

export default Game
