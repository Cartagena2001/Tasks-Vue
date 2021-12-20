const app = new Vue({
    el: '#app',
    data: {
        title: 'GYM with Vue.js and localStorage',
        Tasks: [],
        newTask: '',
    },
    methods: {
        addTask: function(){
            this.Tasks.push({
                name: this.newTask,
                status: false
            });
            this.newTask = '';
            //add to localstorage
            this.local();
        },

        editTask: function(index){
            this.Tasks[index].status = true;
            this.local();
        },

        deleteTask: function(index){
            if(this.Tasks[index].status === false){
                alert('Complet tasks');
            }else{
                this.Tasks.splice(index, 1);
                this.local();
            }
            
        },

        local: function(){
            localStorage.setItem('gym-vue', JSON.stringify(this.Tasks));
        }
    },

    created: function(){
        let dataDB = JSON.parse(localStorage.getItem('gym-vue'));
        if(dataDB === null){
            this.Tasks = [];
        }else {
            this.Tasks = dataDB;
        }
    }
})