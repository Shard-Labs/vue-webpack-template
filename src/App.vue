<template>
  <div id="app">
      <h1>{{ message }}</h1>
      Hello World
      <ComponentA />
  </div>
</template>

<script>
import ComponentA from './components/ComponentA';

export default {
  name: 'app',
  data () {
    return {
      message: 'This is Vue - Typescript template'
    }
  },
  components: {
      ComponentA
  }
}
</script>