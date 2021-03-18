<template>
  <pokemon />
</template>

<script>
import Pokemon from './components/Pokemon'

export default {
  name: 'App',
  components: {
    Pokemon
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {
  background: #eee;
}
</style>
