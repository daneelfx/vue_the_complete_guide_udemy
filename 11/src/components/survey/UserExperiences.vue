<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>

      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue'

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    }
  },
  methods: {
    loadExperiences() {
      this.isLoading = true
      fetch('https://vue-http-demo-e4e31.firebaseio.com/surveys.json')
        .then(response => {
          if (response.ok) {
            return response.json()
          }
        })
        .then(data => {
          this.isLoading = false
          const results = []
          for (const id in data)
            results.push({ id, name: data[id].name, rating: data[id].rating })

          this.results = results
        })
    },
  },
  mounted() {
    this.loadExperiences()
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
