<template>
  <div id="app">
      <!--   HEADER   -->
      <Header />
      <div class="container example">
            <h1>{{ message }}</h1>
            Hello World
        </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  data () {
    return {
      message: 'This is Vue - Typescript template'
    }
  },
  components: {
      Header
  }
}
</script>

<style lang="scss" scoped>
    .example {
        color: #ff4455;
    }
</style>