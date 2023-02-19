<script lang="ts" setup>
import { CSSProperties } from 'vue'
import Bait from '~~/models/Bait'
import Game from '~~/models/Game'
import Snake from '~~/models/Snake'

const snake = new Snake()
const getSnakeUnits = snake.getSnakeUnits()
const snakeDirection = snake.getDirection()

const snakeRotate = computed(() => {
  if (snakeDirection.value === 'rtl') return '-90deg'
  else if (snakeDirection.value === 'ltr') return '90deg'
  else if (snakeDirection.value === 'btt') return '-180deg'
  return '0'
})

const bait = new Bait(getBaitPosition())
const game = new Game(snake, bait, 0)
const score = game.getScore()

const unitX = computed(() => bait.getPosition().x + 'px')
const unitY = computed(() => bait.getPosition().y + 'px')

const getDirection = (e: KeyboardEvent) => {
  e.preventDefault()
  if (e.code === 'KeyW' || e.code === 'ArrowUp') snake.setDirection('btt')
  else if (e.code === 'KeyS' || e.code === 'ArrowDown')
    snake.setDirection('ttb')
  else if (e.code === 'KeyA' || e.code === 'ArrowLeft')
    snake.setDirection('ltr')
  else if (e.code === 'KeyD' || e.code === 'ArrowRight')
    snake.setDirection('rtl')
}
onMounted(() => {
  document.onkeydown = getDirection
})
const unitStyles = computed<CSSProperties[]>(() => {
  return getSnakeUnits.map((unitSnake) => {
    return {
      position: 'absolute',
      top: unitSnake.getPosition().y + 'px',
      right: unitSnake.getPosition().x + 'px'
    }
  })
})
watch(
  () => bait,
  (x) => {
    console.log(x)
  }
)
</script>

<template>
  <div class="container">
    <div class="playground">
      <div
        class="snake"
        v-if="getSnakeUnits.length > 0"
        v-for="unitStyle in unitStyles"
        :style="unitStyle"
      ></div>
      <div class="unit" :style="{ top: unitY, right: unitX }"></div>
    </div>
    <div class="actions">
      <p class="score">Score: {{ score }}</p>
      <button class="start" @click="game.start">Start</button>
      <p class="guide">
        Press <span class="highlight">start</span> to play the game...
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$width-app: 800px;
$max-width-playground: 600px;
$font-size: 0.875rem;
* {
  border: 1px solid red;
}
.container {
  width: $width-app;
  margin: 0 auto;
  font-size: $font-size;
  > .playground {
    height: 400px;
    width: $max-width-playground;
    background-color: cadetblue;
    border: 4px solid black;
  }
  > .actions {
    width: $max-width-playground;
    margin-top: 50px;
    border: 2px solid #ccc;
    text-align: center;
    padding: 1em;
    font-size: 1.2em;
    > .guide > .highlight {
      color: #deb887;
      font-weight: bold;
    }
    > .score {
      font-size: 1.5em;
      color: red;
    }
  }
}
.playground {
  position: relative;
}
.playground > .snake {
  position: absolute;
  background-image: url(/snake.png);
  background-size: cover;
  filter: brightness(150%);
  width: 10px;
  height: 10px;
  transition: right, top 0.5s ease;
  transform: rotate(v-bind(snakeRotate));
  &:first-child {
    width: 10px;
    height: 10px;
    z-index: 10;
    background-image: url(/bait.png);
  }
}
.playground > .unit {
  position: absolute;
  background-image: url(/bait.png);
  background-size: cover;
  filter: brightness(250%);
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
</style>
