<script setup>
const arr = [
  {
    style: {
      display: 'flex',
    },
    note: 'Container hay còn gọi là "cha" chính là cái thằng div mà chứa tất cả các thẻ bên trong nó một cấp. Lưu ý rằng flex chỉ có tác động tới phần tử con nằm trực tiếp trong nó một cấp. ',
  },
  {
    style: {
      display: 'flex',
    },
    note: 'Container hay còn gọi là "cha" chính là cái thằng div mà chứa tất cả các thẻ bên trong nó một cấp. Lưu ý rằng flex chỉ có tác động tới phần tử con nằm trực tiếp trong nó một cấp. ',
  },
  {
    style: {
      display: 'flex',
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng, mặc định sẽ là "stretch" (sẽ tìm hiểu sau đây)',
  },
  {
    style: {
      display: 'flex',
      'align-items': 'flex-start'
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng. <br><br><strong>flex-start | start</strong>: tất cả các item được đẩy lên trên',
  },
  {
    style: {
      display: 'flex',
      'align-items': 'flex-end'
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng. <br><br><strong>flex-end | end</strong>: tất các item sẽ được đẩy xuống dưới',
  },
  {
    style: {
      display: 'flex',
      'align-items': 'center'
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng. <br><br><strong>center</strong>: các item sẽ nằm cân giữa theo trục',
  },
  {
    style: {
      display: 'flex',
      'align-items': 'stretch'
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng. <br><br><strong>stretch</strong>: các item sẽ chiếm hết chiều cao của container nếu không được set height',
  },
  {
    style: {
      display: 'flex',
      'align-items': 'stretch'
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng. <br><br><strong>stretch</strong>: các item sẽ chiếm hết chiều cao của container nếu không được set height',
  },
  {
    style: {
      display: 'flex',
      'align-items': 'baseline'
    },
    note: 'Cũng giống như justify-content nhưng align-item sẽ căn chỉnh các thành phần nhưng theo trục ngang của dòng. <br><br><strong>baseline</strong>: các item bám theo đường baseline của hàng (khác với trục ngang của hàng)',
  },
]
const stepId = ref(0)
const opacity = ref(0)
const note = computed(() => arr[stepId.value].note)
const elementStyle = computed(() => arr[stepId.value].style)
const displayAfter = computed(() => stepId.value === arr.length - 1 ? 'block' : 'none')

const next = () => {
  opacity.value = 1
  stepId.value++
}
</script>

<template>
  <div class="main">
    <div class="wrapper">
      <div class="element" :style="{...elementStyle}" >
        <div class="devblog">devblog 1</div>
        <div class="devblog">devblog 2</div>
        <div class="devblog">devblog 3</div>
      </div>
      <div class="multiple">
      <div class="code">
        <p class="row">
          <span class="class">.container </span>
          {
        </p>
        <p v-for="property of Object.keys(elementStyle)" class="row-2">
          <span class="property">{{ property }}</span>:
          <span>{{ elementStyle[property] }};</span>
        </p>
        <p class="row">}</p>
      </div>
      <div class="code">
        <p class="row">
          <span class="class">.devblog:first-child </span>
          {
        </p>
        <p class="row-2">
          <span class="property">height</span>:
          <span>50px;</span>
        </p>
        <p class="row-2">
          <span class="property">font-size</span>:
          <span>1.3em;</span>
        </p>
        <p class="row">}</p>
      </div>
    </div>
      <pre class="pre">
        <span class="tag">{{ `<div` }}</span>{{ ' class=' }}<span class="class">{{ '"container"' }}</span><span class="tag">{{ `>` }}</span>
           <span class="tag">{{ `<div` }}</span>{{ ' class=' }}<span class="class">{{ '"devblog"' }}</span><span class="tag">{{ `>` }}</span> {{'devblog 1' }}<span class="tag"> {{ '</div>' }}</span> 
           <span class="tag">{{ `<div` }}</span>{{ ' class=' }}<span class="class">{{ '"devblog"' }}</span><span class="tag">{{ `>` }}</span> {{'devblog 2' }}<span class="tag"> {{ '</div>' }}</span>
           <span class="tag">{{ `<div` }}</span>{{ ' class=' }}<span class="class">{{ '"devblog"' }}</span><span class="tag">{{ `>` }}</span> {{'devblog 3' }}<span class="tag"> {{ '</div>' }}</span>
       <span class="tag"> {{ '</div>' }}</span></pre>
      <div class="imp">
        <p v-if="stepId === 1" style="color: wheat; text-decoration: underline;">Chú ý quan trọng:</p>
        <p v-else style="color: wheat; text-decoration: underline;">align-items:</p>
        <p style="color: white" class="notex" v-html="note"></p>
        <button style="position: fixed; top: 750px;" @click="next">Next</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
* {
  transition: all 0.5s ease;
}
.main {
  background-color: #3c4141;
  height: 200vh;
  padding: 50px 50px;
  font-size: 0.875em;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 1.2em;
}
.pre {
  background-color: rgb(27, 37, 37);
  border-radius: 0.5em;
  width: 502px;
  padding: 1em 0;
  color: white;
  line-height: 1.5;
}
p {
  padding: 0;
  margin: 4px;
}
.imp {
  > p {
    opacity: v-bind(opacity);
    transition: opacity 1s ease 0.5s;
  }
  font-family: sans-serif;
  position: fixed;
  top: 500px;
  padding: 0 3em;
  text-align: center;
}
.class {
  color: #e8af46;
}
.property {
  color: #8fcfef;
}
.tag {
  color: #1999cf;
}
.element {
  width: 500px;
  height: 100px;
  z-index: 10;
  opacity: 1;
  color: white;
  font-weight: bold;
  transition: all 1s ease;
  padding: 4px;
  background-color: #ffffff;
  border-radius: 4px;
  position: relative;
  box-shadow: inset -1px 0px 6px 3px #f69300;
}
.element::before {
  content: "";
  width: 120%;
  position: absolute;
  border-bottom: 1px solid red;
  left: -10%;
  top: 50%;
}
.element::after {
  display: v-bind(displayAfter);
  content: "baseline";
  width: 130%;
  position: absolute;
  border-bottom: 1px solid red;
  font-weight: normal;
  left: -15%;
  top: 8%;
}

.note {
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  color: black;
  > .me {
    font-size: 2em;
    color: blue;
    margin: 0;
    padding: 0;
  }
}

.xx {
  flex-flow: row wrap;
}
.devblog {
  border: 1px solid #fff;
  text-align: center;
  right: 0;
  left: 0;
  transition: all 1.5s ease;
  font-weight: normal;
  background-color: #3d4448;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px #666;
  width: 100px;
}
.devblog:first-child  {
  height: 50px;
  font-size: 1.4em;
}
.devblog:last-child  {
  font-size: 0.7em;
}
.code {
  background-color: rgb(27, 37, 37);
  color: white;
  border-radius: 0.5em;
  width: 502px;
  padding: 1em 0;
}
.code > .row {
  &-2{
    margin-left: 40px;
  }
  margin-left: 20px;
}
.notex {
  text-align: center;
  font-size: 1.1em;
}
.notex:deep(li) {
  text-align: left;
}
.multiple {
  width: 508px;
  display: flex;
  gap: 2px;
}
</style>
