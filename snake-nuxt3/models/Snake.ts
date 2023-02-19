import UnitSnake from './UnitSnake'

class Snake {
  public static UNIT = 10
  private direction = ref<Direction>('ltr')
  private snakeUnits: UnitSnake[] = []
  private snakeLength: number

  constructor(snakeLength: number = 2) {
    this.snakeLength = snakeLength
    Array.from(Array(snakeLength).keys()).forEach((key) => {
      const snakeUnit = new UnitSnake({
        x: Snake.UNIT * key,
        y: 0
      })
      this.snakeUnits.push(snakeUnit)
    })
  }

  public getSnakeUnits() {
    return this.snakeUnits
  }
  public addUnitSnake() {
    this.snakeLength++
    this.snakeUnits.unshift(this.getSnakeTail())
  }
  public getDirection() {
    return this.direction
  }
  public setDirection(direction: Direction) {
    this.direction.value = direction
  }

  public getSnakeHead() {
    return this.snakeUnits[this.snakeLength - 1]
  }

  public getSnakeTail() {
    return this.snakeUnits[0]
  }

  public run() {
    this.snakeUnits.forEach((unitSnake, index) => {
      setTimeout(() => {
        if (index === this.snakeLength - 1) {
          if (this.direction.value === 'rtl')
            unitSnake.setPosition({
              x: unitSnake.getPosition().x - Snake.UNIT,
              y: unitSnake.getPosition().y
            })
          else if (this.direction.value === 'ltr')
            unitSnake.setPosition({
              x: unitSnake.getPosition().x + Snake.UNIT,
              y: unitSnake.getPosition().y
            })
          else if (this.direction.value === 'btt')
            unitSnake.setPosition({
              x: unitSnake.getPosition().x,
              y: unitSnake.getPosition().y - Snake.UNIT
            })
          else
            unitSnake.setPosition({
              x: unitSnake.getPosition().x,
              y: unitSnake.getPosition().y + Snake.UNIT
            })
        } else unitSnake.setPosition(this.snakeUnits[index + 1].getPosition())
      }, 500 * index)
    })
    // console.log(this.snakeUnits)
  }
}

export default Snake
