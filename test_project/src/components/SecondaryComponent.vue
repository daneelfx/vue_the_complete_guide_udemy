<template>
  <h1 @click="activate" class="active">SECONDARY COMPONENT - CLICK ME</h1>
  <p>This Component is going to render the profile hobbies</p>

  <ul>
    <li v-for="hobbie in hobbies" :key="hobbie">{{ hobbie + ' -' }}</li>
  </ul>
  <h1>Colors in Secondary Component</h1>
  <ul>
    <li v-for="color in colors" :key="color">{{ color + ' -' }}</li>
  </ul>
  <h1>Brands in Secondary Component</h1>
  <ul>
    <li v-for="brand in brands" :key="brand">{{ brand + ' -' }}</li>
  </ul>
  <p>In secondary {{ favorite }}</p>
</template>

<script>
export default {
  props: ['brands'],
  inject: ['hobbies', 'colors', 'favorite'],
  methods: {
    activate() {},
  },
}
</script>

<style scoped>
.active {
  border: 2px solid blue;
}
</style>
