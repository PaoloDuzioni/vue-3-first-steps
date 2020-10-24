<template>
  <section class="todos">
      <h2>Your current todos</h2>

      <ul class="todo-list">
          <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
      </ul>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import {useStore} from 'vuex';
import Todo from './Todo.vue'

export default {
    name: 'Todos',
    components: {
        Todo
    },
    setup() {
        const store = useStore();
        const todos = computed(() => store.state.todos);

        onMounted(() => {
            // call store action
            store.dispatch('onFetchTodos');
        });

        return {
            todos
        }
    }
}
</script>

<style>
.todo-list {
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
}

.todo-list:empty::before {
    content: 'Loading...';
    position: fixed;
    top: 0; right: 0; left: 0; bottom: 0;
    display: grid;
    place-content: center;
    font-size: 2em;
    background: rgba(255,255,255, .8);
}
</style>