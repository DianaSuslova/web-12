let App = {
  data() {
    return {
      fam :'',
      name:'',
      students: []
    };
  },
  methods: {
    famEnter() {
      this.fam = event.target.value;
      console.log(this.fam);
    },
    nameEnter() {
      this.name = event.target.value;
      console.log(this.name);
    },
    Sabmit() {

    }
  }
};
Vue.createApp(App).mount('#app');