class UnitSnake {
  protected position = reactive<Position>({ x: 0, y: 0 })

  constructor(position: Position) {
    this.position.x = position.x
    this.position.y = position.y
  }
  public setPosition(position: Position) {
    this.position.x = position.x
    this.position.y = position.y
  }
  public getPosition() {
    return this.position
  }
}

export default UnitSnake
