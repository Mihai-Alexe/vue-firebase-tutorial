<template>
<div class="hello">
  <h1>{{message}}</h1>
  <label>Add a new task </br><input class="add-task" v-model='newTask' /></label></br>
  <button class="button add" type="button" v-on:click='addTask()' name="button" title="Add a task">Add</button>
  <a class="delete is-large" v-on:click="remove()" title="Remove all tasks"></a>
  <div v-if="tasks.length">
   <div v-if="incompleteTasks.length">
     <ul v-for="task in incompleteTasks">
         <h3 class="completed-title">Incompleted</h3>
         <li><input class="checkbox" type="checkbox" v-model="task.completed"> {{ task.description }}</li>
       </ul>
   </div>
   <div v-else class="completed">
     All tasks have been completed!
 </div>
   <hr>
   <div v-if="completedTasks.length">
     <ul v-for="task in completedTasks">
         <h3 class="completed-title">Completed {{ new Date() | moment("calendar") }}</h3>
         <li><input class="checkbox" type="checkbox" v-model="task.completed"> {{ task.description }}</li>
     </ul>
    </div>
    </div>
    <p class="completed" v-else>
   There are no tasks yet
    </p>
    <button type="button" class="button logout" v-on:click="logout" name="button" title="Logout">Logout</button>
    </div>
</template>
<script type="text/javascript">
  import firebase from 'firebase'

  export default {
    name: 'Hello',
    data() {
      return {
        message: 'Todo List',
        newTask: '',
        tasks: [],
      }
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      },
      addTask: function () {
          this.tasks.push({description: this.newTask, completed: false})
          this.newTask = ''
      },
      remove: function (){
          this.tasks.splice({description: this.newTask, completed: true})
      }
    },
    computed: {
        completedTasks: function () {
            return this.tasks.filter(task => task.completed)
        },
        incompleteTasks: function () {
            return this.tasks.filter(task => !task.completed)
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../../node_modules/bulma/bulma.sass'
.hello
    border: 1px solid #41B883
    background: whitesmoke
    padding: 20px
    max-width: 50%
    margin: 20px auto
    position: relative

h1
    color: #35495E
    font-size: 36px
    font-weight: 600
    padding: 20px
    max-width: 100%
    margin: 50px auto
    display: block

input
    border-right: none
    border-left: none
    border-top: none
    border-bottom: 1px solid #41B883
    background: whitesmoke

p
    font-size: 20px
    color: #35495E
    padding: 15px
    margin: 30px auto


label
    font-size: 22px
    color: #35495E

ul li input
    float: left
    margin-top: 5px
    margin-left: 10px

.checkbox
    padding: 5px
    color: red
    background-color: blue

.button
    border-color: #41B883
    background: #41B883
    color: #35495E

.add
    font-weight: 500
    margin-top: 40px
    padding: 0 70px

.add:hover, .logout:hover
    background: whitesmoke
    border-color: #41B883
    color: #41B883

.delete
    position: absolute
    top: 5px
    right: 5px
    background: #41B883
    font-weight: 900

.logout
    font-weight: 500
    padding: 10px
    float: right
    margin: 30px -20px 0 0


.completed
    border: none
    max-width: 50%
    border-bottom: 1px solid #41B883
    border-radius: none
    color: #41B883
    margin: 20px auto

.completed-title
    border: 1px solid #41B883
    padding: 10px
    margin: 20px auto
    font-weight: 600

.add-task
    margin: 20px auto
</style>
