<template>
    <div id="app">
        <h1>Todo app</h1>
        <AddTodo />
        <FilterTodo />
        <Todos />
    </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue';
import FilterTodo from './components/FilterTodo.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',
  components: {
      AddTodo,
      FilterTodo,
      Todos
  }
}
</script>

<style>
/* GENERAL */
*,
*::before,
*::after {
    box-sizing: border-box;
}

#app {
    max-width: 1170px;
    margin: 30px auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

/* FORMS */
form {
    display: flex;
}

input {
    flex-grow: 1;
    height: 40px;
    line-height: 40px;
    margin-right: 1rem;
    padding: 0 1rem;
    border: 1px solid #ccc;
}

button {
    appearance: none;
    min-width: 200px;
    height: 40px;
    line-height: 40px;
    font-weight: 700;
    background: lightblue;
    border: 0;
    cursor: pointer;
}
</style>
