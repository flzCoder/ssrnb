<template>
  <ul class="container">
    <card :item='item' :key='i' v-for='(item, i) in list' />
  </ul>
</template>

<script>
import card from '../components/card.vue'

export default {
  title () {
    return this.title
  },
  data() {
    return {
      title: '首页'
    }
  },
  asyncData ({ store, route }) {
    return store.dispatch('fetchMain', {name: route.name, id: route.params.id})
  },
  computed: {
    list () {
      return this.$store.state.items[this.$route.name].res;
    }
  },
  components: {
    card
  }
}
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.container {
  max-width: 1080px;
  margin: 0 auto;
}
</style>
