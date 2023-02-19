class Bait {
  private position = reactive<Position>({
    x: 0,
    y: 0
  })
  constructor(position: Position) {
    this.position = position
  }
  setPosition(position: Position) {
    this.position.x = position.x
    this.position.y = position.y
  }
  getPosition() {
    return this.position
  }
}

export default Bait
