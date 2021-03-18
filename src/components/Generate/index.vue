<template>
  <li>
    <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" :alt="name" />
    <div class="infos">
      <p>{{ name }}</p>
      <p>#{{ id }}</p>
    </div>
  </li>
</template>

<script>

export default {
  props: {
    name: { type: String, required: true },
    id: { type: [String, Number], required: true }
  }
}
</script>

<style scoped>
li {
  background: #ffffff;
  width: 200px;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;
  text-transform: capitalize;
}
img {
  width: 96px;
  height: 96px;
  margin: 0 auto;
  display: block;
}
.infos {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
