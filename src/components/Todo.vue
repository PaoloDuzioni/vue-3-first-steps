<template>
    <li class="todo">
        <h3>{{ todo.title }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.todo {
    padding: 1rem;
    background: lightblue;
}
</style>