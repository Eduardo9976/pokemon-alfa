<template>
  <error v-if="state.hasError" />
  <div v-if="!state.hasError" class="main">
    <input v-model="state.search" type="text" placeholder="Search" />
    <transition
      v-if="computedPokedex.length > 0"
      appear
      mode="in-out"
      class="animate__animated animate__zoomInUp"
    >
      <ul>
        <template v-for="(pokemon, index) in computedPokedex" :key="index">
          <Generate :name="pokemon.name" :id="pokemon.id" />
        </template>
      </ul>
    </transition>
    <transition
      v-else
      appear
      mode="in-out"
      class="animate__animated animate__zoomInUp"
    >
      <div class="main no-results">
        <p>Ops...Nenhum Pokémon encontrado.</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import Error from '../Error'
import Generate from '../Generate'

export default {
  components: {
    Error,
    Generate
  },
  setup () {
    const state = reactive({
      hasError: false,
      pokedex: [],
      search: ''
    })

    const computedPokedex = computed(() => {
      let payload = []
      if (state.pokedex) {
        payload = state.pokedex.filter(item =>
          item.name.includes(state.search.toLowerCase())
        )
      }
      return payload
    })

    async function getPokemons () {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon/?limit=151'
        )
        const JSONresponse = await response.json()
        JSONresponse.results.forEach(pokemon => {
          const id = `${pokemon.url
            .replace('https://pokeapi.co/api/v2/pokemon/', '')
            .replace('/', '')}`
          state.pokedex.push({ name: pokemon.name, id })
        })
      } catch {
        state.hasError = true
      }
    }

    onMounted(() => {
      getPokemons()
    })
    return {
      state,
      computedPokedex
    }
  }
}
</script>

<style scoped>
.main {
  max-width: 1301px;
  margin: 0 auto;
  padding: 0 20px;
}
input {
  max-width: 1250px;
  width: 100%;
  border: none;
  padding: 20px;
  background: #eee;
  border-bottom: 2px solid #3f3f41;
  outline: none;
  display: block;
  margin: 0 auto;
}
input,
input:active,
input:focus,
input:focus-within,
input:hover,
input:visited {
  font-size: 16px !important;
}
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 10px 0;
}
.no-results {
  padding: 20px;
  text-align: center;
  font-size: 24px;
  color: #ffff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  max-width: 450px;
  margin: 120px auto 0 auto;
}
</style>
