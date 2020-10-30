<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot name="default" :goal="goal"></slot>
      <h2><slot name="default2" :goal="goal"></slot></h2>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Finish the course', 'Learn Vue'],
    }
  },
}
</script>
