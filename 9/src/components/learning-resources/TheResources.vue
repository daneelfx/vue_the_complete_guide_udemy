<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource'
import StoredResources from './StoredResources'

export default {
  components: { AddResource, StoredResources },
  data() {
    return {
      selectedTab: 'stored-resources',
      resources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google ...',
          link: 'https://www.google.com',
        },
      ],
    }
  },
  provide() {
    return {
      resources: this.resources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    }
  },
  computed: {
    storedButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, link) {
      this.resources.unshift({
        id: new Date().toISOString(),
        title,
        description,
        link,
      })
      this.selectedTab = 'stored-resources'
    },
    removeResource(id) {
      const resIndex = this.resources.findIndex(res => res.id === id)
      this.resources.splice(resIndex, 1)
    },
  },
}
</script>
