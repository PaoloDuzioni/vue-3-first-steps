<template>
    <section class="filter-todo">
        <h4>Flters</h4>
        <form @submit.prevent="filterTodos">
            <input
                type="number"
                min="1"
                max="200"
                v-model="limit"
                placeholder="Number of Todos to show"
            >
            <button type="submit">Filter</button>
        </form>
    </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: 'FilterTodo',
    setup() {
        const store = useStore();
        const limit = ref(200); // makes this var reactive use .value to read or set it

        const filterTodos = () => {
            // Call store action
            store.dispatch('onFilterTodos', limit.value);
        };
        return {
            limit,
            filterTodos,
        };
    }
}
</script>
