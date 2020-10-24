<template>
    <section class="new-todo">
        <h4>New Todo</h4>
        <form @submit.prevent="addNewTodo">
            <input
                type="text"
                v-model="title"
                placeholder="Add todo"
            >
            <button type="submit">Add</button>
        </form>
    </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: 'AddTodo',
    setup() {
        const store = useStore();
        const title = ref(""); // makes this var reactive use .value to read or set it

        const addNewTodo = () => {
            // Call store action
            store.dispatch('onAddTodo', title.value);

            // Reset field
            title.value = '';
        };

        return {
            title,
            addNewTodo,
        };
    }
}
</script>
