<template>
  <h1 @click="changeName('Felipe Daniel')" class="main-title">Click Me</h1>
  <p>{{ profile.name }}</p>
  <ul>
    <li v-for="hobbie in profile.hobbies" :key="hobbie">{{ hobbie }}</li>
  </ul>
  <h1>Colors in Main Component</h1>
  <ul>
    <li v-for="color in colors" :key="color">{{ color }}</li>
  </ul>
  <h1>Brands in Main Component</h1>
  <ul>
    <li v-for="brand in brands" :key="brand">{{ brand }}</li>
  </ul>
  <p>In main {{ favorite }}</p>
  <secondary-component :brands="brands"></secondary-component>
</template>

<script>
import SecondaryComponent from './SecondaryComponent'

export default {
  components: {
    SecondaryComponent,
  },
  provide() {
    return {
      hobbies: this.profile.hobbies,
      colors: this.colors,
      favorite: this.favorite,
    }
  },
  data() {
    return {
      profile: {
        name: 'Daniel Felipe',
        age: 28,
        hobbies: ['Learng Programming', 'Play Soccer', 'Listen to music'],
      },
      colors: ['Blue', 'Gray', 'White'],
      brands: ['ASUS', 'ACER', 'APPLE'],
      adminName: 'DanielFelipeSolanoLeón',
    }
  },
  computed: {
    favorite() {
      return this.brands.length
    },
  },
  methods: {
    changeName(name) {
      this.profile.name = name
      console.log(this.profile.hobbies)
      this.profile.hobbies = []
      this.colors.unshift('This color is first')
      this.brands.push('Holi')
    },
  },
}
</script>

<style scoped>
.main-title {
  border: 2px solid salmon;
}
</style>
