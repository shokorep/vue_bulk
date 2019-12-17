var app = new Vue({
    el:'#app',
    data: {
        message: 'hello',
        url: 'https://jp.vuejs.org/',
        toggle: false,
        languages: ['java', 'Ruby', 'Python'],

        todoItem:'',
        todos: []
    },
    methods: {
        showSite() {
            this.toggle ? this.toggle = false : this.toggle = true
        },
        onClick() {
            this.message = 'clicked'
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
        deliteItem(index) {
            // alert(index)
            this.todos.splice(index, 1)
        }
    }
})