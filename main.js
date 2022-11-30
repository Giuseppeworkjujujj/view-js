Vue.config.devtools = true;
Vue.config.debug = true;

const app = new Vue (
    {
        el: "#root",
        data: {
            messaggio: "",
            nome: "",
            mieClassi: ["red"],
            click: 0,
        },
        methods: {
            incremento: function() {
              this.click++  
            },
            cambio: function() {
                if (this.mieClassi == "red") {
                 this.mieClassi = "blu";
                } else {
                    this.mieClassi = "red";
                }
            }
        }
    }
)
