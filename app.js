const app = Vue.createApp({
    data () {
        return {
            inputClass: "",
            invis: false,
            vis: true,
            BColor: ""

        };
    },
    computed: {
        paraClass() {
            return {
                user1: this.inputClass === "user1",
                user2: this.inputClass === 'user2',
                visible: this.vis === true,
                hidden: this.vis === false,
            }
        }
    },
    methods: {
        switchVis() {
            this.vis = !this.vis;
        }


    },

});

app.mount('#assignment')