<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="{goal}">
        <h2>{{ goal + '/s' }}</h2>
      </template>
      <template #default2="{goal}">
        {{ goal }}
      </template>
    </course-goals>
    <button @click="changeSelected('A')">A</button>
    <button @click="changeSelected('B')">B</button>
    <p v-if="isSelected === 'A'"><input type="text" v-model="isSelected" /></p>
    <p v-if="isSelected === 'B'">B is selected</p>
  </div>
</template>

<script>
import BadgeList from './components/BadgeList'
import TheHeader from './components/TheHeader'
import UserInfo from './components/UserInfo'
import CourseGoals from './components/CourseGoals'

export default {
  components: {
    BadgeList,
    TheHeader,
    UserInfo,
    CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      isSelected: 'A',
    }
  },
  methods: {
    changeSelected(choice) {
      this.isSelected = choice
    },
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
