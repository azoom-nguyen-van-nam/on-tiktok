declare global {
  type Direction = 'rtl' | 'ltr' | 'ttb' | 'btt'
  type Position = {
    x: number
    y: number
  }

  type BreakPoint = {
    position: Position
    direction: Direction
  }
}

export {}
