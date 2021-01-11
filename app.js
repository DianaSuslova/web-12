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
      if ((this.fam != '') && ( this.name != '')) {
        let w1 = this.fam[0];
        let w2 = this.name[0];
        this.fam = this.fam.toLowerCase().slice(1);
        this.name = this.name.toLowerCase().slice(1);
        this.fam = w1.toUpperCase() + this.fam; 
        this.name = w2.toUpperCase() + this.name;
        console.log(this.fam);
        console.log(this.name);
      }
    }
  }
};
Vue.createApp(App).mount('#app');