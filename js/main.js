var app = new Vue({
    el:'#app',
    data: {
        message: 'hello',
        url: 'https://jp.vuejs.org/',
        toggle: false,
        languages: ['java', 'Ruby', 'Python'],

        todoItem:'',
        todos: [],

        bpi: null,
        hasError: false,
        isLoading: true,

        reverseMessage: 'Hello, Vue.js!',
        colorRedMessage: 'Hello,<span style="color:red;"> vue.js</span>',

        number: 1000000,
        ok: false
    },
    mounted() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(res =>{
            console.log({res})
            this.bpi = res.data.bpi
            console.log(this.bpi)
        }).catch(err => {
            // console.log(err)
            this.hasError = true
        }).finally(
            this.isLoading = false
        ) 
    },
    filters: {
        currencyDecimal(value){
            return value.toFixed(2)
        },
        numberFormat(value) {
            return value.toLocaleString();
        }
    },
    methods: {
        showSite() {
            this.toggle ? this.toggle = false : this.toggle = true
        },
        onClick() {
            this.message = 'clicked'
        },
        onReverse() {
            this.reverseMessage = this.reverseMessage.split('').reverse().join('')
        },
        addList(event) {
            // alert(event)
            if (this.todoItem) {
                var todo = {
                    item: this.todoItem,
                    isDone: false
                }
                this.todos.push(todo)
                this.todoItem = ''
            }
        },
        changeOk() {
            this.ok ? this.ok = false : this.ok = true
        },
        deliteItem(index) {
            // alert(index)
            this.todos.splice(index, 1)
        }
    }
})