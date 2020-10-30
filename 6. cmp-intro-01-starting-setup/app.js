const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "3192031658",
          email: "dfsolanol@unal.edu.co",
        },
        {
          id: "july",
          name: "July Jhones",
          phone: "3122113443",
          email: "july@julycona.edu.co",
        },
      ],
    }
  },
})

app.component("friend-contact", {
  template: `
  <li>
    <h2>{{name}}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{phone}}</li>
      <li><strong>Email:</strong> {{email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      name: "July Jhones",
      phone: "3122113443",
      email: "july@julycona.edu.co",
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
  },
})

app.mount("#app")
