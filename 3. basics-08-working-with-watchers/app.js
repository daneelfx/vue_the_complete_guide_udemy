const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: '',
    }
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(newValue, oldValue)
      if (newValue > 50) {
        setTimeout(
          function () {
            this.counter = 0
          }.bind(this),
          2000
        )
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      console.log("Running again... FULLNAME")
      if (this.name === "" || this.lastName === "") {
        return ""
      }
      return this.name + " " + this.lastName
    },
  },
  methods: {
    outputFullname() {
      console.log("Running again... OUTPUTFULLNAME")
      if (this.name === "") {
        return ""
      }
      return this.name + " " + "Schwarzmüller"
    },
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num
    },
    reduce(num) {
      this.counter = this.counter - num
      // this.counter--;
    },
    resetInput() {
      this.name = ""
    },
  },
})

app.mount("#events")
